#!/bin/bash
set -e

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
