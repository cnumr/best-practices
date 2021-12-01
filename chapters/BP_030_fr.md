## Préférer les glyphs aux images

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  20    |  18 | 30  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|:-------------------:|:-------------------------:|:---------------------:|
|  4        |   5                  |  4                 | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Stockage / Réseau / Requêtes  |

### Description

 Les glyphes sont des caractères typographiques spécifiques, inclus dans les polices de caractères comme celles d'un système d'exploitation, utilisables en remplacement d'image monochrome tel que des symboles ou pictogrammes (chevron, triangle, point, carré, signes astrologiques, etc.) jusqu'à l'illustration permettant :
- de reduire la bande passante en éconimisant sur le poids
- de réduire le nombre de requêtes
- de réduire la complexité du DOM, notamment avec de nombreux pictogrammes SVG

### Exemple

Pour optimiser une landing page comprenant visuellement :

![Capture d'écran](https://github.com/florinesueur/images/blob/main/illu-font.png)
![Capture d'écran](https://github.com/florinesueur/images/blob/main/illu-font-2.png)

Un gain de 91% du poids a été réalisé en incluant pictogrammes et illustrations vectorielles dans une icon font via [Font Forge](https://fontforge.org/en-US/).

Pour aller plus loin : [http://coding.smashingmagazine.com/2011/03/19/styling-elements-with-glyphs-sprites-and-pseudo-elements](http://coding.smashingmagazine.com/2011/03/19/styling-elements-with-glyphs-sprites-and-pseudo-elements)

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| d'images qui auraient pu être remplacées par un glyphe (symbole de police de caractère)  | 0  |
