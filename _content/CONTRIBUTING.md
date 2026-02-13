# Contribuer au référentiel d'écoconception WordPress

## Qui peut être contributrice ou contributeur ?

Toute personne qui le souhaite dans le but d'améliorer la version actuelle en proposant :

- la suppression de BP (bonnes pratiques) obsolètes, non applicables ou sans effet ;
- la modification de BP existantes pour correction ou amélioration ;
- l'ajout de nouvelles BP issues du terrain ;
- la suppression de définitions dans le lexique obsolètes, non applicables ou sans effet ;
- la modification de définitions dans le lexique pour correction ou amélioration ;
- l'ajout de nouvelles définitions dans le lexique ;
- toute idée pour l'amélioration de ce référentiel ;
- toute idée pour l'amélioration du site ;
- toute idée pour l'amélioration du flux de travail ;
  en respectant les quelques règles et instructions de ce document ou en apportant son avis, expertise, expérience sur les propositions en cours dans [discussion](https://github.com/cnumr/fiches-wordpress-greenit/discussions).

## Règles de bienséance

- Tout le monde a sa place, chacun peut apporter son expérience
- Le respect, la conviviabilité, le partage et la bienveillance sont de mise
- Il n'y a pas de bonne pratique bête ou trop simple

## L'équipe de pilotage

L'équipe de pilotage est constituée de :

- Heluin Renaud
- Dominique Nicolle
- Florine Sueur

Les fonctions de cette équipe sont :

- de s'assurer que les règles et instructions instaurées soient respectées ;
- en cas de désaccord, de trancher une décision par consensus ;
- de résoudre les discussions et d'initier la suite du processus par consensus ;
- de valider les `Pull Request` pour intégration au référentiel et au site par consensus _(via le `merge` de la `PR` -> `develop`)_ ;
- **d'aider tout contributeur en difficulté sur Github**.

## Comment contribuer ?

Pour une meilleure organisation, nous avons établi un workflow identique pour les propositions au niveau :

- des bonnes pratiques
- des définitions du lexique

Nous vous proposons une courte vidéo, encore brouillonne, des manipulations décrite ci-dessous : [https://youtu.be/BPOWY_QCc2g](https://youtu.be/BPOWY_QCc2g)

### 1. Tout commence par une discussion !

Dans l'onglet [discussion](https://github.com/cnumr/fiches-wordpress-greenit/discussions), n'hésitez pas à regarder les discussions déjà ouvertes avant d'en créer une nouvelle, peut-être qu'une autre personne a eu la même idée que vous.

La nouvelle discussion doit :

- avoir un titre explicite,
- être catégorisée (BP, définitions, site, etc.),
- taggée en fonction d'un ajout, d'une modification ou d'une suppression.

Chaque contributrice et contributeur est libre de participer à la discussion et d'indiquer son accord via l'utilisation de "la flèche vers le haut" ou son désaccord, argumenté par un commentaire, avec un pouce vers le bas.

Une proposition avec plusieurs avis positifs fera l'objet d'une étude par l'équipe de pilotage qui prendra une décision par consensus, par commentaire ou réunion si nécessaire, sur les suites à donner.

Trois possibilités :

- la proposition doit être retravaillée, affinée
- la proposition est définitivement rejetée avec justification
- la proposition est validée

Une fois qu'une décision a été émise, un membre de l'équipe de pilotage clôt la discussion `answered` et crée une `issue` attachée à la discussion :

- en indiquant une liste de tâches à effectuer,
- en la taguant,
- en l'associant à la version du référentiel et board project,
- en l'assignant au contributeur ou à une personne de la discussion volontaire pour traiter le sujet ou à un membre de l'équipe de pilotage en charge de ce sujet.

### 2. De l'issue à la Pull Request

Dans l'onglet [Issues](https://github.com/cnumr/fiches-wordpress-greenit/issues), nous vous invitons à trier pour retrouver plus facilement celles qui vous incombent.

Dans celle-ci, nous vous invitons à créer une branche (`create a branch`) en la nommant : `feat/` + nom de l'issue. Sur cette branche, vous pouvez faire vos ajouts, modifications ou suppressions en fonction du sujet de l'issue.

**Pour tout ajout ou modification de BP, veuillez respecter le [template](./CONTRIBUTING/fiches/README.md).**

Lors de la rédaction de votre BP, nous vous recommandons d'utiliser le lexique déjà en place ou de l'augmenter en fonction de vos besoins.

- Pour lier une définition à un mot, utilisez cette écriture : `[[nom du fichier de la définition sans .md|label à afficher]]` (ex: [[a|b]] b sera affiché et pointera vers le fichier du lexique a.md).
- Pour surligner une notion importante, utilisez cette écriture : `==Phrase à surligner==`.

Une fois que vous êtes satisfait de votre proposition et que vous avez coché les tâches, il est nécessaire de faire une `Pull Request` vers `develop` associée à l'issue. Une `Pull Request` peut-être `review` par tous les participants qui souhaitent soumettre des corrections au niveau de l'orthographe, de la syntaxe, de compréhension, de vulgarisation, etc.

**Seul un consensus de l'équipe de pilotage, via un message en commentaire ou réunion si nécessaire, peut merger la `Pull Request` sur `develop`.**

## Comment contribuer avec Git directement ?

Pour ceux qui ne sont pas à l'aise avec Git, voici un petit tour d'horizon où vous trouverez des notions et des mots du patois Git.

> Ceux qui connaissent GIT par cœur n'apprendront rien dans cette partie et peuvent aller directement à la proposition de worflow.

Git est un système de **versionning de code**, c'est-à-dire que comme Word ou autre, on a un historique des modifications du code. Le code chez nous étant le contenu des fiches.

GitHub est un des services permettant la centralisation de ces modifications. Il en existe d'autres comme GitLab, Gitea, etc.

En règle générale, on copie/`clone` (`clone` étant le mot utilisé dans le "langage de GIT") le `repository` sur son ordinateur, on fait ses modifications en local puis on les valide en faisant un `commit` (ce qui crée une version dans notre exemple avec Word) puis on pousse sa modification validée en réalisant un `push` ce qui la met à disposition des autres sur GitHub.

Quand de multiples personnes collaborent, il se peut qu'ils aient modifié les mêmes fichiers, il faut alors fusionner leurs modifications.
On fait une demande d'import de la dernière version du code présent sur GitHub (`git pull origine main`) et à ce moment-là, il y a deux scénarios possibles :

1. Git fait alors une fusion/`merge` des deux versions et ne rencontre aucun conflit qu'il ne sait pas résoudre tout seul.
2. Lors de cette fusion, Git n'arrive pas à résoudre tout seul les conflits, on doit alors faire soi-même le `merge`. Git fusionne les modifications et l'on doit lui indiquer quelle est la bonne version, ligne à ligne. Une fois cela fait, on valide/commit et l'on pousse/`push` sur GitHub.

Une autre notion dans GIT est importante, les `branch`(es).
Il y a une `branch`(e) centrale qui est définie comme la "bonne version", chez nous, la `branch`(e) **main**.

Dans les équipes de développement, on a l'habitude de travailler chacun dans son coin. Chacun crée sa propre `branch`(e) puis quand on a fini, on transfère ces modifications à un responsable qui se charge de valider et fusionner sa branche.
Pour ce faire, on crée une branche dans laquelle on fait toutes ces modifications. On commit et l'on `push` régulièrement et lorsqu'on a fini, on fait une demande de fusion/validation. Ce que l'on appelle un `Pull Request` (PR) sur GitHub ou une `Merge Request` (MR) sur GitLab.
Ainsi le validateur regarde le contenu de la branche, il valide que les modifications sont valides, qu'elles correspondent aux normes par exemple.

- S'il n'est pas satisfait, il commente la PR et vous demande de faire des modifications. Vous faites les modifications demandées, puis nouveau `commit`+`push` et vous lui redemandez de regarder, en commentant la PR déjà ouverte.
- S'il est satisfait, il va réaliser lui-même la fusion de cette branche dans la `branch` **develop**.

### Branches du repo

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
