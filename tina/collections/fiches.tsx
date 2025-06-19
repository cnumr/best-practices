import React from 'react';
import {
  titleField,
  warnField,
  defaultFields,
  onFichesBeforeSubmit,
} from '../utils/commonFields';
import { lifecycleOptions, scopeOptions, saved_resourcesOptions } from '../../src/content/constants';
import { tinaTableTemplate, type Collection, type TinaField } from 'tinacms';
import {
  getRefConfig,
  MESURE_ON_3,
  MESURE_ON_5,
} from '../../referentiel-config';
import { imageBlock } from '../utils/templates.js';

const PUBLIC_BASE =
  process.env.PUBLIC_BASE && process.env.PUBLIC_BASE !== ''
    ? process.env.PUBLIC_BASE + '/'
    : '';

const TINA_PUBLIC_REF_NAME_PROCESS = process.env.TINA_PUBLIC_REF_NAME;

const getSpecificRefFields: any = () => {
  const specificsFields: TinaField[] = [];
  const featuresEnabled = getRefConfig(
    TINA_PUBLIC_REF_NAME_PROCESS
  ).featuresEnabled;

  if (featuresEnabled.rgesnField === true) {
    const rgesn: TinaField = {
      type: 'string',
      name: 'rgesn',
      label: 'RGESN',
      required: false,
    };
    specificsFields.push(rgesn);
  }

  if (featuresEnabled.environmental_impact === MESURE_ON_3) {
    const priority_implementation: TinaField = {
      type: 'string',
      name: 'environmental_impact',
      label: 'Environmental impact',
      required: true,
      // répercuter ces changements dans src/i18n/ui.ts
      options: [
        {
          label: 'Fort 🌱🌱🌱',
          value: 'high_environmental_impact',
        },
        {
          label: 'Moyen 🌱🌱',
          value: 'medium_environmental_impact',
        },
        {
          label: 'Faible 🌱',
          value: 'low_environmental_impact',
        },
        {
          value: 'tbd',
          label: "<< TBD (éviter de l'utiliser) >>",
        },
      ],
    };
    specificsFields.push(priority_implementation);
  }

  if (featuresEnabled.environmental_impact === MESURE_ON_5) {
    const environmental_impact: TinaField = {
      type: 'number',
      name: 'environmental_impact',
      label: 'Environmental impact',
      required: true,
      ui: {
        validate: (value) => {
          const numericValue = Number(value);
          if (isNaN(numericValue) || Number(value) > 5 || Number(value) < 1) {
            return 'La valeur doit être un chiffre compris entre 1 et 5.';
          }
        },
      },
    };
    specificsFields.push(environmental_impact);
  }

  if (featuresEnabled.priority_implementation === MESURE_ON_3) {
    const priority_implementation: TinaField = {
      type: 'string',
      name: 'priority_implementation',
      label: 'Priority implementation',
      required: true,
      // répercuter ces changements dans src/i18n/ui.ts
      options: [
        {
          label: 'Haute 👍👍👍',
          value: 'high_priority',
        },
        {
          label: 'Moyenne 👍👍',
          value: 'medium_priority',
        },
        {
          label: 'Faible 👍',
          value: 'low_priority',
        },
        {
          value: 'tbd',
          label: "<< TBD (éviter de l'utiliser) >>",
        },
      ],
    };
    specificsFields.push(priority_implementation);
  }

  if (
    featuresEnabled.priority_implementation === MESURE_ON_5 &&
    featuresEnabled.environmental_impact === MESURE_ON_5 &&
    featuresEnabled.moe === true
  ) {
    const priority_implementation: TinaField = {
      type: 'number',
      name: 'priority_implementation',
      label: 'Priority implementation',
      ui: {
        component: 'hidden',
      },
    };
    specificsFields.push(priority_implementation);
  }

  if (featuresEnabled.moe === true) {
    const moe: TinaField = {
      type: 'number',
      name: 'moe',
      label: 'Mise en oeuvre',
      ui: {
        validate: (value) => {
          const numericValue = Number(value);
          if (isNaN(numericValue) || Number(value) > 5 || Number(value) < 1) {
            return 'La valeur doit être un chiffre compris entre 1 et 5.';
          }
        },
      },
    };
    specificsFields.push(moe);
  }

  if (featuresEnabled.tiers === true) {
    const tiers: TinaField = {
      type: 'string',
      name: 'tiers',
      label: 'Tiers',
      options: [
        {
          label: 'Utilisateur/Terminal',
          value: 'user-device',
        },
        {
          label: 'Réseau',
          value: 'network',
        },
        {
          label: 'Datacenter',
          value: 'datacenter',
        },
        {
          label: "<< TBD (éviter de l'utiliser) >>",
          value: 'tbd',
        },
      ],
    };
    specificsFields.push(tiers);
  }

  if (featuresEnabled.scope === true) {
    const perimetre: TinaField = {
      type: 'string',
      name: 'scope',
      label: 'Scope',
      required: true,
      // répercuter ces changements dans src/components/fiches/FichesFilter.astro et dans src/i18n/ui.ts
      options: scopeOptions,
    };
    specificsFields.push(perimetre);
  }

  return specificsFields;
};

