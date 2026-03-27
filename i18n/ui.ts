import { getRefConfig } from '../referentiel-config';

export const showDefaultLang = true;

const siteURL = process.env.SITE_URL || 'http://localhost:1234';
const PUBLIC_BASE = process.env.PUBLIC_BASE ? process.env.PUBLIC_BASE : '';

export const languages: Record<string, string> = getRefConfig().i18n.languages;

export const code_languages: string[] = getRefConfig().i18n.locales;

export const defaultLang = getRefConfig().i18n.defaultLang;

export const ui = {
  es: {
    // SEO
    'seo.site_name': 'Directrices de buenas prácticas',
    'seo.default.description': 'Directrices de buenas prácticas',
    'seo.url': siteURL + PUBLIC_BASE,
    'seo.titleTemplate': '%s | Colectivo de TI Verde',
    'seo.fb.image.url': '/assets/asso-greenit-share.png',
    'seo.tw.image.url': '/assets/asso-greenit-share.png',
    'seo.image.alt': 'Directrices de buenas prácticas',
    'seo.noRobots': true,
    'last-update': 'Última actualización',
    'Site web fièrement réalisé par': 'Sitio web hecho por',

    // src/components/BackToTop.astro
    'Retour en haut de page': 'Volver al principio de la página',

    // src/components/Header.astro
    "Retour à l'accueil": 'Retorno al inicio',

    // src/pages/[lang]/fiches/index.astro && src/components/fiches/FichesListView.astro
    'Bonnes pratiques': 'Buenas prácticas',
    'Consulter les Bonnes pratiques': 'Consulta las Mejores Prácticas',
    'Vue en cartes': 'Vista del mapa',
    'Vue en tableau (pour copier/coller)': 'Vista de tabla (para copiar/pegar)',
    'Correspondance RGESN': 'Correspondencia RGESN',

    // src/pages/[lang]/lexique/index.astro && src/components/lexique/LexiqueListView.astro
    Lexique: 'Léxico',
    'Consulter le Lexique': 'Consulta el glosario',
    'Consulter les Personas': 'Ver personas',

    // src/pages/[lang]/personas/index.astro
    Personas: 'Personas',
    'Aucun contenu disponible.': 'No hay contenido disponible.',
    'Contribuez !': '¡Contribuir!',
    'Voir la méthode de contribution sur le GitHub du CNUMR':
      'Vea el método de contribución en CNUMR GitHub',
    'Voir le repository GitHub de CNUMR': 'Ver el repositorio CNUMR GitHub',

    // src/components/Footer.astro
    'Mentions légales': 'Notas legales',
    'Les mentions légales du site.': 'Los avisos legales del sitio.',
    'Association Green IT': 'Asociación de TI verde',
    "Aller sur le site de l'association GreenIT (site externe)":
      'Ir al sitio web de la asociación GreenIT (sitio externo)',
    "Logo association Green IT - lien sortant vers le site l'association Green IT":
      'Logotipo de la asociación Green IT: enlace saliente al sitio web de la asociación Green IT',
    'Sous licence CC BY-NC-ND 4.0': 'Licenciado bajo CC BY-NC-ND 4.0',

    // src/components/Licence.astro
    'Consulter le contenu de la licence CC BY-NC-ND 4.0 (site externe)':
      'Ver el contenido de la licencia CC BY-NC-ND 4.0 (sitio externo)',

    // src/components/ContributeCTA.astro
    'Vous avez repérez une coquille ou vous souhaitez contribuer ?':
      '¿Has detectado un error tipográfico o te gustaría contribuir?',
    'Venez sur le repo pour lancer une discussion sur':
      'Ven al repositorio para iniciar una discusión sobre',
    'la fiche': 'la ficha',
    'la fiche du lexique': 'la hoja del glosario',
    'le persona': 'la persona',

    // src/pages/[lang]/fiches/index.astro
    "Les Fiches de Bonnes pratiques pour rendre le numérique plus respectueux de l'environnement.":
      'Fichas de buenas prácticas para hacer la tecnología digital más respetuosa con el medio ambiente.',

    // src/pages/[lang]/lexique/index.astro
    "Les termes utilisés pour rendre le numérique plus respectueux de l'environnement.":
      'Términos utilizados para hacer que lo digital sea más respetuoso con el medio ambiente.',

    // src/pages/[lang]/personas/index.astro
    'Les profils que nous ciblons avec ce référentiel.':
      'Los perfiles a los que nos dirigimos con este repositorio.',

    // src/components/mdx/MDXLexiqueTooltip.astro
    'Définition manquante, vérifier le formatage du lien ou si la fiche existe dans le Lexique.':
      'Falta definición, verifique el formato del enlace o si la entrada existe en el Glosario.',

    // src/components/mdx/LexiqueTooltip.tsx
    'lexique.aria-label':
      'Definición de {term}. Presione Entrar o Espacio para mostrar.',
    'lexique.aria-label-tooltip': 'Definición de {term}',
    'lexique.loading': 'Cargando...',
    'lexique.not-found': 'Término "{term}" no encontrado en el glosario',

    // src/components/CardView.astro
    Fort: 'Fuerte',
    Moyen: 'Promedio',
    Faible: 'Débil',
    'Mise à jour le': 'Actualizado en',

    // src/components/fiches/FichesFilter.astro
    Afficher: 'Mostrar',
    Masquer: 'Esconder',
    'les filtres': 'los filtros',
    Catégories: 'Categorías',

    // src/components/fiches/FichePermaLink.astro
    Permalien: 'Enlace Permanente',
    'Lien copié': 'Enlace copiado',

    // src/components/fiches/FichesTableValidation.astro
    'Principe de validation': 'Principio de validación',
    'Le nombre': 'El número',
    'est inférieur ou égal à': 'es menor o igual a',

    // src/components/fiches/FicheViewPaginate.astro
    'Navigation entre les bonnes pratiques':
      'Navegando entre las mejores prácticas',
    "Priorité d'implémentation": 'Prioridad de implementación',
    'Impact environnemental': 'Impacto medioambiental',

    // src/components/FichesMetasDisplay.astro
    'Sommaire :': 'Resumen :',
    responsible: 'Gerente(s)',

    // src/components/LanguagePicker.astro
    'Language picker': 'Sélecteur de langue',
    'Changer de langue': '🇬🇧 / 🇫🇷',

    // Scope
    scope: 'Perímetro',
    cache: 'Oculto',
    documents: 'Documentos',
    features: 'Características',
    images: 'Fotos',
    'front-office': 'Front-office',
    hosting: 'Alojamiento',
    performance: 'Rendimiento',
    security: 'Seguridad',
    themes: 'Temas',
    seo: 'SEO',
    storage: 'Almacenamiento',
    'videos-sounds': 'Vídeos/Audios',
    // Lifecycle
    lifecycle: 'Ciclo de vida',
    '1-analyse-of-needs': '1. Análisis de necesidades',
    '2-installation': '2. Instalación / Arquitectura de software',
    '3-conception-design': '3. Concepción y Diseño',
    '4-integration-development': '4. Integración y Desarrollo',
    '5-content-media': '5. Contenido y medios',
    '6-tests-validation': '6. Pruebas y Validación',
    '7-deployment': '7. Publicación',
    '8-maintenance': '8. Mantenimiento / Uso / Aporte',
    '9-end-of-life': '9. Fin de la vida',
    '1-specification': '1. Especificación',
    '2-concept': '2. Conception',
    '3-developement': '3. Diseño',
    '4-production': '4. Producción',
    '5-utilization': '5. Utilice',
    '6-support': '6. Ayuda',
    '7-retirement': '7. Fin de la vida',
    // Environmental impact
    environmental_impact: 'Impacto medioambiental',
    high_environmental_impact: '3. Fuerte 🌱🌱🌱',
    medium_environmental_impact: '2. Promedio 🌱🌱',
    low_environmental_impact: '1. Débil 🌱',
    // Priority implementation
    priority_implementation: 'Prioridad de implementación',
    high_priority: '3. Alto 👍👍👍',
    medium_priority: '2. Promedio 👍👍',
    low_priority: '1. Débil 👍',
    // Saved resource(s)
    saved_resources: 'Recursos guardados',
    cpu: 'Procesador',
    ram: 'Memoria viva',
    network: 'Red',
    requests: 'Consultas',
    'e-waste': 'Residuos electrónicos',
    electricity: 'El consumo de energía',
    ghg: 'Emisiones de gases de efecto invernadero',
    // MoE
    moe: 'implementación',
    'priority-level': 'Nivel de prioridad',
    // Tiers
    tiers: 'Terceros afectados',
    'user-device': 'Usuario/Terminal',
    // "network": "Réseau",
    datacenter: 'Centro de datos',
    tdb: 'Por definir',
    'Previous REF ID': 'REF ID anterior',
    'No previous Version': 'Sin versión anterior',
  },
  en: {
    // SEO
    'seo.site_name': 'Best practice guidelines',
    'seo.default.description': 'Best practice guidelines',
    'seo.url': siteURL + PUBLIC_BASE,
    'seo.titleTemplate': '%s | Green IT Collective',
    'seo.fb.image.url': '/assets/asso-greenit-share.png',
    'seo.tw.image.url': '/assets/asso-greenit-share.png',
    'seo.image.alt': 'Best practice guidelines',
    'seo.noRobots': true,
    'last-update': 'Last update',
    'Site web fièrement réalisé par': 'Web site made by',

    // src/components/BackToTop.astro
    'Retour en haut de page': 'Return to top of page',

    // src/components/Header.astro
    "Retour à l'accueil": 'Back to Home',

    // src/pages/[lang]/fiches/index.astro && src/components/fiches/FichesListView.astro
    'Bonnes pratiques': 'Good practices',
    'Consulter les Bonnes pratiques': 'Consult the Best practices',
    'Vue en cartes': 'Cards view',
    'Vue en tableau (pour copier/coller)': 'Table view (for copy/paste)',
    'Correspondance RGESN': 'RGESN Correspondence',

    // src/pages/[lang]/lexique/index.astro && src/components/lexique/LexiqueListView.astro
    Lexique: 'Glossary',
    'Consulter le Lexique': 'Consult the Glossary',
    'Consulter les Personas': 'View Personas',

    // src/pages/[lang]/personas/index.astro
    Personas: 'Personas',
    'Aucun contenu disponible.': 'No content available.',
    'Contribuez !': 'Contribute!',
    'Voir la méthode de contribution sur le GitHub du CNUMR':
      'See the contribution method on the CNUMR GitHub',
    'Voir le repository GitHub de CNUMR': 'See the CNUMR GitHub repository',

    // src/components/Footer.astro
    'Mentions légales': 'Legal Notice',
    'Les mentions légales du site.': 'The legal notices of the site.',
    'Association Green IT': 'Green IT Association',
    "Aller sur le site de l'association GreenIT (site externe)":
      'Go to the GreenIT association website (external site)',
    "Logo association Green IT - lien sortant vers le site l'association Green IT":
      'Green IT association logo - outgoing link to the GreenIT association website',
    'Sous licence CC BY-NC-ND 4.0': 'Licensed under CC BY-NC-ND 4.0',

    // src/components/Licence.astro
    'Consulter le contenu de la licence CC BY-NC-ND 4.0 (site externe)':
      'View CC BY-NC-ND 4.0 license content (external site)',

    // src/components/ContributeCTA.astro
    'Vous avez repérez une coquille ou vous souhaitez contribuer ?':
      'Have you spotted a typo or would you like to contribute?',
    'Venez sur le repo pour lancer une discussion sur':
      'Come to the repo to start a discussion about',
    'la fiche': 'the sheet',
    'la fiche du lexique': 'the glossary sheet',
    'le persona': 'the persona',

    // src/pages/[lang]/fiches/index.astro
    "Les Fiches de Bonnes pratiques pour rendre le numérique plus respectueux de l'environnement.":
      'Best practice sheets to make digital technology more environmentally friendly.',

    // src/pages/[lang]/lexique/index.astro
    "Les termes utilisés pour rendre le numérique plus respectueux de l'environnement.":
      'Terms used to make digital more environmentally friendly.',

    // src/pages/[lang]/personas/index.astro
    'Les profils que nous ciblons avec ce référentiel.':
      'The profiles we target with this repository.',

    // src/components/mdx/MDXLexiqueTooltip.astro
    'Définition manquante, vérifier le formatage du lien ou si la fiche existe dans le Lexique.':
      'Missing definition, check the formatting of the link or if the entry exists in the Glossary.',

    // src/components/mdx/LexiqueTooltip.tsx
    'lexique.aria-label':
      'Definition of {term}. Press Enter or Space to display.',
    'lexique.aria-label-tooltip': 'Definition of {term}',
    'lexique.loading': 'Loading...',
    'lexique.not-found': 'Term "{term}" not found in the glossary',

    // src/components/CardView.astro
    Fort: 'Strong',
    Moyen: 'Average',
    Faible: 'Weak',
    'Mise à jour le': 'Updated on',

    // src/components/fiches/FichesFilter.astro
    Afficher: 'Display',
    Masquer: 'Hide',
    'les filtres': 'the filters',
    Catégories: 'Categories',

    // src/components/fiches/FichePermaLink.astro
    Permalien: 'Permalink',
    'Lien copié': 'Link copied',

    // src/components/fiches/FichesTableValidation.astro
    'Principe de validation': 'Validation principle',
    'Le nombre': 'The number',
    'est inférieur ou égal à': 'is less than or equal to',

    // src/components/fiches/FicheViewPaginate.astro
    'Navigation entre les bonnes pratiques':
      'Navigating between best practices',
    "Priorité d'implémentation": 'Implementation Priority',
    'Impact environnemental': 'Environmental impact',

    // src/components/FichesMetasDisplay.astro
    'Sommaire :': 'Summary :',
    responsible: 'Responsible(s)',

    // src/components/LanguagePicker.astro
    'Language picker': 'Language selector',
    'Changer de langue': '🇪🇸 / 🇫🇷',

    // Scope
    scope: 'Perimeter',
    cache: 'Cache',
    documents: 'Documents',
    features: 'Features',
    images: 'Pictures',
    'front-office': 'Front office',
    hosting: 'Hosting',
    performance: 'Performance',
    security: 'Security',
    themes: 'Themes',
    seo: 'SEO',
    storage: 'Storage',
    'videos-sounds': 'Videos/Audios',
    // Lifecycle
    lifecycle: 'Life cycle',
    '1-analyse-of-needs': '1. Analyse of needs',
    '2-installation': '2. Installation / Software architecture',
    '3-conception-design': '3. Conception & Design',
    '4-integration-development': '4. Integration & Development',
    '5-content-media': '5. Content & media',
    '6-tests-validation': '6. Testing & Validation',
    '7-deployment': '7. Put online',
    '8-maintenance': '8. Maintenance / Use / Contribution',
    '9-end-of-life': '9. End of life',
    '1-specification': '1. Specification',
    '2-concept': '2. Concept',
    '3-developement': '3. Development',
    '4-production': '4. Production',
    '5-utilization': '5. Utilization',
    '6-support': '6. Support',
    '7-retirement': '7. Retirement',
    // Environmental impact
    environmental_impact: 'Environmental impact',
    high_environmental_impact: '3. Strong 🌱🌱🌱',
    medium_environmental_impact: '2. Average 🌱🌱',
    low_environmental_impact: '1. Weak 🌱',
    // Priority implementation
    priority_implementation: 'Implementation Priority',
    high_priority: '3. High 👍👍👍',
    medium_priority: '2. Average 👍👍',
    low_priority: '1. Weak 👍',
    // Saved resource(s)
    saved_resources: 'Resource(s) saved',
    cpu: 'Processor',
    ram: 'RAM',
    network: 'Network',
    requests: 'Queries',
    'e-waste': 'Electronic waste',
    electricity: 'Power consumption',
    ghg: 'Greenhouse gas emissions',
    // MoE
    moe: 'implementation',
    'priority-level': 'Priority level',
    // Tiers
    tiers: 'Third party impacted',
    'user-device': 'User/Terminal',
    // "network": "Réseau",
    datacenter: 'Datacenter',
    tdb: 'To define',
    'Previous REF ID': 'Previous REF ID',
    'No previous Version': 'No previous Version',
  },
  fr: {
    '': '',
    // SEO
    'seo.site_name': 'Référentiel de bonnes pratiques',
    'seo.default.description': 'Référentiel de bonnes pratiques',
    'seo.url': siteURL + PUBLIC_BASE,
    'seo.titleTemplate': '%s | Collectif Green IT',
    'seo.fb.image.url': '/assets/asso-greenit-share.png',
    'seo.tw.image.url': '/assets/asso-greenit-share.png',
    'seo.image.alt': 'Référentiel de bonnes pratiques',
    'seo.noRobots': true,
    'last-update': 'Dernière mise à jour',
    'Site web fièrement réalisé par': 'Site web réalisé par',

    // src/components/BackToTop.astro
    'Retour en haut de page': 'Retour en haut de page',

    // src/components/Header.astro
    "Retour à l'accueil": "Retour à l'accueil",

    // src/pages/[lang]/fiches/index.astro && src/components/fiches/FichesListView.astro
    'Bonnes pratiques': 'Bonnes pratiques',
    'Consulter les Bonnes pratiques': 'Consulter les Bonnes pratiques',
    'Vue en cartes': 'Vue en cartes',
    'Vue en tableau (pour copier/coller)':
      'Vue en tableau (pour copier/coller)',
    'Correspondance RGESN': 'Correspondance RGESN',

    // src/pages/[lang]/lexique/index.astro && src/components/lexique/LexiqueListView.astro
    Lexique: 'Lexique',
    'Consulter le Lexique': 'Consulter le Lexique',
    'Consulter les Personas': 'Consulter les Personas',

    // src/pages/[lang]/personas/index.astro
    Personas: 'Personas',
    'Aucun contenu disponible.': 'Aucun contenu disponible.',
    'Contribuez !': 'Contribuez !',
    'Voir la méthode de contribution sur le GitHub du CNUMR':
      'Voir la méthode de contribution sur le GitHub du CNUMR',
    'Voir le repository GitHub de CNUMR': 'Voir le repository GitHub de CNUMR',

    // src/components/Footer.astro
    'Mentions légales': 'Mentions légales',
    'Les mentions légales du site.': 'Les mentions légales du site.',
    'Association Green IT': 'Association Green IT',
    "Aller sur le site de l'association Green IT (site externe)":
      "Aller sur le site de l'association Green IT (site externe)",
    "Logo association Green IT - lien sortant vers le site l'association Green IT":
      "Logo association Green IT - lien sortant vers le site l'association Green IT",
    'Sous licence CC BY-NC-ND 4.0': 'Sous licence CC BY-NC-ND 4.0',

    // src/components/Licence.astro
    'Consulter le contenu de la licence CC BY-NC-ND 4.0 (site externe)':
      'Consulter le contenu de la licence CC BY-NC-ND 4.0 (site externe)',

    // src/components/ContributeCTA.astro
    'Vous avez repérez une coquille ou vous souhaitez contribuer ?':
      'Vous avez repérez une coquille ou vous souhaitez contribuer ?',
    'Venez sur le repo pour lancer une discussion sur':
      'Venez sur le repo pour lancer une discussion sur',
    'la fiche': 'la fiche',
    'la fiche du lexique': 'la fiche du lexique',
    'le persona': 'le persona',

    // src/pages/[lang]/fiches/index.astro
    "Les Fiches de Bonnes pratiques pour rendre le numérique plus respectueux de l'environnement.":
      "Les Fiches de Bonnes pratiques pour rendre le numérique plus respectueux de l'environnement.",

    // src/pages/[lang]/lexique/index.astro
    "Les termes utilisés pour rendre le numérique plus respectueux de l'environnement.":
      "Les termes utilisés pour rendre le numérique plus respectueux de l'environnement.",

    // src/pages/[lang]/personas/index.astro
    'Les profils que nous ciblons avec ce référentiel.':
      'Les profils que nous ciblons avec ce référentiel.',

    // src/components/mdx/MDXLexiqueTooltip.astro
    'Définition manquante, vérifier le formatage du lien ou si la fiche existe dans le Lexique.':
      'Définition manquante, vérifier le formatage du lien ou si la fiche existe dans le Lexique.',

    // src/components/mdx/LexiqueTooltip.tsx
    'lexique.aria-label':
      'Définition de {term}. Appuyez sur Entrée ou Espace pour afficher.',
    'lexique.aria-label-tooltip': 'Définition de {term}',
    'lexique.loading': 'Chargement...',
    'lexique.not-found': 'Terme "{term}" non trouvé dans le lexique',

    // src/components/CardView.astro
    Fort: 'Fort',
    Moyen: 'Moyen',
    Faible: 'Faible',
    'Mise à jour le': 'Mise à jour le',

    // src/components/fiches/FichesFilter.astro
    Afficher: 'Afficher',
    Masquer: 'Masquer',
    'les filtres': 'les filtres',
    Catégories: 'Catégories',

    // src/components/fiches/FichePermaLink.astro
    Permalien: 'Permalien',
    'Lien copié': 'Lien copié',

    // src/components/fiches/FichesTableValidation.astro
    'Principe de validation': 'Principe de validation',
    'Le nombre': 'Le nombre',
    'est inférieur ou égal à': 'est inférieur ou égal à',

    // src/components/fiches/FicheViewPaginate.astro
    'Navigation entre les bonnes pratiques':
      'Navigation entre les bonnes pratiques',
    "Priorité d'implémentation": "Priorité d'implémentation",
    'Impact environnemental': 'Impact environnemental',

    // src/components/FichesMetasDisplay.astro
    'Sommaire :': 'Sommaire :',
    responsible: 'Responsable(s)',

    // src/components/LanguagePicker.astro
    'Language picker': 'Sélecteur de langue',
    'Changer de langue': '🇬🇧 / 🇪🇸',

    // Scope
    scope: 'Périmètre',
    cache: 'Cache',
    documents: 'Documents',
    features: 'Fonctionnalités',
    images: 'Images',
    'front-office': 'Front-office',
    hosting: 'Hébergement',
    performance: 'Performance',
    security: 'Sécurité',
    themes: 'Thèmes',
    seo: 'SEO',
    storage: 'Stockage',
    'videos-sounds': 'Vidéos/Audios',
    // Lifecycle
    lifecycle: 'Cycle de vie',
    '1-analyse-of-needs': '1. Analyse des besoins',
    '2-installation': '2. Installation / Architecture',
    '3-conception-design': '3. Conception & Design',
    '4-integration-development': '4. Intégration & Développement',
    '5-content-media': '5. Contenu & médias',
    '6-tests-validation': '6. Tests & Validation',
    '7-deployment': '7. Mise en ligne',
    '8-maintenance': '8. Maintenance / Usage / Contribution',
    '9-end-of-life': '9. Fin de vie',
    '1-specification': '1. Spécification',
    '2-concept': '2. Conception',
    '3-developement': '3. Développement',
    '4-production': '4. Production',
    '5-utilization': '5. Utilisation',
    '6-support': '6. Support',
    '7-retirement': '7. Fin de vie',

    // Environmental impact
    environmental_impact: 'Impact environnemental',
    high_environmental_impact: '3. Fort 🌱🌱🌱',
    medium_environmental_impact: '2. Moyen 🌱🌱',
    low_environmental_impact: '1. Faible 🌱',
    // Priority implementation
    priority_implementation: "Priorité d'implémentation",
    high_priority: '3. Haute 👍👍👍',
    medium_priority: '2. Moyenne 👍👍',
    low_priority: '1. Faible 👍',
    // Saved resource(s)
    saved_resources: 'Ressource(s) économisée(s)',
    cpu: 'Processeur',
    ram: 'Mémoire vive',
    network: 'Réseau',
    requests: 'Requêtes',
    'e-waste': 'Déchets électroniques',
    electricity: 'Consommation électrique',
    ghg: 'Émissions de gaz à effet de serre',
    // MoE
    moe: 'Mise en oeuvre',
    'priority-level': 'Degré de priorité',
    // Tiers
    tiers: 'Tier impacté',
    'user-device': 'Utilisateur/Terminal',
    // "network": "Réseau",
    datacenter: 'Datacenter',
    tdb: 'À définir',
    'Previous REF ID': 'REF ID précédente',
    'No previous Version': 'Pas de version précédente',
    rgesn: 'RGESN',
  },
} as const;
