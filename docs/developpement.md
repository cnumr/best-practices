---
label: Develop
icon: code
order: 9
---

# Développer et faire évoluer

## Stack

- [TinaCMS](https://tina.io/) [!badge 2.5.2]
- [NextJS](https://nextjs.org/) [!badge 14.2.14]
  - [next-plugin-preval](https://github.com/ricokahler/next-plugin-preval) [!badge 1.2.6]
  - [TailwindCSS](https://tailwindcss.com/) [!badge 3.4.17]
  - [Fuse.js](https://www.fusejs.io/) [!badge 7.0.0]
- [Vercel](https://vercel.com)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
  - dependencies : `mongodb-level` [!badge ^0.0.4]
  - peerDependencies : `mongodb` [!badge ^4.12.1]

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
      config.i18n.locales = ['fr', 'en', 'es'];
      config.i18n.languages = {
        fr: '🇫🇷 Français',
        en: '🇬🇧 English',
        es: '🇪🇸 Español',
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

export const getCurrentRef = () => {
  // @ts-ignore
  return process.env.NEXT_PUBLIC_REF_NAME || 'RWEB';
};
```

===

Ce gestionnaire permet de configurer, par type de référentiels, les fonctionnalitées actives.

Cela ajoute de la complexité au code, mais cela permet d'avoir une code commun qui fonctionne partout.

!!!warning Point d'attention : **one for all... presque**

_Un code cummun, ne veut pas dire une seule code base_.  
**Comme un référentiel = un repo, le code du générateur est dupliqué dans chaque repo**. Donc chaque modification du `code` doit être reportée dans chaque repo.
!!!

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

Mais l'usage dans un IDE pour "aller plus vite" en édition reste tentante. Pour gérér les erreurs possible, un module de validation à été mis en place.

```cmd Lancer la validation des .(MD,MDX)
pnpm validate:md
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

- [ ] Repartir d'une des dernières versions démo du [tina-barebones-starter](https://github.com/tinacms/tina-barebones-starter) pour refaire la stack ;
  - [ ] Si possible, ne pas utiliser `next-plugin-preval` ;
  - [ ] Valider que le build en local fonctionne ;
  - [ ] Valider que l'internationalisation fonctionne.
- [ ] Créer et mettre en library un maximum de chose pour avoir une **vraie** code base.
