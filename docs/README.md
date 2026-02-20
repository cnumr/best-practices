---
label: Home
icon: home
order: 100
---

# GenRefs, le générateur de site référentiels par Green IT.

## Objectifs et contraintes

Les référentiels Green IT sont hébergés depuis 2021 sur GitHub :icon-mark-github: pour laisser l'accès libre à nos travaux. GitHub, basé sur Git ajoute la possibilité de tracer les versions :icon-versions:, les contributeurs :icon-people:... et aussi de discuter :icon-comment-discussion: sur chaques bonnes pratiques, permettant le débat et ainsi avoir une trace des échanges qui ont aboutis à un concensus.

Le format Markdown :icon-markdown:, simple, open-source et universel, est utilisé pour permettre d'avoir une bonne lisibilité des contenus structurés grâce à une mise en page, permise par le langage et bien rendu par GitHub. Mais cela reste un support de "nerds" :)

Lors de la création du [Référentiel d'écoconception pour WordPress](https://rwp.greenit.fr), nous avons décider, pour faciliter l'accès à la connaissance sur l'écoconception, de faire, en plus de ces documents Markdown, un site web plus lisible encore, et surtout utilisable pour "Monsieur et Madame tout le monde", qui est une des cibles de ce référentiel.

### En résumer

- **Objectifs**
  - Être sur GitHub :icon-mark-github: pour tracer les versions et profiter des facilités offertes ;
  - Rendre accessible la connaissance au plus grand nombre => Pas que du Markdown :icon-markdown: et pas que dans un repo ;
  - Rendre la contribution simple au moins technique => Avoir un CMS ;
  - Pouvoir multiplier les sites de référentiels "simplement".
- **Contraintes**
  - Utiliser une base de fichier Markdown :icon-markdown: => Ne pas utiliser une base de données classique, donc pas un CMS classique, mais un `git-cms` ;
  - Heberger les contenus sur GitHub :icon-mark-github: et qu'ils restent lisible.

### Conclusion

Après plusieurs évaluations de solutions et plusieurs versions, nous avons abouti à une "stack" qui répond à nos besoins et contraintes :

- **Framework** : Next.js 14 avec App Router
- **CMS** : TinaCMS (headless, basé sur Git)
- **Contenu** : Fichiers MDX stockés sur GitHub
- **Hébergement** : Vercel (déploiement automatique)
- **Base de données** : MongoDB Atlas (pour l'indexation TinaCMS)

[!ref text="Voir la documentation technique"](./developpement.md)
[!ref text="Guide d'installation"](./installation.md)

[!ref text="Guide de synchronisation"](./synchronisation.md)
