#!/bin/bash
set -e

# Charge et exporte les variables du fichier .env si présent (surcharge les variables existantes)
if [ -f .env ]; then
  set -a
  # shellcheck source=/dev/null
  source .env
  set +a
fi

# Ensures NEXT_PUBLIC_REF_NAME is set (defaults to REF_HOME) so the generate-api scripts (generate-api-data.mjs and generate-openapi-spec.mjs) see the correct ref and don't fall back to RWEB, which has no `src/content/fiches/` to scan and would fail
export NEXT_PUBLIC_REF_NAME=${NEXT_PUBLIC_REF_NAME:-REF_HOME}

# Generate API data from MDX files
echo "Generating API data..."
node scripts/generate-api-data.mjs

# Generate OpenAPI spec
echo "Generating OpenAPI spec..."
node scripts/generate-openapi-spec.mjs

# Build TinaCMS
tinacms build --local --skip-indexing

# Start TinaCMS server in background
tinacms dev -c "tail -f /dev/null" > /dev/null 2>&1 &
TINA_PID=$!

# Wait for server to be ready
sleep 5

# Build Next.js
NODE_ENV=production next build

# Cleanup TinaCMS
kill $TINA_PID 2>/dev/null || true

# Generate Pagefind index
echo "Generating Pagefind index..."
npx pagefind --site .next/server/app --output-path public/pagefind
