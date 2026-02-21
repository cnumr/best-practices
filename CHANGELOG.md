# gen-referentiel-core

## 0.6.1

### Patch Changes

- 3fe274b: Protège README.md lors de la synchronisation upstream pour éviter qu'il soit écrasé par la version du core.

## 0.6.0

### Minor Changes

- 59df3df: Ajoute script et commande `pnpm sync-upstream` pour automatiser la synchronisation avec upstream

  - Détecte automatiquement la première sync vs les suivantes
  - Protège le contenu local (`src/content/`, `public/img_fiches/`)
  - Régénère `tina-lock.json` après merge
  - Commit et push automatiques

## 0.5.0

### Minor Changes

- c827fa0: Protège les branches main/master contre l'édition directe via TinaCMS

  - Nouveau `ProtectedGitHubProvider` qui bloque les écritures sur les branches protégées
  - Warning visuel `warnOnMainMasterBranch` affiché dans l'interface d'édition
  - Les contributeurs doivent utiliser une branche de travail et soumettre une PR

## 0.4.8

### Patch Changes

- 82c479e: fix(deps): force react-dnd v14 pour compatibilité CommonJS sur Vercel

  Corrige l'erreur ERR_REQUIRE_ESM causée par @udecode/plate-dnd qui utilise require() pour importer react-dnd v16 (ESM-only).

## 0.4.7

### Patch Changes

- 6808827: Aligne configuration TinaCMS sur le repo officiel tina-self-hosted-demo

## 0.4.6

### Patch Changes

- 78f3330: Ajoute react-dnd v16 en dépendance directe pour compatibilité TinaCMS/Vercel

## 0.4.5

### Patch Changes

- cb939fb: Rétablit overrides react-dnd pour compatibilité runtime Vercel Functions

## 0.4.4

### Patch Changes

- 9cfaa3b: Utilise transpilePackages pour résoudre les problèmes ESM avec react-dnd sur Vercel
- c839a97: Force react-dnd-html5-backend v15 pour compatibilité CommonJS sur Vercel

## 0.4.3

### Patch Changes

- 7800fd0: fix(auth): corrige l'authentification TinaCMS sur Vercel en mettant à jour tinacms-authjs de 5.0.9 vers 8.0.2

## 0.4.2

### Patch Changes

- d0f3d2c: Corrige l'URL du serveur Swagger sur Vercel - utilise maintenant VERCEL_URL pour générer dynamiquement l'URL correcte en production au lieu de localhost:3000

## 0.4.1

### Patch Changes

- 36b1ffc: Corrige le workflow de synchronisation upstream pour protéger le contenu local lors des merges

## 0.4.0

### Minor Changes

- 83f28ec: Ajoute l'API `/api/versions` pour lister les versions disponibles dans les fiches. Refactorise le script de génération pour itérer sur les locales configurées au lieu de scanner le filesystem, et inclut les versions distinctes dans le JSON généré.

### Patch Changes

- 298ebc1: Centralise la documentation dans `docs/` et supprime les fichiers en doublon à la racine (API.md, PLAN_UPSTREAM_SYNC.md, PLAN_DYNAMIC_SCHEMA.md).

## 0.3.0

### Minor Changes

- 03530ad: Ajoute une API REST complète avec documentation Swagger

  Cette mise à jour introduit une API REST publique permettant d'accéder aux fiches du référentiel de manière programmatique :

  **Nouveaux endpoints :**

  - `GET /api/fiches` - Liste toutes les fiches (avec filtres lang/version)
  - `GET /api/fiches/{id}` - Récupère une fiche par son ID
  - `GET /api/languages` - Liste des langues disponibles

  **Documentation interactive :**

  - Interface Swagger UI accessible à `/swagger-ui.html`
  - Spécification OpenAPI 3.0 à `/api-docs/swagger`
  - Documentation complète dans `docs/api.md` et `API.md`

  **Architecture :**

  - Génération des données JSON au build depuis les fichiers MDX
  - API Routes Next.js avec rendu dynamique forcé
  - Cache HTTP (1h) pour optimiser les performances
  - Pas de dépendance MongoDB en runtime
  - Filtrage automatique des fiches non publiées

  Cette API permet aux développeurs d'intégrer les bonnes pratiques du référentiel dans leurs propres applications.

## 0.2.2

### Patch Changes

- 4233a4c: docs: mise à jour complète de la documentation

  - Ajoute guide de synchronisation upstream complet
  - Corrige retype.yml (URL et repo)
  - Met à jour les versions des dépendances (TinaCMS 2.10.1, Next.js 14.2.35)
  - Ajoute section Changesets dans developpement.md
  - Complète installation.md avec NEXT_PUBLIC_REF_NAME
  - Met à jour configuration.md avec tous les référentiels (REIPRO, RIA)

## 0.2.1

### Patch Changes

- fix(lint): charge automatiquement les variables d'environnement dans le linting MDX

  Ajoute l'import de `dotenv/config` dans `.remarkrc.mjs` pour que `pnpm lint:md`
  utilise automatiquement les variables du fichier `.env` (notamment `NEXT_PUBLIC_REF_NAME`
  pour sélectionner le bon schéma de validation).

## 0.2.0

### Minor Changes

- ### Validation MDX dynamique par référentiel

  - Les schémas de validation du frontmatter (`pnpm lint:md`) sont maintenant sélectionnés dynamiquement selon `NEXT_PUBLIC_REF_NAME`
  - `fiche.schema.yaml` : schéma par défaut (RWEB, REIPRO, RIA) avec types number
  - `fiche.schema.rwp.yaml` : schéma RWP avec types string et scope requis

  ### SEO amélioré

  - Ajout des meta OpenGraph et Twitter sur toutes les pages
  - Configuration de metadataBase pour les URLs des images sociales

  ### Outillage

  - Configuration de Changesets pour le suivi des versions entre instances
