import remarkFrontmatter from 'remark-frontmatter';
import remarkLintFrontmatterSchema from 'remark-lint-frontmatter-schema';
import remarkValidatePersonaReferences from './plugins/remark-validate-persona-references.mjs';

const remarkConfig = {
  plugins: [
    remarkFrontmatter,
    [
      remarkLintFrontmatterSchema,
      {
        schemas: {
          './content/fiche.schema.yaml': ['./src/content/fiches/**/*.{md,mdx}'],
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
