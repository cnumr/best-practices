#!/bin/bash
set -e

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Dossiers protégés (contenu spécifique au site)
PROTECTED_DIRS="src/content/ public/img_fiches/"

echo -e "${GREEN}=== Synchronisation avec upstream ===${NC}"

# Vérifier que le remote upstream existe
if ! git remote | grep -q "^upstream$"; then
    echo -e "${RED}Erreur: Le remote 'upstream' n'existe pas.${NC}"
    echo "Ajoutez-le avec: git remote add upstream git@github.com:cnumr/gen-referentiel-core.git"
    exit 1
fi

# Fetch upstream
echo -e "${YELLOW}Fetching upstream...${NC}"
git fetch upstream

# Détecter si c'est la première sync (historiques non liés)
MERGE_BASE=$(git merge-base HEAD upstream/main 2>/dev/null || echo "")
if [ -z "$MERGE_BASE" ]; then
    echo -e "${YELLOW}Première synchronisation détectée (historiques non liés).${NC}"
    COMMITS=$(git log --oneline upstream/main | head -10)
    echo -e "${YELLOW}Premiers commits upstream à intégrer :${NC}"
else
    COMMITS=$(git log --oneline HEAD..upstream/main 2>/dev/null || echo "")
    if [ -z "$COMMITS" ]; then
        echo -e "${GREEN}Déjà à jour avec upstream.${NC}"
        exit 0
    fi
    echo -e "${YELLOW}Changements à intégrer :${NC}"
fi

echo "$COMMITS"
echo ""

# Demander confirmation
read -p "Continuer ? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Annulé."
    exit 0
fi

# Merge sans commit (résout les conflits en faveur d'upstream)
echo -e "${YELLOW}Merge upstream/main...${NC}"
git merge upstream/main --no-commit --allow-unrelated-histories -X theirs || true

# Protéger le contenu local
echo -e "${YELLOW}Protection du contenu local...${NC}"
git reset HEAD -- $PROTECTED_DIRS 2>/dev/null || true
git checkout HEAD -- $PROTECTED_DIRS 2>/dev/null || true
git clean -fd -- $PROTECTED_DIRS 2>/dev/null || true

# Commit du merge
echo -e "${YELLOW}Commit du merge...${NC}"
git commit -m "chore: sync upstream (contenu local préservé)" || {
    echo -e "${YELLOW}Rien à commiter (peut-être déjà à jour).${NC}"
}

# Régénérer tina-lock.json
echo -e "${YELLOW}Régénération de tina-lock.json...${NC}"
pnpm tinacms build

# Vérifier si tina-lock.json a changé
if git diff --quiet tina/tina-lock.json 2>/dev/null; then
    echo -e "${GREEN}tina-lock.json inchangé.${NC}"
else
    echo -e "${YELLOW}Commit de tina-lock.json...${NC}"
    git add tina/tina-lock.json
    git commit -m "chore: régénère tina-lock.json après sync upstream"
fi

# Push
echo -e "${YELLOW}Push vers origin...${NC}"
git push

echo ""
echo -e "${GREEN}=== Synchronisation terminée ===${NC}"
echo ""
echo "Vérifications recommandées :"
echo "  pnpm check-types"
echo "  pnpm lint"
echo "  pnpm build-local"
