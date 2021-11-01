## Générer des spritesheets CSS

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  18    | 23  | 20  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|   Conseillé       |   Difficile               |  Fort                 | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|    |

### Description

Regrouper les images de petite taille (celles de l’interface du site, par exemple) dans une seule image de plus grande taille appelée spritesheet.

Ce procédé réduit significativement le nombre de requêtes HTTP. De nombreux services en ligne gratuits (CSS Sprite Generator du Project Fondue, CSSsprites.com, SpriteMe.org…)
permettent de générer ces spritesheets.

### Exemple

Voici quelques adresses de générateurs de sprites :
 - http://csssprites.com
 - http://spritegen.website-performance.org
 - http://csssprites.org
 - http://draeton.github.com/stitches

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|  d'images de l'interface non regroupées dans un sprite | 2  |
