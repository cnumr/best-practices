# Mémoire du projet RWEB - Informations pour l'IA

Ce fichier contient les informations importantes sur le projet RWEB pour aider l'assistant IA à comprendre le contexte et la structure du projet.

---

## 📋 Vue d'ensemble du projet

- **Nom** : RWEB - Les 115 bonnes pratiques d'écoconception web
- **URL de production** : https://rweb.greenit.fr/
- **Organisation** : GreenIT.fr / Frédéric Bordage
- **Version actuelle** : 5.0.0 (juin 2025)
- **Repository GitHub** : github.com/cnumr/best-practices
- **Langues supportées** : Français, Anglais, Espagnol

### Description
RWEB est un référentiel qui recense 115 bonnes pratiques pour réduire les impacts environnementaux des services numériques. Le contenu est disponible sur rweb.greenit.fr et a été publié par Frédéric Bordage / GreenIT.fr chez Eyrolles depuis 2012.

---

## 🏗️ Architecture technique

### Stack principale
- **Framework** : Next.js 14.2.14 (App Router)
- **CMS** : TinaCMS 2.5.2 (self-hosted)
- **Styling** : Tailwind CSS 3.4.17
- **Langages** : TypeScript 5.7.2, JavaScript, MDX
- **Package Manager** : pnpm 10.7.1

### Base de données
- **Production** : MongoDB Atlas (via `mongodb-level`)
- **Local** : Fichiers système (via `createLocalDatabase()`)

### Outils de build
- **next-plugin-preval** : Génération de données au build time
- **TinaCMS CLI** : Génération des types GraphQL et admin

---

## 📁 Structure du contenu

### Organisation des fichiers
```
src/content/
├── fiches/
│   ├── fr/     # 119 fiches MDX en français
│   ├── en/     # 119 fiches MDX en anglais
│   └── es/     # 119 fiches MDX en espagnol
├── lexique/
│   └── fr/     # Glossaire technique
├── personas/
│   ├── fr/     # 9 personas en français
│   ├── en/     # 9 personas en anglais (traduits)
│   └── es/     # 9 personas en espagnol (traduits)
├── home/
│   ├── fr.mdx
│   ├── en.mdx
│   └── es.mdx
└── mentionsLegales/
    ├── fr.mdx
    ├── en.mdx
    └── es.mdx
```

### Structure d'une fiche (frontmatter MDX)
Chaque fiche contient :
- **Métadonnées** : `refID`, `title`, `versions`, `language`, `published`, `refType`
- **Critères** :
  - `priority_implementation` : 1-5 (5 = facile)
  - `environmental_impact` : 1-5 (5 = fort impact)
  - `moe` : niveau de mise en œuvre
  - `lifecycle` : étape du cycle de vie (1-specification, etc.)
- **Contexte** :
  - `responsible` : liens vers personas
  - `tiers` : user-device, server, etc.
  - `saved_resources` : cpu, ram, storage, network, requests
- **Validations** : règles de conformité avec seuils
- **RGESN** : correspondance avec le référentiel ARCEP (depuis v5)

---

## ⚙️ Configuration

### Configuration multi-référentiels
Le fichier `referentiel-config.ts` permet de gérer plusieurs référentiels :

- **RWEB** (actif) :
  - 115 bonnes pratiques, version 5.0.0
  - Langues : FR, EN, ES
  - Fonctionnalités : lexique ✅, fiches ✅, rgesnField ✅, etc.

- **RWP** :
  - Version WordPress
  - Langue : FR uniquement
  - Fonctionnalités différentes

- **REF_HOME** :
  - Page d'accueil des référentiels
  - Mode root

### Variables d'environnement

#### Production (Vercel)
```env
TINA_PUBLIC_IS_LOCAL=false
TINA_PUBLIC_REF_NAME=RWEB
NEXT_PUBLIC_REF_NAME=RWEB
MONGODB_URI=<uri-mongodb-atlas>
GITHUB_PERSONAL_ACCESS_TOKEN=<token-with-content-access>
GITHUB_OWNER=<owner>
GITHUB_REPO=<repo>
GITHUB_BRANCH=main (ou VERCEL_GIT_COMMIT_REF)
NEXTAUTH_SECRET=<secret>
```

