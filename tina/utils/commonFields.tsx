import React from 'react';
import {
  wrapFieldsWithMeta,
  type Form,
  type TinaCMS,
  type TinaField,
} from 'tinacms';
import { RestartWarning } from './warning';
import {
  slugify,
  getCalculatedPriorityImplementation,
} from '../../src/js/utils';
import { MESURE_ON_5, getRefConfig } from '../../referentiel-config';

const getPriorityImplementation = (values) => {
  const featuresEnabled = getRefConfig(
    process.env.TINA_PUBLIC_REF_NAME
  ).featuresEnabled;

  if (
    featuresEnabled.priority_implementation === MESURE_ON_5 &&
    featuresEnabled.environmental_impact === MESURE_ON_5 &&
    featuresEnabled.moe === true
  ) {
    return getCalculatedPriorityImplementation(
      values.moe,
      values.environmental_impact
    );
  } else {
    return values.priority_implementation;
  }
};

/**
 * This function is called before the form is submitted.
 * @param {Form} form - The form object.
 * @param {TinaCMS} cms - The cms object.
 * @param {Record<string, any>} values - The values object.
 * @returns {Record<string, any>} The values object.
 */
const onFichesBeforeSubmit = async ({
  form,
  values,
}: {
  form: Form;
  cms: TinaCMS;
  values: Record<string, any>;
}) => {
  const TINA_PUBLIC_REF_NAME_PROCESS = process.env.TINA_PUBLIC_REF_NAME;

  if (!values.responsible) {
    values.responsible = [];
  }
  if (form.crudType === 'create') {
    return {
      ...values,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      filename:
        TINA_PUBLIC_REF_NAME_PROCESS +
        '_' +
        values.refID +
        '-' +
        slugify(values.title),
      priority_implementation: getPriorityImplementation(values),
    };
  }
  return {
    ...values,
    updatedAt: new Date().toISOString(),
    priority_implementation: getPriorityImplementation(values),
  };
};

/**
 * This function is called before the form is submitted.
 * @param {Form} form - The form object.
 * @param {TinaCMS} cms - The cms object.
 * @param {Record<string, any>} values - The values object.
 * @returns {Record<string, any>} The values object.
 */
const onLexiqueBeforeSubmit = async ({
  form,
  values,
}: {
  form: Form;
  cms: TinaCMS;
  values: Record<string, any>;
}) => {
  if (form.crudType === 'create') {
    return {
      ...values,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      filename: slugify(values.title),
    };
  }
  return {
    ...values,
    updatedAt: new Date().toISOString(),
  };
};

/**
 * This function is called before the form is submitted.
 * @param {Form} form - The form object.
 * @param {TinaCMS} cms - The cms object.
 * @param {Record<string, any>} values - The values object.
 * @returns {Record<string, any>} The values object.
 */
const onPersonasBeforeSubmit = async ({
  form,
  values,
}: {
  form: Form;
  cms: TinaCMS;
  values: Record<string, any>;
}) => {
  if (form.crudType === 'create') {
    return {
      ...values,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      filename: slugify(values.title),
    };
  }
  return {
    ...values,
    updatedAt: new Date().toISOString(),
  };
};

/**
 * This function is called before the form is submitted.
 * @param {Form} form - The form object.
 * @param {TinaCMS} cms - The cms object.
 * @param {Record<string, any>} values - The values object.
 * @returns {Record<string, any>} The values object.
 */
const onPagesBeforeSubmit = async ({
  form,
  values,
}: {
  form: Form;
  cms: TinaCMS;
  values: Record<string, any>;
}) => {
  if (form.crudType === 'create') {
    return {
      ...values,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      filename: slugify(values.title),
    };
  }
  return {
    ...values,
    updatedAt: new Date().toISOString(),
  };
};

/**
 * This function is called before the form is submitted.
 * @param {Form} form - The form object.
 * @param {TinaCMS} cms - The cms object.
 * @param {Record<string, any>} values - The values object.
 * @returns {Record<string, any>} The values object.
 */
const onDefaultPagesBeforeSubmit = async ({
  form,
  values,
}: {
  form: Form;
  cms: TinaCMS;
  values: Record<string, any>;
}) => {
  if (form.crudType === 'create') {
    return {
      ...values,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      filename: values.language,
    };
  }
  return {
    ...values,
    updatedAt: new Date().toISOString(),
  };
};

/**
 * Visible Slug field
 * @type {TinaField}
 */
