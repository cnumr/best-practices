## Optimiser les images bitmap
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |  Facile                   |    Fort               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Réseau / Requêtes /  Stockage |

### Règle
Les images bitmap représentent souvent la majorité des octets télé- chargés, juste avant les bibliothèques CSS et JavaScript. Leur optimi- sation est donc cruciale pour réduire la bande passante consommée. La première étape consiste à choisir le bon format entre bitmap (JPEG, PNG, GIF, etc.) et vectorielle (SVG).

Les images matricielles doivent être réservées essentiellement aux photos et aux éléments de l’interface qui ne peuvent pas être pris en charge par des icônes ou des styles CSS.

Le choix du format bitmap dépend des caractéristiques de l’image : noir et blanc ou couleur, palette de couleurs, besoin de transparence… Parmi ces caractéristiques, le fait de pouvoir dégrader l’image définiti- vement (lossy) oriente plutôt vers les formats JPEG et WebP (Google), tandis qu’un besoin de transparence et/ou l’impossibilité de dégrader l’image (lossless) orientera plutôt vers GIF ou PNG.

Des outils tels que pngcrush, ImageMagick ou jpegtran vous aideront à réduire au minimum le poids des images matricielles.

### Exemple
Gain potentiel : 25 % de gain au minimum en jouant sur la palette de couleurs et le taux de compression, et jusqu’à plus de 80 % par rapport à une image matricielle non compressée. En moyenne, 30 % de poids en moins (par rapport à `JPEG`) avec `WebP`.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| d'images bitmap non compressées de façon idéale  | 0  |
