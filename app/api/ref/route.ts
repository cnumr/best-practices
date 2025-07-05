import { getFicheDatas, getFichesDatas } from '../../apiUtils';

import { FichesConnectionQuery } from '../../../tina/__generated__/types';
import { client } from '../../../tina/__generated__/databaseClient';

/**
 * @swagger
 * /api/ref:
 *   get:
 *     description: Returns the fiches list or a specific fiche
 *     parameters:
 *       - name: language
 *         in: query
 *         required: false
 *         example: ''
 *         schema:
 *           type: string
 *           enum:
 *             - ''
 *             - fr
 *             - en
 *             - es
 *       - name: version
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         example: '5.0.0'
 *       - name: id
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *         example: '0001'
 *     responses:
 *       200:
 *         description: Fiches list or specific fiche
 *       400:
 *         description: Invalid parameters
 *       404:
 *         description: No fiches found
 */
export async function GET(request: Request) {
  const { origin, searchParams } = new URL(request.url);

  const language = searchParams.get('language');
  const version = searchParams.get('version');
  const id = searchParams.get('id');

  // Rendre version obligatoire
  if (!version) {
    return new Response(
      JSON.stringify({ error: 'Version parameter is required' }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  // Validation de la langue si fournie
  const validLanguages = ['fr', 'en', 'es'];
  if (language && language !== '' && !validLanguages.includes(language)) {
    return new Response(
      JSON.stringify({
        error: 'Language must be one of: fr, en, es or empty',
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  // Construire le filtre de base
  const filter: any = {
    published: {
      eq: true,
    },
  };

  // Ajouter le filtre de langue si fourni et non vide
  if (language && language !== '') {
    filter.language = {
      eq: language,
    };
  }

  // Gérer les filtres de version et ID ensemble
  if (version || id) {
    filter.versions = {};

    if (version) {
      filter.versions.version = {
        eq: version,
      };
    }

    if (id) {
      filter.versions.idRef = {
        eq: id,
      };
    }
  }

  const { data }: { data: FichesConnectionQuery } =
    await client.queries.fichesConnection({
      first: 1000,
      filter,
    });
  const { totalCount, edges: fiches } = data.fichesConnection;

  if (totalCount === 0) {
    return new Response(JSON.stringify({ error: 'No fiches found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Si on a un ID, retourner une seule fiche
  if (id) {
    const ficheList = fiches?.map((fiche) => fiche?.node);
    const fiche = ficheList?.[0];
    return getFicheDatas(fiche, origin);
  }

  // Sinon, retourner la liste des fiches
  return getFichesDatas(fiches, origin);
}
