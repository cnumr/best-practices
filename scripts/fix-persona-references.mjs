/**
 * Script de maintenance : Correction des références aux personas dans les fiches
 * 
 * Ce script met à jour les références `responsible` dans les fiches EN et ES
 * en se basant sur les références de la version FR correspondante.
 * 
 * Usage:
 *   node scripts/fix-persona-references.mjs
 * 
 * Le script:
 * 1. Parcourt toutes les fiches FR
 * 2. Extrait les refID et les responsables
 * 3. Trouve les fiches EN/ES correspondantes (même refID)
 * 4. Convertit les références personas FR vers EN/ES selon le mapping
 * 5. Met à jour les fichiers EN/ES avec les bonnes références
 * 
 * Utile pour:
 * - Synchroniser les références après création de nouvelles fiches
 * - Corriger les références après ajout/modification de personas
 * - Maintenir la cohérence des traductions
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Mapping des personas FR vers EN/ES
const personaMapping = {
  'fr/administrateur-systemes.mdx': { en: 'en/system-administrator.mdx', es: 'es/administrador-sistemas.mdx' },
  'fr/architecte-logicieldeveloppeur.mdx': { en: 'en/software-architect-developer.mdx', es: 'es/arquitecto-software-desarrollador.mdx' },
  'fr/codeuseur-developpeuser.mdx': { en: 'en/developer.mdx', es: 'es/desarrollador.mdx' },
  'fr/contributeur.mdx': { en: 'en/contributor.mdx', es: 'es/colaborador.mdx' },
  'fr/designeuser.mdx': { en: 'en/designer.mdx', es: 'es/disenador.mdx' },
  'fr/low-code-freelance-et-developpeur-front-end-d-agences.mdx': { en: 'en/low-code-freelance-front-end-agency-developer.mdx', es: 'es/low-code-freelance-desarrollador-front-end-agencia.mdx' },
  'fr/no-code-madame-et-monsieur-tout-le-monde.mdx': { en: 'en/no-code-everyone.mdx', es: 'es/no-code-todo-el-mundo.mdx' },
  'fr/poamoa.mdx': { en: 'en/poamoa.mdx', es: 'es/poamoa.mdx' },
  'fr/referenceuser-seo.mdx': { en: 'en/seo-specialist.mdx', es: 'es/especialista-seo.mdx' },
};

// Fonction pour extraire le refID d'un fichier
function getRefID(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return null;
  
  try {
    const frontmatter = yaml.load(frontmatterMatch[1]);
    return frontmatter?.refID?.toString().padStart(4, '0');
  } catch (e) {
    return null;
  }
}

// Fonction pour extraire les responsables d'un fichier
function getResponsibles(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return [];
  
  try {
    const frontmatter = yaml.load(frontmatterMatch[1]);
    if (!frontmatter?.responsible || !Array.isArray(frontmatter.responsible)) return [];
    
    return frontmatter.responsible
      .map(item => item?.responsible || item)
      .filter(Boolean)
      .filter(ref => typeof ref === 'string' && ref.includes('personas/'));
  } catch (e) {
    return [];
  }
}

// Fonction pour convertir une référence FR vers EN ou ES
function convertPersonaReference(frRef, targetLang) {
  // Extraire le nom du fichier persona depuis la référence FR
  // Format: src/content/personas/fr/nom-persona.mdx
  const match = frRef.match(/src\/content\/personas\/(.+)$/);
  if (!match) return null;
  
  const frPersonaPath = match[1]; // ex: fr/designeuser.mdx
  const mapping = personaMapping[frPersonaPath];
  
  if (!mapping || !mapping[targetLang]) {
    console.warn(`⚠️  Pas de mapping trouvé pour: ${frPersonaPath} en ${targetLang}`);
    return null;
  }
  
  return `src/content/personas/${mapping[targetLang]}`;
}

// Fonction pour mettre à jour les responsables dans un fichier
function updateResponsibles(filePath, newResponsibles) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) {
    console.warn(`⚠️  Pas de frontmatter trouvé dans: ${filePath}`);
    return false;
  }
  
  try {
    const frontmatter = yaml.load(frontmatterMatch[1]);
    
    // Mettre à jour les responsables
    frontmatter.responsible = newResponsibles.map(ref => ({
      responsible: ref
    }));
    
    // Reconstruire le fichier
    const newFrontmatter = yaml.dump(frontmatter, {
      lineWidth: -1,
      noRefs: true,
      sortKeys: false,
    });
    
    const newContent = `---\n${newFrontmatter}---${content.slice(frontmatterMatch[0].length)}`;
    
    fs.writeFileSync(filePath, newContent, 'utf-8');
    return true;
  } catch (e) {
    console.error(`❌ Erreur lors de la mise à jour de ${filePath}:`, e.message);
    return false;
  }
}

// Fonction principale
function main() {
  const fichesFrDir = path.join(projectRoot, 'src/content/fiches/fr');
  const fichesEnDir = path.join(projectRoot, 'src/content/fiches/en');
  const fichesEsDir = path.join(projectRoot, 'src/content/fiches/es');
  
  const fichesFr = fs.readdirSync(fichesFrDir).filter(f => f.endsWith('.mdx'));
  
  let updatedEn = 0;
  let updatedEs = 0;
  let skipped = 0;
  
  for (const ficheFr of fichesFr) {
    const refID = getRefID(path.join(fichesFrDir, ficheFr));
    if (!refID) continue;
    
    // Trouver les fichiers correspondants EN et ES
    const fichesEn = fs.readdirSync(fichesEnDir).filter(f => f.includes(refID) && f.endsWith('.mdx'));
    const fichesEs = fs.readdirSync(fichesEsDir).filter(f => f.includes(refID) && f.endsWith('.mdx'));
    
    // Récupérer les responsables de la version FR
    const frResponsibles = getResponsibles(path.join(fichesFrDir, ficheFr));
    if (frResponsibles.length === 0) {
      skipped++;
      continue;
    }
    
    // Mettre à jour les versions EN
    for (const ficheEn of fichesEn) {
      const enPath = path.join(fichesEnDir, ficheEn);
      const enResponsibles = frResponsibles.map(ref => convertPersonaReference(ref, 'en')).filter(Boolean);
      
      if (enResponsibles.length > 0) {
        if (updateResponsibles(enPath, enResponsibles)) {
          console.log(`✅ EN: ${ficheEn}`);
          updatedEn++;
        }
      }
    }
    
    // Mettre à jour les versions ES
    for (const ficheEs of fichesEs) {
      const esPath = path.join(fichesEsDir, ficheEs);
      const esResponsibles = frResponsibles.map(ref => convertPersonaReference(ref, 'es')).filter(Boolean);
      
      if (esResponsibles.length > 0) {
        if (updateResponsibles(esPath, esResponsibles)) {
          console.log(`✅ ES: ${ficheEs}`);
          updatedEs++;
        }
      }
    }
  }
  
  console.log(`\n📊 Résumé:`);
  console.log(`  - Fiches EN mises à jour: ${updatedEn}`);
  console.log(`  - Fiches ES mises à jour: ${updatedEs}`);
  console.log(`  - Fiches ignorées (pas de responsables): ${skipped}`);
}

main();

