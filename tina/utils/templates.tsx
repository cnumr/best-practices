import type { Template } from 'tinacms';

// generate jsdoc
/**
 * Template for a positionable image
 * @typedef {Object} Template
 */
const imageBlock: Template = {
  name: 'PositionableImage',
  label: 'Adv. Image',
  ui: {
    itemProps: (item) => {
      // Field values are accessed by item?.<Field name>
      return { label: `Image: ${item?.alt}` };
    },
    defaultItem: {
      position: 'block',
      imgWidth: 'twoThirdWidth',
      zoomable: true,
    },
  },
  fields: [
    {
      type: 'image',
      label: 'Image',
      name: 'src',
      required: true,
    },
    { type: 'string', label: 'Alt', name: 'alt', required: true },
    { type: 'string', label: 'Caption', name: 'caption' },
    { type: 'boolean', label: 'Zoomable', name: 'zoomable' },
    {
      type: 'string',
      label: 'Position',
      name: 'position',
      required: true,
      options: ['float-left', 'float-right', 'block'],
    },
    {
      type: 'string',
      label: 'Width',
      name: 'imgWidth',
      required: true,
      options: [
        'auto',
        'fullWidth',
        'twoThirdWidth',
        'halfWidth',
        'thirdWidth',
        'quarterWidth',
      ],
    },
    {
      type: 'string',
      label: 'Class',
      name: 'class',
      description: 'mode expert, ne pas utiliser',
    },
  ],
};

export { imageBlock };
