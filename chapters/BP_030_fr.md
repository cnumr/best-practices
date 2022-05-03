## Préférer les glyphs aux images

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  20    |  18 | 30  |      |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 3. Réalisation (fabrication / développement) | Réseau | UX/UI Designer |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Stockage / Réseau / Requêtes  |

### Description

 Les glyphes sont des caractères typographiques spécifiques, inclus dans les polices de caractères comme celles d'un système d'exploitation, utilisables en remplacement d'images monochromes telles que des symboles ou pictogrammes (chevron, triangle, point, carré, signes astrologiques, etc.) jusqu'aux illustrations permettant :
- de réduire la bande passante en économisant sur le poids
- de réduire le nombre de requêtes
- de réduire la complexité du DOM, notamment avec de nombreux pictogrammes SVG

### Exemple

Pour optimiser une landing page comprenant visuellement :

![Exemple de police créée via Font Forge pour illustrer une landing page](https://github.com/florinesueur/images/blob/main/vue-font-forge.svg)
*Extrait d'une font crée via Font Forge*

Un gain de 91% du poids a été réalisé en incluant pictogrammes et illustrations vectorielles dans une icon font via [Font Forge](https://fontforge.org/en-US/).

Pour aller plus loin : [https://coding.smashingmagazine.com/2011/03/19/styling-elements-with-glyphs-sprites-and-pseudo-elements](https://coding.smashingmagazine.com/2011/03/19/styling-elements-with-glyphs-sprites-and-pseudo-elements)

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| d'images qui auraient pu être remplacées par un glyphe (symbole de police de caractère)  | 0  |
