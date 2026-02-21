<p align="center">
  <a href="https://collectif.greenit.fr/">
    <img align="center" alt="CNUMR" src="./assets/logo-cnumr.png" width="160" />
  </a> 
    <img align="center" alt="Association Green IT" src="./assets/logo-asso.png" width="200" />
</p>

# Les bonnes pratiques d'écoconception pour WordPress

**Accéder au site(Work in progress)**

| Version   | Date     |
| :-------- | :------- |
| version 1 | oct 2022 |

## Pourquoi ce projet en plus des [115 bonnes pratiques web](https://github.com/cnumr/best-practices) ?

**WordPress alimente plus d'un tier du web, 43% en octobre 2022 !**

Pourquoi ? Simple d'installation avec de nombreux ajouts (extensions) possibles et une grande personnalisation sans pour autant avoir strictement besoin de connaître le fonctionnement d'un serveur ou celui d'une base de données ou même les bases du `Html` et du `CSS` en font ses points forts.

Même pour les professionnels du web, WordPress représente un gain de temps important de développement, une maintenance facile, une prise en main rapide pour le client avec une grande autonomie pour un budget moindre qu'un développement sur-mesure.

Malheureusement, WordPress a aussi ses points noirs voulant être une solution qui répond aux besoins de tous. Il peut rapidement devenir obèse avec un impact environnemental important où une vigilance particulière et adaptée à ce CMS en termes d'écoconception, que nous vous proposons via ce référentiel, doit lui être portée pour réduire au mieux son emprunte environnementale.

_Source : [W3Techs](https://w3techs.com/technologies/history_overview/content_management/all)_

## À qui s'adressent les Bonnes Pratiques (BP) WordPress ?

Nous avons conçu ces BP en ayant les différents profils d'utilisateur, en ce sens ce référentiel s'adresse aussi bien à **Madame et Monsieur tout le monde qu'aux designers ou développeuses et développeurs**. Pour ce faire, sur certaines BP vous trouverez différents niveaux de solutions proposées en fonction de votre appétence pour le code.

## Comment contribuer ?

Nous avons besoin de vous ! Ce référentiel doit vivre et suivre l'évolution du web et de WordPress en particulier. Toute proposition ou idée d'ajout, d'amélioration, de modification ou de suppression (BP, lexique, site et organisation) est la bienvenue. **Pour ce faire, n'hésitez pas à lire [le guide des contributeurs](CONTRIBUTING.md).**

Nous remercions chaleureusement l'ensemble des contributrices et contributeurs qui ont participé à la mise au point de ce référentiel pour Wordpress et le font évoluer.

## Explication des branches du repos

- `main`: Branche principale des fiches (Release) ;
- `develop`: Branche des fiches à valider (develop-fiche dans le diagramme) ;
- `site-gatsby-generator`: Branche principale du site en Gatsby (Release) ;
- `develop-site-gatsby`: Branch du site à valider ;
- `feat/*`: Convention de nommage de branche pour les évolutions de fiches ;
- `feat-site/*`: Convention de nommage de branche pour les évolutions du site.

```mermaid
  gitGraph
       commit id: "init"
       commit id: "create branches" type:HIGHLIGHT
       branch develop-fiche
       branch site-gatsby-generator

       checkout develop-fiche
       commit id: "change fiche 1"
       commit id: "change fiche 2"
       checkout site-gatsby-generator
       commit id: "Init Gatsby" tag:"v0" type:HIGHLIGHT
       branch develop-site-gatsby
       commit
       checkout develop-site-gatsby
       commit
       commit
       checkout site-gatsby-generator
       merge develop-site-gatsby tag:"Site Release-1"
       checkout main
       merge develop-fiche tag:"Fiches Release-1"
       checkout site-gatsby-generator
       merge main
       checkout develop-fiche
       commit id: "change fiche 3"
       commit id: "change fiche 4"
       checkout develop-site-gatsby
       commit
       commit
       commit
       checkout site-gatsby-generator
       merge develop-site-gatsby tag:"Site Release-2"
       checkout main
       merge develop-fiche tag:"Fiches Release-2"
       checkout site-gatsby-generator
       merge main
       checkout develop-fiche
       commit id: "change fiche 5"
       commit id: "change fiche 6"
       checkout develop-fiche
       commit id: "change fiche 7"
       checkout main
       merge develop-fiche tag:"Fiches Release-3"
       checkout site-gatsby-generator
       merge main
       checkout develop-site-gatsby
       commit
       commit
       checkout site-gatsby-generator
       merge develop-site-gatsby tag:"Site Release-3"
       checkout develop-fiche
       commit id: "change fiche n"
       #merge main
```

## Licence

L'ensemble du référentiel : titre, fiche, règle de test, seuil de conformité et taxonomie des bonnes pratiques pour WordPress sont publiés [sous licence Creative Commons BY-NC-ND](LICENSE.md). Cela signifie que vous pouvez l'utiliser librement pour des utilisations non commerciales, à la condition de maintenir la paternité du contenu, via un lien vers https://collectif.greenit.fr/ et https://www.ecoconceptionweb.com/.
