import { imageBlock } from '../utils/templates';
import { slugify } from '../../src/js/utils.js';
import {
  titleField,
  warnField,
  defaultFields,
  onPersonasBeforeSubmit,
} from '../utils/commonFields';
import { tinaTableTemplate, type Collection } from 'tinacms';

const PUBLIC_BASE =
  process.env.PUBLIC_BASE && process.env.PUBLIC_BASE !== ''
    ? process.env.PUBLIC_BASE + '/'
    : '';

const TINA_PUBLIC_REF_NAME_PROCESS = process.env.TINA_PUBLIC_REF_NAME;

const personas: Collection = {
  name: 'personas',
  label: 'Personas',
  path: 'src/content/personas',
  format: 'mdx',
  ui: {
    router: ({ document }) => {
      // navigate to the post that was clicked
      // return document._sys.path;
      return `/${document._sys.breadcrumbs[0]}/personas/${slugify(document._sys.filename)}`;
    },
    beforeSubmit: onPersonasBeforeSubmit,
  },
  defaultItem: () => {
    return { refType: TINA_PUBLIC_REF_NAME_PROCESS, published: false };
  },
  fields: [
    warnField(
      'Pour voir les modifications, il faut sauvegarder pour déclencher un refresh.'
    ),
    // slugHiddenField,
    {
      type: 'string',
      name: 'refType',
      label: 'Type de fiche',
      ui: {
        component: 'hidden',
      },
    },
    ...defaultFields,
    {
      type: 'string',
      name: 'shortName',
      label: 'Nom court (1 mot)',
      required: true,
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
  ],
};

export default personas;
