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

> [!WARNING]
> LE BUILD EN LOCAL NE FONCTIONNE PAS.