#### Local
```env
TINA_PUBLIC_IS_LOCAL=true
TINA_PUBLIC_REF_NAME=RWEB
NEXT_PUBLIC_REF_NAME=RWEB
```

**Note** : En mode local, les variables GitHub et MongoDB ne sont pas nécessaires car on utilise `createLocalDatabase()` qui lit directement les fichiers.

---

## 🔧 Scripts npm/pnpm

### Développement
- `pnpm dev` : Développement en mode local (sans auth, fichiers locaux)
- `pnpm dev:prod` : Développement en mode production (avec MongoDB + GitHub)

### Build
- `pnpm build` : Build production (utilise MongoDB + GitHub + partial-reindex)
- `pnpm build-local` : Build local avec serveur TinaCMS maintenu actif (via `scripts/build-local.sh`)
- `pnpm serve-local` : Servir le build local sur http://localhost:3000 (après `build-local`)
- `pnpm start` : Démarrer le serveur de production (reconstruit TinaCMS)

### Autres
- `pnpm lint` : Linter Next.js + Markdown
- `pnpm validate:mdx` : Valider les fichiers MDX avec remark (inclut validation personas)
- `pnpm docker:up` : Démarrer MongoDB local (Docker)
- `pnpm clean` : Nettoyer `.next` et `tina/__generated__`

---

## 🐛 Problèmes connus et solutions

### Build local - Solution avec serveur actif

**Problème fondamental** : 
`createLocalDatabase()` utilise un serveur IPC via `many-level` qui s'arrête après `tinacms build`. Lorsque `next build` essaie de générer les pages statiques en appelant `generateStaticParams()`, il ne peut plus se connecter au serveur (erreur `LEVEL_CONNECTION_LOST`).

**Solution mise en place** :
Le script `scripts/build-local.sh` maintient le serveur TinaCMS actif pendant tout le build Next.js en :
1. Lançant `tinacms build` pour générer les fichiers
2. Démarrant `tinacms dev` en arrière-plan pour maintenir le serveur IPC actif
3. Attendant que le serveur soit prêt
4. Lançant `next build` (le serveur reste actif)
5. Arrêtant le serveur après le build

**Alternatives** :
1. **Pour le développement** : Utiliser `pnpm dev` (le serveur reste actif)
2. **Pour tester un build local** : Utiliser `pnpm build-local` (script qui maintient le serveur actif)
3. **Pour tester avec MongoDB** : Utiliser `pnpm build-local-with-mongo` (démarre MongoDB local)
4. **En production** : Le build fonctionne car il utilise MongoDB Atlas et GitHub

### Build local - Correction des références responsables

**Problème identifié** :
Le build local échouait avec l'erreur `Unable to find lookup key for FichesResponsibleResponsible` car certaines fiches référençaient des personas français dans les versions EN/ES, ou des personas inexistants.

**Solutions mises en place** :

1. **Schéma de validation amélioré** (`content/fiche.schema.yaml`) :
   - Validation stricte du champ `responsible` (minItems: 1, pattern, required)
   - Détecte les tableaux vides et les références malformées

2. **Plugin remark personnalisé** (`plugins/remark-validate-persona-references.mjs`) :
   - Vérifie l'existence des fichiers personas référencés
   - Intégré dans `.remarkrc.mjs`
   - S'exécute avec `pnpm validate:mdx`

3. **Script de correction automatique** (`scripts/fix-persona-references.mjs`) :
   - Synchronise automatiquement les références personas dans les fiches EN/ES
   - Se base sur les références de la version FR
   - Mapping automatique FR → EN/ES (9 personas traduits)
   - Usage : `node scripts/fix-persona-references.mjs`

