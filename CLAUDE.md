# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Méthodologie APEX

Appliquer systématiquement la méthode **APEX** pour chaque tâche :

| Phase | Action |
|-------|--------|
| **A**nalyze | Lire/explorer le code concerné, comprendre le contexte et les contraintes |
| **P**lan | Présenter le plan d'action et attendre validation avant d'implémenter |
| **E**xecute | Implémenter la solution uniquement après accord |
| e**X**amine | Tester/valider le résultat, vérifier qu'il n'y a pas de régression |

**Règles :**
- Ne jamais coder sans avoir d'abord analysé et planifié
- Toujours attendre la validation du plan avant d'exécuter
- Toujours vérifier le résultat après implémentation
- **Ne JAMAIS faire de commit sans demande explicite de l'utilisateur**
- **Quand l'utilisateur demande un commit, toujours demander s'il veut aussi créer un changeset et une PR**

**Commandes de validation (eXamine) :**
```bash
pnpm check-types  # Vérifier les types TypeScript
pnpm lint         # Vérifier le linting
pnpm build-local  # Vérifier que le build fonctionne
```

## Project Overview

This is a **generic multi-referential platform** for eco-design best practices, maintained by the Collectif Green IT (CNUMR). It's a Next.js web application that uses TinaCMS as a headless CMS to manage eco-design best practices content in MDX format.

The codebase serves as a shared core (`gen-referentiel-core`) that can be configured for different referentials (RWP, RWEB, REIPRO, RIA, etc.) via environment variables:
- `NEXT_PUBLIC_REF_NAME` - Used by Next.js at runtime
- `TINA_PUBLIC_REF_NAME` - Used by TinaCMS at build time

Both variables must be set to the same value.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **CMS**: TinaCMS (self-hosted with GitHub as content backend)
- **Styling**: Tailwind CSS
- **Database**: MongoDB Atlas (for TinaCMS indexing)
- **Hosting**: Vercel
- **Package Manager**: pnpm

## Development Commands

```bash
# Install dependencies
pnpm install

# Run development server (local mode - no MongoDB needed)
pnpm dev

# Run development server in production mode (requires MongoDB)
pnpm dev:prod

# Production build (requires MongoDB)
pnpm build

# Local build (no MongoDB needed, for testing)
pnpm build-local

# Lint & Type check
pnpm lint           # Run both Next.js and MDX linting
pnpm lint:next      # Next.js linting only
pnpm lint:md        # MDX linting only
pnpm check-types    # TypeScript type checking

# Format code
pnpm prettier

# Clean build artifacts
pnpm clean

# Serve local build (after build-local)
pnpm serve-local

# Local MongoDB with Docker
pnpm docker:up      # Start MongoDB container
pnpm docker:down    # Stop MongoDB container

# Synchronisation upstream (pour les repos dérivés)
pnpm sync-upstream  # Sync avec gen-referentiel-core

# Documentation (Retype)
pnpm doc            # Start documentation server
```

## Architecture

### Content Structure (`src/content/`)

