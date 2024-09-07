import {
  titleField,
  warnField,
  defaultFields,
  templateCTAWithIcon,
} from '../utils/commonFields';
import { tinaTableTemplate, type Collection } from 'tinacms';
import {
  getRefConfig,
} from '../../referentiel-config';
import { imageBlock } from '../utils/templates.js';

const PUBLIC_BASE =
  process.env.PUBLIC_BASE && process.env.PUBLIC_BASE !== ''
    ? process.env.PUBLIC_BASE + '/'
    : '';

const TINA_PUBLIC_REF_NAME_PROCESS = process.env.TINA_PUBLIC_REF_NAME;


const chapters: Collection = {
  name: 'chapters',
  label: 'Chapters pages',
  path: 'src/content/chapters',
  format: 'md',
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

export default chapters;