4. **Personas traduits** :
   - 9 personas créés en anglais (en/)
   - 9 personas créés en espagnol (es/)
   - Toutes les fiches EN/ES (121 de chaque) mises à jour avec les bonnes références

**Résultat** : Le build local fonctionne maintenant sans erreurs.

---

## 🔍 Points techniques importants

### TinaCMS
- Génère les types GraphQL dans `tina/__generated__/`
- Configuration dans `tina/config.tsx`
- Collections définies dans `tina/collections/`
- Database adapter dans `tina/database.ts`

### Next.js
- Utilise App Router (dossier `app/`)
- Static generation pour les pages (`generateStaticParams`)
- Routes dynamiques : `app/[lang]/fiches/[slug]/page.tsx`
- Internationalisation via paramètre `[lang]`

### Contenu
- Format MDX avec frontmatter YAML
- Schémas de validation dans `content/*.schema.yaml`
- Validation remark dans `.remarkrc.mjs` (inclut `remark-validate-persona-references`)
- Images dans `public/img_fiches/`

### Personas
- 9 personas par langue (FR, EN, ES)
- Référencés dans le champ `responsible` des fiches
- Format de référence : `src/content/personas/{lang}/{nom-persona}.mdx`
- Mapping FR → EN/ES dans `scripts/fix-persona-references.mjs`

---

## 📚 Ressources externes

- **RGESN** : Référentiel Général d'Écoconception de Services Numériques (ARCEP)
- **Documentation TinaCMS** : https://tina.io/docs/self-hosted/overview/
- **Repository GitHub** : Discussions pour contributions

---

## 🔄 Workflow de contribution

1. Proposer dans GitHub Discussions (avec labels : ajout, modification, suppression)
2. Créer une Issue avec le tag approprié
3. Créer une Pull Request depuis un fork
4. Validation par l'équipe projet

Équipe projet :
- Thomas Broyer
- Raphaël Lemaire
- Romuald Priol
- Thomas Lemaire

---

## 💡 Notes pour l'IA

- Toujours vérifier `TINA_PUBLIC_IS_LOCAL` avant d'utiliser des variables GitHub/MongoDB
- Les fichiers de contenu sont dans `src/content/`, pas dans `content/`
- Le build local nécessite uniquement `TINA_PUBLIC_IS_LOCAL=true`
- TinaCMS en mode local lit directement les fichiers, pas de MongoDB nécessaire
- Le projet utilise `next-plugin-preval` pour la génération de données au build
- Le script `scripts/build-local.sh` maintient le serveur TinaCMS actif pendant le build Next.js pour résoudre le problème de connexion IPC
- **Les références personas doivent correspondre à la langue de la fiche** : fiches EN → personas EN, fiches ES → personas ES
- Le plugin `remark-validate-persona-references.mjs` vérifie l'existence des fichiers personas référencés
- Utiliser `scripts/fix-persona-references.mjs` pour synchroniser les références après création/modification de fiches ou personas
- Après `build-local`, utiliser `serve-local` pour servir le build (pas `start` qui reconstruit TinaCMS)

---

## 🛠️ Scripts de maintenance

### `scripts/fix-persona-references.mjs`
Synchronise automatiquement les références aux personas dans les fiches traduites (EN et ES) en se basant sur les références de la version française.

**Usage** :
```bash
node scripts/fix-persona-references.mjs
```

**Quand l'utiliser** :
- Après avoir ajouté de nouvelles fiches dans les 3 langues
- Si vous remarquez des références incorrectes après un merge
- Après avoir modifié/ajouté des personas

**Mapping des personas** :
- `fr/referenceuser-seo.mdx` → `en/seo-specialist.mdx` → `es/especialista-seo.mdx`
- `fr/architecte-logicieldeveloppeur.mdx` → `en/software-architect-developer.mdx` → `es/arquitecto-software-desarrollador.mdx`
- etc. (voir le script pour le mapping complet)

---

_Dernière mise à jour : 2025-01-XX_
_Contributeur : Assistant IA (Auto)_

