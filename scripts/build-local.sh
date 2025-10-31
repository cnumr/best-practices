#!/bin/bash
set -e

# Variables d'environnement pour le build local
export TINA_PUBLIC_IS_LOCAL=true
export TINA_PUBLIC_REF_NAME=RWEB
export NEXT_PUBLIC_REF_NAME=RWEB

# Tuer les processus existants sur le port 9000
echo "🧹 Cleaning up existing processes on port 9000..."
lsof -ti:9000 | xargs kill -9 2>/dev/null || echo "No existing process found"

# Attendre un peu pour que le port soit libéré
sleep 2

echo "🦙 Building TinaCMS..."
# Générer les fichiers TinaCMS (sans lancer de serveur)
tinacms build --local --skip-indexing --skip-cloud-checks

echo "🚀 Starting TinaCMS server in background..."
# Lancer le serveur TinaCMS en arrière-plan avec une commande qui reste active
# On utilise 'tail -f /dev/null' pour garder le processus actif
tinacms dev -c "tail -f /dev/null" > /dev/null 2>&1 &
TINA_SERVER_PID=$!

# Attendre que le serveur soit prêt
echo "⏳ Waiting for TinaCMS server to be ready..."
sleep 8

# Vérifier que le serveur est bien actif
if ! kill -0 $TINA_SERVER_PID 2>/dev/null; then
  echo "❌ TinaCMS server failed to start"
  exit 1
fi

echo "📦 Building Next.js..."
# Build Next.js (le serveur reste actif en arrière-plan)
next build

# Arrêter le serveur
echo "🛑 Stopping TinaCMS server..."
kill $TINA_SERVER_PID 2>/dev/null || true
wait $TINA_SERVER_PID 2>/dev/null || true

echo "✅ Build complete!"
