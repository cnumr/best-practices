## Utiliser le chargement paresseux des images

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   1010   |   |  37 |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Conseillé        |   Standard                |  Fort                 | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|    |

### Règle

Lorsqu’un internaute ne consulte pas la totalité d’une page web, toutes les images situées en dehors de la zone visitée ont été chargées inutilement. 
La technique du chargement paresseux (lazy loading) consiste à ne charger une image que lorsque son emplacement devient visible à l’écran.
Elle nécessite de programmer le mécanisme en JavaScript ou d’utiliser une bibliothèque comme jQuery « appear » pour détecter l’apparition à l’écran de la zone de l’image.
À terme, le navigateur Chrome de Google devrait faire du lazy loading automatiquement. Mais on pourra le « forcer » ou le désactiver sur chaque image ou iframe.

### Exemple

L’image originale n’est pas chargée par le DOM car elle est remplacée par un pixel transparent dont le poids est très faible. Son URL est néanmoins stockée dans l’attribut data-src pour permettre à JavaScript de la charger le moment opportun, c’est-à-dire dès que l’emplacement de l’image apparaîtra à l’écran. Détecter l’apparition de l’emplacement de l’image peut être réalisé grâce à la librairie jQuery « Appear ».

```html
<img data-src="image.jpg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUg AAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASs
JTYQAAAAASUVORK5CYII=" alt="logo green IT" />
<noscript><img src="image.jpg" alt="logo green IT"/></noscript>
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| d'images appelées sans lazy loading  |  10% |
