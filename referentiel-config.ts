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
