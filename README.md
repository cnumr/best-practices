<p align="center">
  <a href="https://collectif.greenit.fr/">
    <img align="center" alt="CNUMR" src="./public/assets/logo-cnumr.png" width="160" />
  </a>
    <img align="center" alt="Association Green IT" src="./public/assets/logo-asso.png" width="200" />
</p>

# gen-referentiel-core

**Repo source pour les référentiels de bonnes pratiques Green IT**

Ce repository contient le code partagé entre plusieurs sites de référentiels. Il sert de source (`upstream`) pour synchroniser les évolutions de code vers les repos de production.

## Architecture Multi-Sites

```
┌─────────────────────────────────────────────────────────────────┐
│                    gen-referentiel-core                         │
│                    (ce repo - source)                           │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │ app/        │  │ components/ │  │ tina/       │   CODE       │
│  └─────────────┘  └─────────────┘  └─────────────┘              │
│  ┌─────────────────────────────────────────────────┐            │
│  │ src/content/  (contenu FAKE pour tests)         │   CONTENU  │
│  └─────────────────────────────────────────────────┘            │
└─────────────────────────────────────────────────────────────────┘
                              │
            ┌─────────────────┼─────────────────┐
            │ upstream        │ upstream        │ upstream
            ▼                 ▼                 ▼
     ┌──────────┐      ┌──────────┐      ┌──────────┐
     │   RWP    │      │   RWEB   │      │  REIPRO  │
     │WordPress │      │   Web    │      │Progiciels│
     │          │      │          │      │          │
     │ CONTENU: │      │ CONTENU: │      │ CONTENU: │
     │ réel     │      │ réel     │      │ réel     │
     └──────────┘      └──────────┘      └──────────┘
```

### Principe

- **Code partagé** : Toutes les évolutions de code sont faites dans ce repo
- **Contenu spécifique** : Chaque site a son propre contenu dans `src/content/`
- **Synchronisation** : Les sites récupèrent les mises à jour via `git merge upstream/main`

## Contenu de test

Ce repo contient du contenu fake minimal pour tester le build :

| Type     | Fichiers               |
| -------- | ---------------------- |
| Fiches   | 3 fiches exemples      |
| Personas | 2 personas de test     |
| Lexique  | 3 termes               |
| Home     | Page d'accueil de test |

## Développement

```bash
# Installation
pnpm install

# Développement local
pnpm dev

# Build local (sans MongoDB)
pnpm build-local

# Vérifications
pnpm check-types
pnpm lint
```

## Pour les mainteneurs

### Faire une évolution de code

1. Créer une branche depuis `main`
2. Faire les modifications
3. Tester avec `pnpm build-local`
4. Créer une PR et merger dans `main`

### Synchroniser un site de production

Voir la [documentation de synchronisation](./docs/synchronisation.md) pour le workflow complet.

```bash
# Dans le repo du site (ex: rwp)
git fetch upstream
git merge upstream/main
git push origin main
```

Le `.gitattributes` protège automatiquement le contenu local (`src/content/`) lors du merge.

## Sites utilisant ce repo

| Site   | Repository                       | Description                |
| ------ | -------------------------------- | -------------------------- |
| RWP    | best-practices-wordpress         | Bonnes pratiques WordPress |
| RWEB   | best-practices                   | Bonnes pratiques Web       |
| REIPRO | best-practices-packaged-software | Intégration de progiciels  |
| RIA    | (à venir)                        | Utilisation de l'IA        |

## Documentation

- [docs/](./docs/) - Documentation complète (Retype)
- [CLAUDE.md](./CLAUDE.md) - Instructions pour Claude Code
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Guide de contribution

## Licence

Les sources et contenus de ce projet sont [protégés](LICENCE.md)
