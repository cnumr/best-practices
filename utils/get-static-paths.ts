import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'src/content');

export function getStaticPathsFromFilesystem(
  collection: 'fiches' | 'lexique' | 'personas'
): { lang: string; slug: string }[] {
  const collectionDir = path.join(CONTENT_DIR, collection);
  const results: { lang: string; slug: string }[] = [];

  // Si le dossier n'existe pas, retourner un tableau vide
  if (!fs.existsSync(collectionDir)) {
    return results;
  }

  // List language directories
  const langs = fs.readdirSync(collectionDir).filter((item) => {
    const itemPath = path.join(collectionDir, item);
    return fs.statSync(itemPath).isDirectory();
  });

  for (const lang of langs) {
    const langDir = path.join(collectionDir, lang);
    const files = fs.readdirSync(langDir).filter((file) => file.endsWith('.mdx'));

    for (const file of files) {
      results.push({
        lang,
        slug: file.replace('.mdx', ''),
      });
    }
  }

  return results;
}
