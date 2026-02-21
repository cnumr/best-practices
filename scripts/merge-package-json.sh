#!/bin/bash
# Script de merge intelligent pour package.json
# Garde les champs locaux (name, description) mais prend les dépendances upstream
#
# Usage: Ce script est appelé automatiquement par git via .gitattributes
# Arguments: %O %A %B (ancestor, current, other)

ANCESTOR="$1"  # Version commune ancêtre
CURRENT="$2"   # Version locale (notre fork)
OTHER="$3"     # Version upstream (core)

# Vérifier que jq est installé
if ! command -v jq &> /dev/null; then
    echo "❌ jq est requis pour le merge de package.json"
    echo "   Installez-le avec: brew install jq"
    exit 1
fi

# Champs à garder de la version locale
LOCAL_NAME=$(jq -r '.name' "$CURRENT")
LOCAL_DESCRIPTION=$(jq -r '.description' "$CURRENT")
LOCAL_REPOSITORY=$(jq '.repository' "$CURRENT")
LOCAL_HOMEPAGE=$(jq -r '.homepage' "$CURRENT")
LOCAL_BUGS=$(jq '.bugs' "$CURRENT")

# Prendre la version upstream comme base
cp "$OTHER" "$CURRENT.tmp"

# Remplacer les champs spécifiques au site avec les valeurs locales
jq --arg name "$LOCAL_NAME" \
   --arg desc "$LOCAL_DESCRIPTION" \
   --argjson repo "$LOCAL_REPOSITORY" \
   --arg home "$LOCAL_HOMEPAGE" \
   --argjson bugs "$LOCAL_BUGS" \
   '.name = $name | .description = $desc | .repository = $repo | .homepage = $home | .bugs = $bugs' \
   "$CURRENT.tmp" > "$CURRENT"

rm "$CURRENT.tmp"

echo "✅ package.json mergé (local: name, description, repository | upstream: dependencies, scripts)"
exit 0