const slugVisibleField: any = {
  type: 'string',
  name: `slug`,
  label: 'Slug',
  description:
    "Ce champs sera automatiquement généré au premier enregistrement. Il n'est pas recommandé de le modifier. Pour créer une page index, utilisez `.` comme slug.",
};

/**
 * Visible Slug field
 * @type {TinaField}
 */
const slugHiddenField: any = {
  type: 'string',
  name: `slug`,
  ui: {
    component: 'hidden',
  },
};

/**
 * Title field
 * @type {TinaField}
 */
const titleField: any = (label) => {
  return {
    type: 'string',
    name: `_${slugify(label).replace(/-/g, '_')}`,
    ui: {
      component: () => {
        return <h2 className="mb-2 text-xl font-black">{label}</h2>;
      },
    },
  };
};

/**
 * Warning field
 * @type {TinaField}
 */
const warnField: any = (comment = '', name = '_warning') => {
  return {
    type: 'string',
    name: name,
    ui: {
      component: () => {
        return <RestartWarning comment={comment} />;
      },
    },
  };
};

/**
 * Default fields for fiches/lexiques/personas
 * @type {TinaField[]}
 */
const defaultFields: TinaField[] = [
  {
    type: 'string',
    name: 'title',
    label: 'Title',
    isTitle: true,
    required: true,
  },
  {
    type: 'datetime',
    name: 'createdAt',
    label: 'Creation date',
    ui: {
      component: 'hidden',
    },
  },
  {
    type: 'datetime',
    name: 'updatedAt',
    label: 'Updated date',
    ui: {
      component: 'hidden',
    },
  },
  {
    type: 'string',
    name: 'language',
    label: 'Language',
    required: true,
    options: getRefConfig(process.env.TINA_PUBLIC_REF_NAME).i18n.locales,
    ui: {
      // component: "select",
      validate: (value) => {
        if (value === '' || value === undefined || value === null) {
          return 'Required';
        }
      },
      component: wrapFieldsWithMeta(({ field, input, meta }) => {
        if (meta.initial === undefined) {
          return (
            <>
              <div className="group relative">
                <select
                  {...input}
                  {...field}
                  {...meta}
                  className="focus:shadow-outline block w-full cursor-pointer appearance-none truncate rounded-md border border-gray-200 bg-white py-2 pl-3 pr-8 text-base text-gray-300 shadow focus:border-blue-500 focus:outline-none focus:ring-blue-500 group-has-[option:not([value='']):checked]:text-gray-700 sm:text-sm">
                  <option value="">Choose an option</option>
                  {field['options'].map((option) => (
                    <option
                      value={option}
                      key={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="pointer-events-none absolute right-2 top-1/2 h-auto w-6 -translate-y-1/2 text-gray-300 transition duration-150 ease-out group-hover:text-blue-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="none"
                    d="M0 0h24v24H0V0z"></path>
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                </svg>
              </div>
            </>
          );
        } else {
          return <span className="font-bold">{input.value}</span>;
        }
      }),
    },
  },
  {
    type: 'boolean',
    name: 'published',
    label: 'Published',
    required: true,
    description:
      "La page/fiche ne sera pas visible tant qu'elle n'est pas publiée.",
  },
];

const templateCTAWithIcon: TinaField = {
  type: 'object',
  name: 'CTAWithIcon',
  label: 'Call to action',
  ui: {
    defaultItem: {
      label: 'Label',
      url: 'https://example.com',
      icon: 'tabler:brand-github',
      target: '_blank',
    },
  },
  fields: [
    {
      type: 'string',
      name: 'label',
      label: 'Label',
      required: true,
    },
    {
      type: 'string',
      name: 'url',
      label: 'URL',
      required: true,
    },
    {
      type: 'string',
      name: 'icon',
      label: 'Icon',
      required: false,
      options: ['tabler:brand-github-filled', 'tabler:brand-github'],
    },
    {
      type: 'string',
      name: 'target',
      label: 'Target',
      required: true,
      options: ['_self', '_blank'],
    },
  ],
};

export {
  titleField,
  slugVisibleField,
  slugHiddenField,
  warnField,
  defaultFields,
  templateCTAWithIcon,
  onFichesBeforeSubmit,
  onLexiqueBeforeSubmit,
  onPersonasBeforeSubmit,
  onPagesBeforeSubmit,
  onDefaultPagesBeforeSubmit,
};
