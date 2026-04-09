# Développer et faire évoluer

## Stack

- [TinaCMS](https://tina.io/) [!badge 2.10.1]
- [NextJS](https://nextjs.org/) [!badge 14.2.35]
  - [TailwindCSS](https://tailwindcss.com/) [!badge 3.4.17]
  - [Pagefind](https://pagefind.app/) [!badge 1.4.0] (recherche statique)
- [Vercel](https://vercel.com)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
  - dependencies : `mongodb-level` [!badge ^0.0.4]
  - devDependencies : `mongodb` [!badge ^7.0.0]
  - peerDependencies : `mongodb` [!badge ^4.12.1] (pour compatibilité TinaCMS)

#### Pourquoi TinaCMS ?

TinaCMS est un CMS open source qui permet de gérer le contenu de votre site web en utilisant GitHub comme gestionnaire de contenu.

#### Pourquoi Vercel ?

Vercel permet d'utiliser TinaCMS, avec Next.js, pour éditer le contenu du site online (et pas que en local) et donner des droits d'édition à des personnes qui ne sont pas développeurs.

#### Pourquoi MongoDB.com (atlas) ?

TinaCMS, pour offrir la possibilité de gérer le contenu du site en ligne, nécessite un gestionnaire de base de données.

!!!warning Cette version de stack est figée !
On ne peut pas monter de version en l'état... il va falloir y arriver.
!!!

## Développer

Dupliquer le fichier `.env.local` en `.env` et le remplir (demandez de l'aide).

```cmd Lancer la stack en local
pnpm dev
# ou
pnpm run dev
```

```cmd Build la stack en local
pnpm build-local && pnpm serve-local
# ou
pnpm run build-local && pnpm run serve-local
```

## Problématiques résolues

### Un Code, de multiple déclinaisons, le **one for all**

!!!success Problème résolu
!!!

Un gestionnaire de configuration à été mis en place `./referentiel-config.ts`, piloté par une double variable d'environnement `TINA_PUBLIC_REF_NAME` et `NEXT_PUBLIC_REF_NAME`.

==- :icon-code: Code du gestionnaire de configuration

```js referentiel-config.ts
export const MESURE_ON_3 = 'use-3-grades';
export const MESURE_ON_5 = 'use-5-grades';

type RefConfig = {
  isRoot: boolean;
  i18n: {
    defaultLang: 'fr';
    locales: string[];
    languages: Record<string, string>;
    refTitles: Record<
      string,
      {
        short: string;
        long: string;
      }
    >;
  };
  refInformations: {
    currentVersion: string | null;
    creationYear: number;
  };
  featuresEnabled: { [key: string]: any };
};

export const getRefConfig = (specificRef?: string): RefConfig => {
  const currentRef = specificRef || process.env.NEXT_PUBLIC_REF_NAME || 'RWEB';
  const config: RefConfig = {
    isRoot: false,
    i18n: {
      defaultLang: 'fr' as 'fr',
      locales: ['fr', 'en', 'es'],
      languages: {
        fr: '🇫🇷 Français',
        en: '🇬🇧 English',
        es: '🇪🇸 Español',
      },
      refTitles: {
        es: { short: '<TBD>', long: ' para <TBD>' },
        en: { short: '<TBD>', long: ' for <TBD>' },
        fr: { short: '<TBD>', long: ' pour <TBD>' },
      },
    },
    refInformations: {
      currentVersion: '0.0.1',
      creationYear: 2021,
    },
    featuresEnabled: {
      lexique: false,
      lexique_tooltips: false,
      fiches: true,
      linkToPersonas: false,
      priority_implementation: MESURE_ON_3,
      environmental_impact: MESURE_ON_3,
      moe: false,
      tiers: false,
      scope: false,
      rgesnField: false,
      lifecycle: true,
      saved_resources: true,
      filters: [
        'lifecycle',
        'scope',
        'saved_resources',
        'tiers',
        // 'responsible', // bug
        'priority_implementation', // empty
        'environmental_impact', // empty
        // 'rgesn', // empty, too many
        'moe', // empty
      ],
    },
  };
  switch (currentRef) {
    case 'RWP':
      config.i18n.locales = ['fr'];
      config.i18n.languages = {
        fr: '🇫🇷 Français',
      };
      config.i18n.refTitles = {
        es: { short: 'WordPress', long: ' para WordPress' },
        en: { short: 'WordPress', long: ' for WordPress' },
        fr: { short: 'WordPress', long: ' pour WordPress' },
      };
      config.refInformations = {
        currentVersion: '1.0.0',
        creationYear: 2021,
      };
      config.featuresEnabled.lexique = true;
      config.featuresEnabled.linkToPersonas = true;
      config.featuresEnabled.priority_implementation = MESURE_ON_3;
      config.featuresEnabled.environmental_impact = MESURE_ON_3;
      config.featuresEnabled.moe = false;
      config.featuresEnabled.tiers = false;
      config.featuresEnabled.scope = true;
      config.featuresEnabled.rgesnField = false;
      config.featuresEnabled.lexique_tooltips = true;
      break;

    case 'REIPRO':
      config.i18n.locales = ['fr'];
      config.i18n.languages = {
        fr: '🇫🇷 Français',
        en: '🇬🇧 English',
        es: '🇪🇸 Español',
      };
      config.i18n.refTitles = {
        es: { short: 'REIPRO', long: ' para REIPRO' },
        en: { short: 'REIPRO', long: ' for REIPRO' },
        fr: {
          short: 'Intégration de progiciels',
          long: " Référentiel de bonnes pratiques pour l'intégration de progiciels",
        },
      };
      config.refInformations = {
        currentVersion: '1.0.0',
        creationYear: 2025,
      };
      config.featuresEnabled.lexique = true;
      config.featuresEnabled.linkToPersonas = false;
      config.featuresEnabled.priority_implementation = MESURE_ON_5;
      config.featuresEnabled.environmental_impact = MESURE_ON_5;
      config.featuresEnabled.moe = true;
      config.featuresEnabled.tiers = true;
      config.featuresEnabled.scope = false;
      config.featuresEnabled.rgesnField = true;
      break;

    case 'RIA':
      config.i18n.locales = ['fr'];
      config.i18n.refTitles = {
        es: { short: 'RIA', long: ' para RIA' },
        en: { short: 'RIA', long: ' for RIA' },
        fr: {
          short: "Utilisation de l'IA générative",
          long: " Référentiel de bonnes pratiques pour l'utilisation de l'IA générative",
        },
      };
      config.refInformations = {
        currentVersion: '1.0.0',
        creationYear: 2025,
      };
      config.featuresEnabled.lexique = true;
      config.featuresEnabled.linkToPersonas = false;
      config.featuresEnabled.priority_implementation = MESURE_ON_5;
      config.featuresEnabled.environmental_impact = MESURE_ON_5;
      config.featuresEnabled.moe = true;
      config.featuresEnabled.tiers = true;
      config.featuresEnabled.scope = false;
      config.featuresEnabled.rgesnField = true;
      break;

    case 'RWEB':
      config.i18n.locales = ['fr', 'en', 'es'];
      config.i18n.languages = {
        fr: '🇫🇷 Français',
        en: '🇬🇧 English',
        es: '🇪🇸 Español',
      };
      config.i18n.refTitles = {
        es: { short: 'Ecodiseño web', long: ' para Ecodiseño web' },
        en: { short: 'Web eco-design', long: ' for Web eco-design' },
        fr: { short: 'Ecoconception web', long: " pour l'Ecoconception web" },
      };
      config.refInformations = {
        currentVersion: '5.0.0',
        creationYear: 2012,
      };
      config.featuresEnabled.lexique = true;
      config.featuresEnabled.linkToPersonas = false;
      config.featuresEnabled.priority_implementation = MESURE_ON_5;
      config.featuresEnabled.environmental_impact = MESURE_ON_5;
      config.featuresEnabled.moe = true;
      config.featuresEnabled.tiers = true;
      config.featuresEnabled.scope = false;
      config.featuresEnabled.rgesnField = true;
      break;

    case 'REF_HOME':
      config.isRoot = true;
      config.i18n.locales = ['fr', 'en', 'es'];
      config.i18n.languages = {
        fr: '🇫🇷 Français',
        en: '🇬🇧 English',
        es: '🇪🇸 Español',
      };
      config.i18n.refTitles = {
        es: { short: 'Repositorios de Green IT', long: ' para Ecodiseño web' },
        en: { short: 'Green IT Frameworks', long: ' for Web eco-design' },
        fr: {
          short: 'Référentiels Green IT',
          long: " pour l'Ecoconception web",
        },
      };
      config.refInformations = {
        currentVersion: null,
        creationYear: 2012,
      };
      config.featuresEnabled.lexique = false;
      config.featuresEnabled.fiches = false;
      config.featuresEnabled.linkToPersonas = false;
      config.featuresEnabled.priority_implementation = MESURE_ON_5;
      config.featuresEnabled.environmental_impact = MESURE_ON_5;
      config.featuresEnabled.moe = true;
      config.featuresEnabled.tiers = true;
      config.featuresEnabled.scope = false;
      config.featuresEnabled.rgesnField = true;
      break;

    default:
      console.error(`TINA_PUBLIC_REF_NAME NOT CONFIGURED!`);
      break;
  }

  return config;
};

export const getCurrentRef = (): string => {
  return process.env.NEXT_PUBLIC_REF_NAME ?? 'RWEB';
};

```

===

Ce gestionnaire permet de configurer, par type de référentiels, les fonctionnalitées actives.

Cela ajoute de la complexité au code, mais cela permet d'avoir une code commun qui fonctionne partout.

!!!warning Point d'attention : **one for all... presque**

_Un code cummun, ne veut pas dire une seule code base_.  
**Comme un référentiel = un repo, le code du générateur est dupliqué dans chaque repo**. Donc chaque modification du `code` doit être reportée dans chaque repo.
!!!

[!ref text="Voir la section Synchronisation qui explique comment résoudre ce problème"](./synchronisation.md)

#### Implémentation

```js #2 Exemple d'utilisation
{
  getRefConfig().featuresEnabled.scope === true ? (
    <FicheMetaItem
      fiche={fiche}
      meta="scope"
      lang={lang}
      fontSize="sm"
      displayTitle
    />
  ) : null;
}
```

### Format des fichiers `MD|MDX`

!!!success Problème résolu
!!!

L'utilisation de TinaCMS permet de moins se préocuper du format des fichiers de contenus.

Mais l'usage dans un IDE pour "aller plus vite" en édition reste tentante. Pour gérer les erreurs possibles, un module de validation a été mis en place.

```cmd Lancer la validation des fichiers MDX
pnpm lint:md
# ou validation complète
pnpm lint
```

**Il faut le lancer avant chaque commit !**

!!!warning Point d'attention
A faire évoluer quand le format du contenu évolue. Source : `./content/*.schema.yaml` et `.remarkrc.mjs`.
!!!

#### Scripts de maintenance

##### Correction des références aux personas

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

### Build localement

!!!success Problème résolu
!!!

~~Le build ne fonctionne que sur Vercel, ou plutôt le build de fonctionne que couplé à [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) comme datalayer. Une tentative infructueuse d'avoir une base MongoDB en local n'a pas résolu le problème. Le problème vient surement de `next-plugin-preval` utilisé par `Fuse.js`.~~

Le problème venait que le server TinaCMS ne fonctionnait plus quand le build Next.js était lancé.

Un script pour gérer le build localement a été mis en place. cf `./scripts/build-local.sh`.

```cmd Build localement
pnpm build-local
```

```cmd Servir le build localement
pnpm serve-local
```

### Erreur ERR_REQUIRE_ESM sur Vercel (react-dnd)

!!!success Problème résolu
!!!

L'erreur `ERR_REQUIRE_ESM: require() of ES Module react-dnd-html5-backend` apparaissait sur Vercel lors de l'authentification TinaCMS.

**Cause :** `@udecode/plate-dnd` (dépendance interne de TinaCMS) utilise `require()` pour importer `react-dnd@16` qui est **ESM-only**. Ce problème n'apparaît pas en local car le bundling est différent.

**Solution :** Forcer `react-dnd` et `react-dnd-html5-backend` à la version **14.x** (CommonJS) via pnpm overrides :

```json package.json
"pnpm": {
  "overrides": {
    "react-dnd": "14.0.5",
    "react-dnd-html5-backend": "14.1.0"
  }
}
```

Ces versions sont compatibles avec `@udecode/plate-dnd` qui demande `>=14.0.0`.

**Après modification :** Régénérer le lockfile :

```bash
trash node_modules pnpm-lock.yaml && pnpm install
# ou
rm -rf node_modules && rm pnpm-lock.yaml && pnpm install
```

**Références :**

- [Issue TinaCMS demo #131](https://github.com/tinacms/tina-self-hosted-demo/issues/131)
- [Issue Plate #1609](https://github.com/udecode/plate/issues/1609)

### Versioning avec Changesets

!!!success Problème résolu
!!!

Le projet utilise [Changesets](https://github.com/changesets/changesets) pour gérer les versions et le changelog. Cela permet de tracker la synchronisation entre les différentes instances (RWP, RWEB, REIPRO, etc.).

**Workflow :**

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

**Types de versions :**

| Type    | Quand l'utiliser                            |
| ------- | ------------------------------------------- |
| `patch` | Bug fixes, corrections mineures             |
| `minor` | Nouvelles fonctionnalités rétro-compatibles |
| `major` | Breaking changes, modifications majeures    |

**Vérifier la synchronisation :**

Comparer la version dans `package.json` entre `gen-referentiel-core` et les projets dérivés permet de savoir s'ils sont synchronisés.

### Protection de la branche main

!!!success Problème résolu
!!!

L'édition directe sur les branches `main` et `master` via TinaCMS est interdite pour éviter les modifications non revues.

**Solution :** Un `ProtectedGitHubProvider` custom a été créé (`tina/ProtectedGitHubProvider.ts`) qui wrapper le `GitHubProvider` standard et refuse les écritures sur les branches bloquées.

**Configuration :** Dans `tina/database.ts`, la liste des branches bloquées est configurable :

```typescript
gitProvider: new ProtectedGitHubProvider({
  branch,
  owner,
  repo,
  token,
  blockedBranches: ['main', 'master'], // Branches protégées
}),
```

**Comportement :**

- Toute tentative de sauvegarde sur `main` affiche une erreur dans TinaCMS
- Les contributeurs doivent utiliser une branche de travail (ex: `cms`, `content-update`)
- Les modifications sont ensuite intégrées via Pull Request

**Pour ajouter d'autres branches protégées :** Modifier le tableau `blockedBranches` dans `tina/database.ts`.

## Problématiques à resoudre

### Bug du composant `<PositionableImage />` ou **Adv. Image**

!!!danger Problème à resoudre
!!!

Il fonctionne en front, mais fait se fermer l'éditeur de TinaCMS. Il a fonctionné, donc ce doit être un petit problème

### Une Stack impossible à faire évoluer

!!!danger Problème à resoudre
!!!

Si l'on regarde la configuration des projets démo de TinaCMS, on se rend compte qu'ils sont beaucoup moins complexe que celui-ci !  
Dans leurs exemples, il y une fonctionnalité qui n'est jamais impélementée : **le multilingue**.

Pour pouvoir profiter des dernières fonctionnalités de TinaCMS (a challenger) :

**Checklist**

- [x] Repartir d'une des dernières versions démo du [tina-barebones-starter](https://github.com/tinacms/tina-barebones-starter) pour refaire la stack ;
  - [x] Si possible, ne pas utiliser `next-plugin-preval` ;
  - [x] Valider que le build en local fonctionne ;
  - [x] Valider que l'internationalisation fonctionne.
- [x] Créer et mettre en library un maximum de chose pour avoir une **vraie** code base.
