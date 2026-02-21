import { NextRequest, NextResponse } from 'next/server';
import { getRefConfig } from '../../../referentiel-config';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

/**
 * @swagger
 * /api/languages:
 *   get:
 *     summary: Liste des langues disponibles
 *     description: Retourne la liste de toutes les langues disponibles dans le référentiel ainsi que la langue par défaut
 *     tags:
 *       - Languages
 *     responses:
 *       200:
 *         description: Succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["fr", "en", "es"]
 *                 default:
 *                   type: string
 *                   example: "fr"
 *       500:
 *         description: Erreur serveur
 */
export async function GET(request: NextRequest) {
  try {
    // Récupérer les langues depuis la config du référentiel
    const refConfig = getRefConfig();

    // Construire la réponse
    const response = {
      data: refConfig.i18n.locales,
      default: refConfig.i18n.defaultLang,
    };

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error in /api/languages:', error);

    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