const getLifecycle = () => {
  const lifecycle: TinaField = {
    type: 'string',
    name: 'lifecycle',
    label: 'Lifecycle',
    required: true,
  };
  if (process.env.TINA_PUBLIC_REF_NAME === 'RWEB') {
    // répercuter ces changements dans src/components/fiches/FichesFilter.astro et dans src/i18n/ui.ts
    lifecycle.options = lifecycleOptions.RWEB;
  } else if (process.env.TINA_PUBLIC_REF_NAME === 'RWP') {
    lifecycle.options = lifecycleOptions.RWP;
  } else {
    lifecycle.options = lifecycleOptions.RWEB;
  }
  return lifecycle;
};

const fiches: Collection = {
  name: 'fiches',
  label: 'Fiches du Référentiel',
  path: 'src/content/fiches',
  format: 'mdx',
  ui: {
    router: ({ document }) => {
      // navigate to the post that was clicked
      // return document._sys.path;
      // return `${PUBLIC_BASE}${document._sys.breadcrumbs[0]}/fiches/${slugify(document._sys.breadcrumbs[1])}`;
      return `/${document._sys.breadcrumbs[0]}/fiches/${document._sys.filename}`;
    },
    beforeSubmit: onFichesBeforeSubmit,
  },
  defaultItem: () => {
    return {
      published: false,
      refType: TINA_PUBLIC_REF_NAME_PROCESS,
      validations: [{ rule: '<A CHANGER>', maxValue: '3' }],
      versions: [
        {
          version: getRefConfig(process.env.TINA_PUBLIC_REF_NAME)
            .refInformations.currentVersion,
          idRef: '<A CHANGER>',
        },
      ],
    };
  },
  fields: [
    // warnField(
    //   "Pour voir les modifications, il faut sauvegarder pour déclencher un refresh.<br />Le nom de fichier de la fiche dépends des valeurs initiales #REF, Title et Language. Il ne changera plus automatiquement, il faut modifier manuellement le nom dans l'explorateur de fichier."
    // ),
    warnField(
      'Les élements marqués <b>A renseigner dans un second temps.</b> sont à compléter après la création de la fiche.',
      '_warn2'
    ),
    {
      type: 'string',
      name: 'refID',
      label: '#REF',
      required: true,
      ui:{
        parse: (val?: string) => val && val.replace(/ /g, '_'),
        format: (val?: string) => (val ? val.replace(/ /g, '_') : "")
      }
    },
    ...defaultFields,
    titleField('Metadatas'),
    {
      type: 'string',
      name: 'refType',
      label: 'Type de fiche',
      ui: {
        component: 'hidden',
      },
    },
    {
      type: 'object',
      list: true,
      name: 'versions',
      label: 'Version(s)',
      description:
        "A renseigner dans un second temps. N'a qu'un rôle informatif, le #REF est celui qui sert pour générer le nom de fichier.",
      ui: {
        defaultItem: {
          version: getRefConfig(process.env.TINA_PUBLIC_REF_NAME)
            .refInformations.currentVersion,
          idRef: '<A CHANGER>',
        },
        itemProps: (item) => {
          return {
            label: `Version: ${item?.version} | ID: ${item?.idRef}`,
          };
        },
        min: 1,
      },
      fields: [
        {
          type: 'string',
          name: 'version',
          label: 'Version Ref.',
          required: true,
        },
        {
          type: 'string',
          name: 'idRef',
          label: 'ID Ref.',
          required: true,
          ui:{
            parse: (val?: string) => val && val.replace(/ /g, '_'),
            format: (val?: string) => (val ? val.replace(/ /g, '_') : "")
          }
        },
      ],
    },
    {
      type: 'string',
      name: 'people',
      label: 'Auteur·e·s',
      required: true,
    },
    {
      type: 'object',
      name: 'responsible',
      label: 'Responsible(s)',
      description: 'A renseigner dans un second temps.',
      list: true,
      ui: {
        itemProps: (item) => {
          if (!item || item.responsible === undefined)
            return { label: 'Personnas: TBD' };
          const [src, content, type, ...label] = item?.responsible.split('/');
          return {
            label: `Personnas: ${label?.join('/') || 'TBD'}`,
          };
        },
      },
      fields: [
        {
          type: 'reference',
          label: 'Responsible',
          name: 'responsible',
          description: 'A renseigner dans un second temps.',
          collections: ['personas'],
        },
      ],
    },
    getLifecycle(),
    ...getSpecificRefFields(),
    {
      type: 'string',
      name: 'saved_resources',
      label: 'Saved resource(s)',
      list: true,
      required: true,
      // répercuter ces changements dans src/components/fiches/FichesFilter.astro et dans src/i18n/ui.ts
      options: saved_resourcesOptions
    },
    titleField('Corps de la fiche'),
    {
      type: 'rich-text',
      name: 'body',
      isBody: true,
      label: 'Contenu',
      required: true,
      templates: [tinaTableTemplate, imageBlock],
    },
    {
      type: 'object',
      name: 'validations',
      label: 'Principe(s) de validation',
      description: 'A renseigner dans un second temps.',
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: `Rule: ${item?.rule}`,
          };
        },
        defaultItem: {
          rule: '<A CHANGER>',
          maxValue: '3',
        },
        min: 1,
      },
      fields: [
        { type: 'string', name: 'rule', label: 'Le nombre...' },
        {
          type: 'string',
          name: 'maxValue',
          label: '...est inférieur ou égal à',
        },
      ],
    },
  ],
};

export default fiches;
