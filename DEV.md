# Comment fonctionne le projet ?

## Overview

### Stack :

- Next.js
- Tailwind CSS
- TinaCMS
- GitHub

### Hosting :

- Vercel
- MongoDB.com (atlas)

#### Pourquoi TinaCMS ?

TinaCMS est un CMS open source qui permet de gérer le contenu de votre site web en utilisant GitHub comme gestionnaire de contenu.

#### Pourquoi Vercel ?

Vercel permet d'utiliser TinaCMS, avec Next.js, pour éditer le contenu du site online (et pas que en local) et donner des droits d'édition à des personnes qui ne sont pas développeurs.

#### Pourquoi MongoDB.com (atlas) ?

TinaCMS, pour offrir la possibilité de gérer le contenu du site en ligne, nécessite un gestionnaire de base de données.

## Configuration

### Configuration de Vercel

- `MONGODB_URI` : URI de la base de données MongoDB.
- `GITHUB_PERSONAL_ACCESS_TOKEN` : Token GitHub pour accéder au dépôt.
- `TINA_PUBLIC_REF_NAME` : Nom du type de référentiel géré par TinaCMS (cela active certaines features ou liste de valeurs) `RWEB`, `RWP`, `REF_HOME` (pour le moment).
- `NEXT_PUBLIC_REPO_URL` : URL du dépôt GitHub.
- `TINA_PUBLIC_IS_LOCAL` : `false`
- `NEXTAUTH_SECRET` : Clé secrète pour NextAuth (run `openssl rand -hex 16` pour générer une clé).

### Configuration de MongoDB.com (atlas)

> Rien de spécifique, mails il faut bien activer Vercel comme intégration pour que les échanges entre Vercel et MongoDB.com (atlas) fonctionnent. https://vercel.com/<organisation|cnumr-greenit>/~/integrations/marketplace.

### Configuration de GitHub

> Juste créer un token GitHub pour accéder au dépôt.

Créez un nouveau jeton d'accès personnel GitHub (PAT) avec **content access** pour le dépôt et copiez le jeton comme valeur pour la variable d'environnement `GITHUB_PERSONAL_ACCESS_TOKEN`. Mettre cette configuration dans Vercel.

### Configuration local

Créer un fichier `.env` dans le dossier racine du projet et y mettre les variables d'environnement.

```
TINA_PUBLIC_IS_LOCAL=true
```

Pour lancer le projet en local, il suffit de faire `pnpm run dev`.

## Build et serve local

### Build local

Pour construire le projet en local (sans MongoDB ni GitHub) :

```bash
pnpm build-local
```

Cette commande :

1. Nettoie les processus existants sur le port 9000 (serveur TinaCMS)
2. Génère les fichiers TinaCMS en mode local
3. Lance le serveur TinaCMS en arrière-plan
4. Build Next.js avec les données locales
5. Arrête le serveur TinaCMS à la fin du build

### Servir le build local

Une fois le build terminé, vous pouvez servir le build avec :

```bash
pnpm serve-local
```

Le serveur Next.js sera accessible sur `http://localhost:3000` avec les données locales.

**Note :** Si le port 3000 est déjà utilisé :

- Libérer le port : `lsof -ti:3000 | xargs kill -9`
- Ou utiliser un autre port : `PORT=3001 pnpm serve-local`

> [!NOTE]
> Le build local fonctionne maintenant correctement après les corrections apportées aux références `responsible` dans les fiches.

## Scripts de maintenance

### Correction des références aux personas

Le script `scripts/fix-persona-references.mjs` permet de synchroniser automatiquement les références aux personas dans les fiches traduites (EN et ES) en se basant sur les références de la version française.

**Usage :**

```bash
node scripts/fix-persona-references.mjs
```

**Quand l'utiliser :**

- Après avoir ajouté de nouvelles fiches dans les 3 langues
- Si vous remarquez des références incorrectes après un merge
- Après avoir modifié/ajouté des personas

Le script :

1. Parcourt toutes les fiches FR
2. Extrait les refID et les responsables
3. Trouve les fiches EN/ES correspondantes (même refID)
4. Convertit les références personas FR vers EN/ES selon le mapping
5. Met à jour les fichiers EN/ES avec les bonnes références

**Exemple :** Si une fiche FR référence `src/content/personas/fr/referenceuser-seo.mdx`, le script mettra automatiquement à jour la version EN avec `src/content/personas/en/seo-specialist.mdx` et la version ES avec `src/content/personas/es/especialista-seo.mdx`.
