import { FichesConnectionQuery } from '../../../tina/__generated__/types';
import { client } from '../../../tina/__generated__/databaseClient';

/**
 * @swagger
 * /api/versions:
 *   get:
 *     description: Returns all available versions with fiche counts by language
 *     responses:
 *       200:
 *         description: List of all available versions with counts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 versions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       version:
 *                         type: string
 *                         example: '5.0.0'
 *                       counts:
 *                         type: object
 *                         properties:
 *                           fr:
 *                             type: number
 *                             example: 15
 *                           en:
 *                             type: number
 *                             example: 12
 *                           es:
 *                             type: number
 *                             example: 8
 *                   example: [
 *                     {
 *                       "version": "5.0.0",
 *                       "counts": { "fr": 15, "en": 12, "es": 8 }
 *                     },
 *                     {
 *                       "version": "4.0.0",
 *                       "counts": { "fr": 10, "en": 8 }
 *                     }
 *                   ]
 *       404:
 *         description: No versions found
 */
export async function GET() {
  const { data }: { data: FichesConnectionQuery } =
    await client.queries.fichesConnection({
      first: 1000,
      filter: {
        published: {
          eq: true,
        },
      },
    });

  const { totalCount, edges: fiches } = data.fichesConnection;

  if (totalCount === 0) {
    return new Response(JSON.stringify({ error: 'No versions found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Structure pour stocker les compteurs par version et langue
  const versionCounts: Record<string, Record<string, number>> = {};

  fiches?.forEach((fiche) => {
    const ficheData = fiche?.node;
    if (ficheData?.versions && ficheData?.language) {
      ficheData.versions.forEach((versionData) => {
        if (versionData?.version && versionData?.idRef) {
          // Exclure les IDs qui ne contiennent que des tirets
          const idRef = versionData.idRef;
          if (idRef && !/^-+$/.test(idRef)) {
            const version = versionData.version;
            const language = ficheData.language;

            // Initialiser la version si elle n'existe pas
            if (!versionCounts[version]) {
              versionCounts[version] = {};
            }

            // Initialiser la langue si elle n'existe pas
            if (!versionCounts[version][language]) {
              versionCounts[version][language] = 0;
            }

            // Incrémenter le compteur
            versionCounts[version][language]++;
          }
        }
      });
    }
  });

  // Convertir en tableau et trier par ordre décroissant
  const versions = Object.keys(versionCounts)
    .sort((a, b) => b.localeCompare(a, undefined, { numeric: true }))
    .map((version) => ({
      version,
      counts: versionCounts[version],
    }));

  return new Response(JSON.stringify({ versions }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
