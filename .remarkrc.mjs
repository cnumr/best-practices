import 'dotenv/config';
import remarkFrontmatter from 'remark-frontmatter';
import remarkLintFrontmatterSchema from 'remark-lint-frontmatter-schema';
import remarkValidatePersonaReferences from './plugins/remark-validate-persona-references.mjs';

// Sélection du schéma de fiche selon le référentiel
const refName = process.env.NEXT_PUBLIC_REF_NAME || 'RWEB';

const getFicheSchema = () => {
  switch (refName) {
    case 'RWP':
      return './content/fiche.schema.rwp.yaml';
    default:
      // RWEB, REIPRO, RIA et autres
      return './content/fiche.schema.yaml';
  }
};

const remarkConfig = {
  plugins: [
    remarkFrontmatter,
    [
      remarkLintFrontmatterSchema,
      {
        schemas: {
          [getFicheSchema()]: ['./src/content/fiches/**/*.{md,mdx}'],
          './content/lexique.schema.yaml': [
            './src/content/lexique/**/*.{md,mdx}',
          ],
          './content/personas.schema.yaml': [
            './src/content/personas/**/*.{md,mdx}',
          ],
          './content/home.schema.yaml': ['./src/content/home/**/*.{md,mdx}'],
          './content/default.schema.yaml': [
            './src/content/mentionsLegales/**/*.{md,mdx}',
          ],
        },
      },
    ],
    remarkValidatePersonaReferences,
  ],
};
export default remarkConfig;
