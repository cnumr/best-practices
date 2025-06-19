import {
  titleField,
  defaultFields,
  onLexiqueBeforeSubmit,
} from '../utils/commonFields';
import type { Collection } from 'tinacms';
import React from 'react';

const lexique: Collection = {
  name: 'lexique',
  label: 'Lexique',
  path: 'src/content/lexique',
  format: 'mdx',
  ui: {
    router: ({ document }) => {
      // navigate to the post that was clicked
      // return document._sys.path;
      return `/${document._sys.breadcrumbs[0]}/lexique/${document._sys.filename}`;
    },
    beforeSubmit: onLexiqueBeforeSubmit,
  },
  defaultItem: () => {
    return { published: false };
  },
  fields: [
    ...defaultFields,
    titleField('Corps de la fiche'),
    {
      type: 'rich-text',
      name: 'body',
      isBody: true,
      label: 'Contenu',
      required: true,
    },
  ],
};

export default lexique;
