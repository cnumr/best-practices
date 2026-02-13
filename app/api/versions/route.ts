import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

// Types
interface FicheVersion {
  version: string;
  idRef: string;
}

interface Fiche {
  id: string;
  title: string;
  lang: string;
  versions: FicheVersion[];
  url: string;
}

interface ApiData {
  meta: {
    generated: string;
    total: number;
    languages: string[];
    versions: string[];
  };
  languages: string[];
  versions: string[];
  fiches: Fiche[];
}

// Charger les données depuis le fichier JSON
function loadApiData(): ApiData {
  const filePath = path.join(process.cwd(), 'public/api-data/fiches-full.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

/**
 * @swagger
 * /api/versions:
 *   get:
 *     summary: Liste des versions disponibles
 *     description: Retourne la liste de toutes les versions distinctes présentes dans les fiches publiées
 *     tags:
 *       - Versions
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
 *                   example: ["1.0.0", "2.0.0"]
 *                 meta:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: integer
 *                       example: 2
 *       500:
 *         description: Erreur serveur
 */
export async function GET(request: NextRequest) {
  try {
    const apiData = loadApiData();

    const response = {
      data: apiData.versions,
      meta: {
        total: apiData.versions.length,
      },
    };

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error in /api/versions:', error);

    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      return NextResponse.json(
        {
          error: 'API data not found',
          message:
            'Please run "node scripts/generate-api-data.mjs" to generate the API data',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
