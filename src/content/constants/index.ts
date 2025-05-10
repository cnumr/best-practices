const lifecycleOptions = {
  RWEB: [
    {
      value: '1-analyse-of-needs',
      label: '1. Analyse des besoins',
    },
    {
      value: '2-installation',
      label: '2. Installation / Architechture',
    },
    {
      value: '3-conception-design',
      label: '3. Conception & Design',
    },
    {
      value: '4-integration-development',
      label: '4. Intégration & Développement',
    },
    {
      value: '5-content-media',
      label: '5. Contenu & médias',
    },
    {
      value: '6-tests-validation',
      label: '6. Tests & validation',
    },
    {
      value: '7-deployment',
      label: '7. Mise en ligne',
    },
    {
      value: '8-maintenance',
      label: '8. Maintenance / Usage / Contribution',
    },
    {
      value: '9-end-of-life',
      label: '9. Fin de vie',
    },
    // new lifecycle
    {
      value: '1-specification',
      label: '1. Specification',
    },
    {
      value: '2-concept',
      label: '2. Concept',
    },
    {
      value: '3-developement',
      label: '3. Development',
    },
    {
      value: '4-production',
      label: '4. Production',
    },
    {
      value: '5-utilization',
      label: '5. Utilization',
    },
    {
      value: '6-support',
      label: '6. Support',
    },
    {
      value: '7-retirement',
      label: '7. Retirement',
    },
    {
      value: 'tbd',
      label: "<< TBD (éviter de l'utiliser) >>",
    }
  ],
  RWP: [
    {
      value: '1-analyse-of-needs',
      label: '1. Analyse des besoins',
    },
    {
      value: '2-installation',
      label: '2. Installation / Architechture',
    },
    {
      value: '3-conception-design',
      label: '3. Conception & Design',
    },
    {
      value: '4-integration-development',
      label: '4. Intégration & Développement',
    },
    {
      value: '5-content-media',
      label: '5. Contenu & médias',
    },
    {
      value: '6-tests-validation',
      label: '6. Tests & validation',
    },
    {
      value: '7-deployment',
      label: '7. Mise en ligne',
    },
    {
      value: '8-maintenance',
      label: '8. Maintenance / Usage / Contribution',
    },
    {
      value: '9-end-of-life',
      label: '9. Fin de vie',
    },
    {
      value: 'tbd',
      label: "<< TBD (éviter de l'utiliser) >>",
    }
  ],
};
const scopeOptions = [
        {
          value: 'cache',
          label: 'Cache',
        },
        {
          value: 'documents',
          label: 'Documents',
        },
        {
          value: 'features',
          label: 'Fonctionnalités',
        },
        {
          value: 'images',
          label: 'Images',
        },
        {
          value: 'front-office',
          label: 'Front-office',
        },
        {
          value: 'hosting',
          label: 'Hébergement',
        },
        {
          value: 'performance',
          label: 'Performance',
        },
        {
          value: 'security',
          label: 'Sécurité',
        },
        {
          value: 'seo',
          label: 'SEO',
        },
        {
          value: 'storage',
          label: 'Stockage',
        },
        {
          value: 'themes',
          label: 'Thèmes',
        },
        {
          value: 'videos-sounds',
          label: 'Vidéos/Audios',
        },
        {
          value: 'tbd',
          label: "<< TBD (éviter de l'utiliser) >>",
        },
      ]


const saved_resourcesOptions = [{
          value: 'cpu',
          label: 'Processeur',
        },
        {
          value: 'ram',
          label: 'Mémoire vive',
        },
        {
          value: 'storage',
          label: 'Stockage',
        },
        {
          value: 'network',
          label: 'Réseau',
        },
        {
          value: 'requests',
          label: 'Requêtes',
        },
        {
          value: 'e-waste',
          label: 'Déchets électroniques',
        },
        {
          value: 'electricity',
          label: 'Consommation électrique',
        },
        {
          value: 'ghg',
          label: 'Émissions de gaz à effet de serre',
        },
        {
          value: 'tbd',
          label: "<< TBD (éviter de l'utiliser) >>",
        },
      ]
export { lifecycleOptions, scopeOptions, saved_resourcesOptions };
