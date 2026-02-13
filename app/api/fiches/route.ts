import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { getRefConfig } from '../../../referentiel-config';

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
  };
  languages: string[];
  fiches: Fiche[];
}

// Charger les données depuis le fichier JSON
function loadApiData(): ApiData {
  const filePath = path.join(process.cwd(), 'public/api-data/fiches-full.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

// Fonction pour filtrer les fiches selon les paramètres
function filterFiches(
  fiches: Fiche[],
  lang?: string,
  version?: string
): Fiche[] {
  let filtered = fiches;

  // Filtrer par langue
  if (lang) {
    filtered = filtered.filter((fiche) => fiche.lang === lang);
  }

  // Filtrer par version
  if (version && version !== 'latest') {
    filtered = filtered
      .map((fiche) => {
        // Vérifier si la fiche a cette version
        const hasVersion = fiche.versions.some((v) => v.version === version);
        return hasVersion ? fiche : null;
      })
      .filter((fiche): fiche is Fiche => fiche !== null);
  }

  return filtered;
}

/**
 * @swagger
 * /api/fiches:
 *   get:
 *     summary: Liste toutes les fiches publiées
 *     description: Retourne la liste de toutes les fiches publiées, avec possibilité de filtrer par langue et version
 *     tags:
 *       - Fiches
 *     parameters:
 *       - in: query
 *         name: lang
 *         schema:
 *           type: string
 *           example: fr
 *         description: Code de langue (fr, en, es, etc.)
 *       - in: query
 *         name: version
 *         schema:
 *           type: string
 *           example: latest
 *         description: Version du référentiel (ex 1.0.0) ou "latest" pour la dernière version
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
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "1.01"
 *                       title:
 *                         type: string
 *                         example: "Exemple de bonne pratique"
 *                       lang:
 *                         type: string
 *                         example: "fr"
 *                       versions:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             version:
 *                               type: string
 *                               example: "1.0.0"
 *                             idRef:
 *                               type: string
 *                               example: "1.01"
 *                       url:
 *                         type: string
 *                         example: "/fr/fiches/FAKE_1.01-installation-exemple"
 *                 meta:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: integer
 *                       example: 42
 *                     lang:
 *                       type: string
 *                       example: "fr"
 *                     version:
 *                       type: string
 *                       example: "latest"
 *       400:
 *         description: Langue non supportée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Unsupported language"
 *                 message:
 *                   type: string
 *                   example: "Language \"de\" is not supported. Available languages: fr, en, es"
 *       404:
 *         description: Fichier de données non trouvé
 *       500:
 *         description: Erreur serveur
 */
export async function GET(request: NextRequest) {
  try {
    // Charger les données
    const apiData = loadApiData();

    // Récupérer les paramètres de query
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || undefined;
    const version = searchParams.get('version') || 'latest';

    // Utiliser la langue par défaut du référentiel si non spécifiée
    const refConfig = getRefConfig();
    const effectiveLang = lang || refConfig.i18n.defaultLang;

    // Valider que la langue est supportée
    if (!refConfig.i18n.locales.includes(effectiveLang)) {
      return NextResponse.json(
        {
          error: 'Unsupported language',
          message: `Language "${effectiveLang}" is not supported. Available languages: ${refConfig.i18n.locales.join(', ')}`,
        },
        { status: 400 }
      );
    }

    // Filtrer les fiches
    const filteredFiches = filterFiches(apiData.fiches, effectiveLang, version);

    // Construire la réponse
    const response = {
      data: filteredFiches,
      meta: {
        total: filteredFiches.length,
        lang: effectiveLang,
        version: version,
      },
    };

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error in /api/fiches:', error);

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
