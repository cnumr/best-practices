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

Variables d'environnement requises :

- `MONGODB_URI` : URI de la base de données MongoDB Atlas.
- `GITHUB_PERSONAL_ACCESS_TOKEN` : Token GitHub pour accéder au dépôt.
- `TINA_PUBLIC_REF_NAME` : Nom du référentiel (ex: `RWP`, `RWEB`, `REIPRO`, `RIA`). Active les features et valeurs spécifiques au référentiel dans TinaCMS.
- `NEXT_PUBLIC_REF_NAME` : **Doit être identique à `TINA_PUBLIC_REF_NAME`**. Utilisé par Next.js au runtime.
- `NEXT_PUBLIC_REPO_URL` : URL du dépôt GitHub.
- `TINA_PUBLIC_IS_LOCAL` : `false` (pour la production sur Vercel).
- `NEXTAUTH_SECRET` : Clé secrète pour NextAuth. Générer avec `openssl rand -hex 16`.
- `SITE_URL` : URL complète du site en production (ex: `https://rwp.greenit.fr`). **Obligatoire** pour les images de partage social (OpenGraph/Twitter).
- `PUBLIC_BASE` : (Optionnel) Chemin de base si le site est hébergé sur un sous-répertoire (ex: `/referentiel`).

!!!warning Variables TINA_PUBLIC_REF_NAME et NEXT_PUBLIC_REF_NAME
Ces deux variables **doivent avoir la même valeur** pour éviter les incohérences entre TinaCMS et Next.js.
!!!

### Configuration de MongoDB.com (atlas)

!!!info Version de MongoDB
Le projet utilise `mongodb` v7.0.0 en devDependencies, mais déclare `mongodb` ^4.12.1 en peerDependencies pour compatibilité avec TinaCMS. MongoDB Atlas est compatible avec les deux versions.
!!!

**Étapes de configuration :**

1. Créer un cluster MongoDB Atlas (gratuit pour commencer)
2. Configurer l'accès réseau (autoriser Vercel : `0.0.0.0/0`)
3. Créer un utilisateur avec droits lecture/écriture
4. Copier l'URI de connexion dans `MONGODB_URI` sur Vercel
5. **Activer l'intégration Vercel** : https://vercel.com/cnumr-greenit/~/integrations/marketplace

### Configuration de GitHub

> Juste créer un token GitHub pour accéder au dépôt.

Créez un nouveau jeton d'accès personnel GitHub (PAT) avec **content access** pour le dépôt et copiez le jeton comme valeur pour la variable d'environnement `GITHUB_PERSONAL_ACCESS_TOKEN`. Mettre cette configuration dans Vercel.
