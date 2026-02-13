/**
 * Script de génération de la spec OpenAPI statique
 *
 * Ce script génère un fichier JSON avec la spécification OpenAPI complète
 * en scannant les annotations @swagger dans les fichiers API.
 *
 * Usage:
 *   node scripts/generate-openapi-spec.mjs
 *
 * Le script:
 * 1. Utilise swagger-jsdoc pour scanner les fichiers dans app/api/
 * 2. Génère la spécification OpenAPI 3.0
 * 3. Écrit le résultat dans public/api-data/openapi-spec.json
 *
 * Note: Ce script doit être exécuté au build time car les fichiers source
 * .ts ne sont pas disponibles au runtime sur Vercel serverless.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import swaggerJsdoc from 'swagger-jsdoc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

function main() {
  console.log('🚀 Génération de la spec OpenAPI...\n');

  const outputDir = path.join(projectRoot, 'public/api-data');
  const outputFile = path.join(outputDir, 'openapi-spec.json');

  // Créer le dossier de sortie s'il n'existe pas
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Configuration swagger-jsdoc
  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API Référentiel GreenIT',
        version: '1.0.0',
        description:
          "API pour accéder aux fiches du référentiel GreenIT. Cette API permet de récupérer la liste des fiches publiées, les détails d'une fiche spécifique, et la liste des langues disponibles.",
        contact: {
          name: 'Collectif Green IT (CNUMR)',
          url: 'https://github.com/cnumr',
        },
      },
      tags: [
        {
          name: 'Fiches',
          description: 'Endpoints pour gérer les fiches du référentiel',
        },
        {
          name: 'Languages',
          description: 'Endpoints pour les langues disponibles',
        },
      ],
    },
    apis: [
      path.join(projectRoot, 'app/api/**/*.ts'),
      path.join(projectRoot, 'app/api/**/*.js'),
    ],
  };

  // Générer la spec
  const spec = swaggerJsdoc(options);

  // Vérifier que des paths ont été trouvés
  const pathCount = Object.keys(spec.paths || {}).length;
  if (pathCount === 0) {
    console.warn('⚠️  Aucun endpoint trouvé ! Vérifiez les annotations @swagger dans app/api/');
  }

  // Écrire le fichier JSON
  fs.writeFileSync(outputFile, JSON.stringify(spec, null, 2), 'utf-8');

  console.log('✨ Génération terminée !');
  console.log('📊 Résumé:');
  console.log(`  - Endpoints trouvés: ${pathCount}`);
  console.log(`  - Tags: ${spec.tags?.map(t => t.name).join(', ') || 'aucun'}`);
  console.log(`  - Fichier généré: ${outputFile}`);
  console.log(`  - Taille: ${(fs.statSync(outputFile).size / 1024).toFixed(2)} KB\n`);
}

// Exécution
main();
