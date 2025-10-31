---
label: Installation
icon: server
order: 8
---

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
