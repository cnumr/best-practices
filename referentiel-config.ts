export const MESURE_ON_3 = 'use-3-grades';
export const MESURE_ON_5 = 'use-5-grades';

type RefConfig = (specificRef?: string) => {
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
    currentVersion: string;
    creationYear: number;
  };
  featuresEnabled: { [key: string]: any };
};

export const getRefConfig: RefConfig = (specificRef) => {
  const currentRef = specificRef || process.env.NEXT_PUBLIC_REF_NAME;
  const config = {
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
      linkToPersonas: false,
      priority_implementation: MESURE_ON_3,
      environmental_impact: MESURE_ON_3,
      moe: false,
      tiers: false,
      scope: false,
    },
  };
  switch (currentRef) {
    case 'BP':
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
        fr: { short: 'Ecoconception web', long: ' pour Performance Web' },
      };
      config.refInformations = {
        currentVersion: '4.0.0',
        creationYear: 2012,
      };
      config.featuresEnabled.lexique = true;
      config.featuresEnabled.linkToPersonas = false;
      config.featuresEnabled.priority_implementation = MESURE_ON_5;
      config.featuresEnabled.environmental_impact = MESURE_ON_5;
      config.featuresEnabled.moe = true;
      config.featuresEnabled.tiers = true;
      config.featuresEnabled.scope = false;
      break;

    default:
      console.error(`NEXT_PUBLIC_REF_NAME NOT CONFIGURED!`);
      break;
  }

  return config;
};

export const getCurrentRef = () => {
  // @ts-ignore
  return process.env.NEXT_PUBLIC_REF_NAME;
};