- **fiches/**: Best practice sheets organized by language (fr/, en/, es/)
  - Files follow naming: `RWP_<category>.<number>-<slug>.mdx`
  - Categories: 1 (Installation), 2 (Fonctionnalités), 3 (Design), 4 (Code), 5 (Médias), 6 (Mesure), 7 (Serveur), 8 (Maintenance)
- **lexique/**: Glossary entries by language *(optionnel)*
- **personas/**: User personas by language *(optionnel)*
- **home/**: Homepage content by language
- **mentionsLegales/**: Legal notices by language

**Note :** Le lexique et les personas sont optionnels. Si le contenu n'existe pas ou si la feature est désactivée dans `referentiel-config.ts`, les pages affichent un message "Aucun contenu disponible" ou retournent 404.

### App Structure (`app/`)

Uses Next.js App Router with dynamic `[lang]` segment for i18n:
- `app/[lang]/page.tsx` - Homepage
- `app/[lang]/fiches/` - Best practices listing and detail pages
- `app/[lang]/lexique/` - Glossary
- `app/[lang]/personas/` - Personas

### TinaCMS Configuration (`tina/`)

- `config.tsx` - Main TinaCMS configuration
- `collections/` - Content type definitions (fiches, lexique, personas, home, mentionsLegales)
- `utils/` - Shared field definitions and templates

### Multi-Referential Configuration

The codebase supports multiple referentials via `referentiel-config.ts`:
- **RWEB** (Web eco-design) - Default referential if not configured
- **RWP** (WordPress eco-design)
- **REIPRO** (Software integration - Intégration de progiciels)
- **RIA** (Generative AI usage - Utilisation de l'IA générative)
- **REF_HOME** (Home portal - aggregates all referentials)

The active referential is set via `NEXT_PUBLIC_REF_NAME` and `TINA_PUBLIC_REF_NAME` environment variables (both must match). Each referential has its own feature flags (lexique, personas, filters, measurement scales, etc.) defined in `referentiel-config.ts`.

## Key Configuration Files

- `referentiel-config.ts` - Feature flags and i18n configuration per referential
- `i18n/ui.ts` - UI translations
- `src/content/constants/index.ts` - Field options for lifecycle, scope, saved_resources, etc.

### MDX Content Validation (`content/`)

Les schémas YAML valident le frontmatter des fichiers MDX via `pnpm lint:md`. Le schéma utilisé dépend de `NEXT_PUBLIC_REF_NAME` :

| Schéma | Référentiels | Particularités |
|--------|--------------|----------------|
| `fiche.schema.yaml` | RWEB, REIPRO, RIA (défaut) | `environmental_impact`/`priority_implementation` = number, `scope` optionnel |
| `fiche.schema.rwp.yaml` | RWP | `environmental_impact`/`priority_implementation` = string, `scope` requis |

La sélection est faite dynamiquement dans `.remarkrc.mjs` selon la variable d'environnement.

## Content Editing

Content can be edited:
1. **Locally**: Direct MDX file editing in `src/content/`
2. **Via TinaCMS Admin**: Access at `/admin` when running dev server

## Versioning avec Changesets

Le projet utilise [Changesets](https://github.com/changesets/changesets) pour gérer les versions. Cela permet de tracker la synchronisation entre les différentes instances (RWP, RWEB, REIPRO, etc.).

### Workflow

1. **Après un changement significatif**, créer un changeset :
   ```bash
   pnpm changeset
   ```
   Cela crée un fichier dans `.changeset/` décrivant le changement (patch/minor/major).

2. **Pour publier une nouvelle version** :
   ```bash
   pnpm release
   ```
   Cela applique les changesets, met à jour la version dans `package.json`, génère le `CHANGELOG.md` et commit.

### Types de versions

| Type | Quand l'utiliser |
|------|------------------|
| `patch` | Bug fixes, corrections mineures |
| `minor` | Nouvelles fonctionnalités rétro-compatibles |
| `major` | Breaking changes, modifications majeures |

### Vérifier la synchronisation

Comparer la version dans `package.json` entre `gen-referentiel-core` et les projets dérivés permet de savoir s'ils sont synchronisés.

## Commit Message Convention (Conventional Commits - French)

Format: `<type>(<scope>): <description>`

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`, `build`, `revert`

Rules:
- Write in French
- Use imperative present tense (ajoute, corrige, améliore)
- Max 200 characters
- No final period

Examples:
- `feat: ajoute authentification OAuth2`
- `fix(auth): corrige la validation du token JWT`
- `docs: met à jour la documentation API`

## Important Notes

- **Local build** : `pnpm build-local` fonctionne (lance TinaCMS en arrière-plan pendant le build Next.js)
- **Production build** : `pnpm build` nécessite MongoDB et les variables d'environnement GitHub
- When running locally with `pnpm dev`, MongoDB is not required (`TINA_PUBLIC_IS_LOCAL=true`)
- Content changes trigger automatic Vercel deployments when pushed to GitHub

## Problèmes connus et solutions

### ERR_REQUIRE_ESM sur Vercel (react-dnd)

**Problème** : L'erreur `ERR_REQUIRE_ESM: require() of ES Module react-dnd-html5-backend` apparaît sur Vercel lors de l'authentification TinaCMS.

**Cause** : `@udecode/plate-dnd` (dépendance interne de TinaCMS) utilise `require()` pour importer `react-dnd@16` qui est ESM-only.

**Solution** : Forcer react-dnd v14 (CommonJS) via pnpm overrides dans `package.json` :

```json
"pnpm": {
  "overrides": {
    "react-dnd": "14.0.5",
    "react-dnd-html5-backend": "14.1.0"
  }
}
```

**Après modification** : Régénérer le lockfile avec `trash node_modules pnpm-lock.yaml && pnpm install`

**Références** :
- https://github.com/tinacms/tina-self-hosted-demo/issues/131
- https://github.com/udecode/plate/issues/1609
