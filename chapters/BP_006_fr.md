## Privilégier une approche "mobile first", à défaut RESS

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   6   | 7  | 6  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Conseillé         | Difficile                 | Fort                  | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|Processeur / Réseau  |

### Description

Lorsque le contexte le permet, privilégier l’approche « mobile first » qui consiste à concevoir un site/service en ligne
pour les terminaux mobiles.
Et n’élargir sa couverture fonctionnelle pour de plus grands écrans que si l’apport fonctionnel/ergonomique est justifié.
Dans ce cas, opter alors pour l’architecture Responsive Design + Server Side Components (RESS). Cette architecture reprend
les principes RWD (adaptation automatique de l’interface au contexte d’utilisation) mais sélectionne côté serveur les ressources
qui seront envoyées au terminal. On s’assure ainsi de ne pas consommer inutilement de la bande passante, 
ni de trop solliciter le processeur et la mémoire du terminal pour des traitements inutiles. 
Il s’agit de pousser à l’extrême la bonne pratique qui consiste à fournir du code spécifique à un navigateur en particulier.

Parmi les solutions clés en main, RESS.io automatise la mise en œuvre de bonnes pratiques responsive orientées efficience, 
comme servir des images redimensionnées pour les petits écrans, compresser automatiquement (en gzip) les pages et les 
ressources CSS et JavaScript en sortie de serveur HTTP, fusionner les feuilles de styles, etc.

### Exemple

La mise en place d’une architecture RESS plutôt qu’une approche responsive design standard (RWD) peut aller jusqu’à diviser par 4
la bande passante consommée, pour de meilleurs temps de réponse. Plus la taille de l’écran est petite, plus l’approche RESS sera intéressante.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de conception ne s'appuyant pas sur une approche"mobile first"  |  1 |
