import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { getRefConfig } from '../../../../referentiel-config';

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

// Fonction pour trouver une fiche par ID
function findFicheById(
  fiches: Fiche[],
  id: string,
  lang?: string,
  version?: string
): Fiche | null {
  // Filtrer par ID
  let candidates = fiches.filter((fiche) => fiche.id === id);

  if (candidates.length === 0) {
    return null;
  }

  // Filtrer par langue si spécifiée
  if (lang) {
    const ficheWithLang = candidates.find((fiche) => fiche.lang === lang);
    if (ficheWithLang) {
      candidates = [ficheWithLang];
    }
  }

  // Si version spécifique demandée (autre que latest), vérifier qu'elle existe
  if (version && version !== 'latest') {
    const ficheWithVersion = candidates.find((fiche) =>
      fiche.versions.some((v) => v.version === version)
    );
    if (ficheWithVersion) {
      return ficheWithVersion;
    }
    return null;
  }

  // Retourner la première correspondance (ou celle avec la langue par défaut)
  return candidates[0];
}

/**
 * @swagger
 * /api/fiches/{id}:
 *   get:
 *     summary: Récupère une fiche par son ID
 *     description: Retourne les détails d'une fiche spécifique en fonction de son ID, avec possibilité de filtrer par langue et version
 *     tags:
 *       - Fiches
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "1.01"
 *         description: Identifiant unique de la fiche (refID)
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
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "1.01"
 *                     title:
 *                       type: string
 *                       example: "Exemple de bonne pratique"
 *                     lang:
 *                       type: string
 *                       example: "fr"
 *                     versions:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           version:
 *                             type: string
 *                             example: "1.0.0"
 *                           idRef:
 *                             type: string
 *                             example: "1.01"
 *                     currentVersion:
 *                       type: string
 *                       example: "1.0.0"
 *                     url:
 *                       type: string
 *                       example: "/fr/fiches/FAKE_1.01-installation-exemple"
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
 *         description: Fiche non trouvée
 *       500:
 *         description: Erreur serveur
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Charger les données
    const apiData = loadApiData();

    // Récupérer les paramètres
    const { id } = params;
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

    // Trouver la fiche
    const fiche = findFicheById(apiData.fiches, id, effectiveLang, version);

    if (!fiche) {
      return NextResponse.json(
        {
          error: 'Fiche not found',
          message: `No fiche found with id "${id}" for language "${effectiveLang}" and version "${version}"`,
        },
        { status: 404 }
      );
    }

    // Déterminer la version actuelle (la plus récente si "latest")
    const currentVersion =
      version === 'latest' && fiche.versions.length > 0
        ? fiche.versions[fiche.versions.length - 1].version
        : version;

    // Construire la réponse
    const response = {
      data: {
        ...fiche,
        currentVersion,
      },
    };

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error(`Error in /api/fiches/${params.id}:`, error);

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
