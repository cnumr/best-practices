import { imageBlock } from '../utils/templates';
import {
  defaultFields,
  onPagesBeforeSubmit,
  templateCTAWithIcon,
  titleField,
  warnField,
} from '../utils/commonFields';
import { tinaTableTemplate, type Collection } from 'tinacms';

const pages: Collection = {
  name: 'pages',
  label: 'Pages',
  path: 'src/content/pages',
  format: 'mdx',
  match: { exclude: '{index}' },
  ui: {
    // router: ({ document }) => {
    //   // navigate to the post that was clicked
    //   // return document._sys.path;
    //   return `/${document._sys.breadcrumbs.join("/")}`;
    // },
    beforeSubmit: onPagesBeforeSubmit,
  },
  defaultItem: () => {
    return { published: false };
  },
  fields: [
    warnField(
      'Pour voir les modifications, il faut sauvegarder pour déclencher un refresh.'
    ),
    // slugVisibleField,
    ...defaultFields,
    titleField('Corps de la fiche'),
    // { type: "boolean", name: "useProse", label: "Utiliser le style 'Prose'" },
    {
      type: 'rich-text',
      name: 'body',
      isBody: true,
      label: 'Contenu',
      required: true,
      // description:
      //   "Ne pas utiliser le niveau 1 (#) pour vos titres, il est réservé au titre de la page (champs `Title`).",
      templates: [templateCTAWithIcon, tinaTableTemplate, imageBlock],
    },
  ],
};

export default pages;
