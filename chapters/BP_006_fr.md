## Privilégier une approche "mobile first", à défaut un chargement adaptatif

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   6   | 7  | 6  |      |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 2. Conception | Utilisateur/Terminal | PO/AMOA |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 4 | 5 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|Processeur / Réseau  |

### Description

Lorsque le contexte le permet, privilégier l’approche « mobile first » qui consiste à concevoir un site/service en ligne
pour les terminaux mobiles,
et n’élargir sa couverture fonctionnelle pour de plus grands écrans que si l’apport fonctionnel/ergonomique est justifié.
Dans ce cas, opter alors pour le chargement adaptatif.
Cette approche consiste à sélectionner les ressources, y compris JS et CSS, les plus adaptées au contexte d'utilisation (taille de l'écran / de la fenêtre, densité de pixels, qualité du réseau, quantité de mémoire vive, etc.), si possible côté serveur.
On s’assure ainsi de ne pas consommer inutilement de la bande passante, 
ni de trop solliciter le processeur et la mémoire du terminal pour des traitements inutiles.

### Exemple

Côté serveur, on pourra utiliser les _client hints_, ou à défaut l'identifiant du navigateur couplé à un tableau de capacités des navigateurs (aussi appelé _user agent sniffing_, avec ses limitations).

Côté client, les _media queries_ (notamment dans les attributs `media` des `<link>` pour la sélection de feuilles de styles CSS), les attributs `srcset` et `sizes` des `<img>`, les sous-éléments `<source>` des `<picture>`, `<video>` et `<audio>` pourront être utiles, et les mêmes informations disponibles dans les _client hints_ peuvent également être récupérées par des APIs JavaScript pour éventuellement charger du code et/ou du contenu complémentaire dynamiquement.

Dans tous les cas, priviligiez un mode par défaut minimaliste permettant l'accès à votre site même si toutes ses fonctionnalités ne sont pas supportées par tous les navigateurs (sans trop détériorer l'expérience utilisateur bien sûr!).

## Sources

* https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/client-hints
* https://developers.google.com/web/updates/2015/09/automating-resource-selection-with-client-hints

### Validation rule

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de conception ne s'appuyant pas sur une approche "mobile first"  |  1 |
