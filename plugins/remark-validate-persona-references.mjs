import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import { visit } from 'unist-util-visit';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

/**
 * Plugin remark pour valider que les références aux personas dans les fiches
 * pointent vers des fichiers qui existent réellement.
 */
export default function remarkValidatePersonaReferences() {
  return (tree, file) => {
    // Ignorer les fichiers qui ne sont pas des fiches
    if (!file.path || !file.path.includes('/fiches/')) {
      return;
    }

    // Parser le frontmatter depuis le nœud YAML
    visit(tree, 'yaml', (node) => {
      try {
        const frontmatter = yaml.load(node.value);

        if (frontmatter && frontmatter.responsible) {
          const responsible = frontmatter.responsible;

          // Gérer le cas où responsible est un tableau
          if (Array.isArray(responsible)) {
            responsible.forEach((item, index) => {
              // Cas 1: item.responsible est une string (format { responsible: "path" })
              if (item && typeof item === 'object' && item.responsible) {
                const personaPath = item.responsible;
                if (
                  typeof personaPath === 'string' &&
                  personaPath.startsWith('src/content/personas/')
                ) {
                  const fullPath = path.join(projectRoot, personaPath);
                  if (!fs.existsSync(fullPath)) {
                    // Trouver la ligne approximative dans le fichier
                    const fileContent = fs.readFileSync(file.path, 'utf-8');
                    const lines = fileContent.split('\n');
                    let responsibleLine = node.position?.start?.line || 1;

                    for (let i = 0; i < lines.length; i++) {
                      if (lines[i].includes(personaPath)) {
                        responsibleLine = i + 1;
                        break;
                      }
                    }

                    file.message(
                      `Référence persona introuvable: "${personaPath}" n'existe pas`,
                      { line: responsibleLine, column: 1 }
                    );
                  }
                }
              }
              // Cas 2: item est directement une string (format ["path1", "path2"])
              else if (
                typeof item === 'string' &&
                item.startsWith('src/content/personas/')
              ) {
                const fullPath = path.join(projectRoot, item);
                if (!fs.existsSync(fullPath)) {
                  const fileContent = fs.readFileSync(file.path, 'utf-8');
                  const lines = fileContent.split('\n');
                  let responsibleLine = node.position?.start?.line || 1;

                  for (let i = 0; i < lines.length; i++) {
                    if (lines[i].includes(item)) {
                      responsibleLine = i + 1;
                      break;
                    }
                  }

                  file.message(
                    `Référence persona introuvable: "${item}" n'existe pas`,
                    { line: responsibleLine, column: 1 }
                  );
                }
              }
            });
          }
          // Gérer le cas où responsible est une string unique
          else if (
            typeof responsible === 'string' &&
            responsible.startsWith('src/content/personas/')
          ) {
            const fullPath = path.join(projectRoot, responsible);
            if (!fs.existsSync(fullPath)) {
              const fileContent = fs.readFileSync(file.path, 'utf-8');
              const lines = fileContent.split('\n');
              let responsibleLine = node.position?.start?.line || 1;

              for (let i = 0; i < lines.length; i++) {
                if (lines[i].includes(responsible)) {
                  responsibleLine = i + 1;
                  break;
                }
              }

              file.message(
                `Référence persona introuvable: "${responsible}" n'existe pas`,
                { line: responsibleLine, column: 1 }
              );
            }
          }
        }
      } catch (error) {
        // Ignorer les erreurs de parsing YAML (le plugin remark-lint-frontmatter-schema s'en occupera)
      }
    });
  };
}
