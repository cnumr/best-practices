## Optimiser les images

### Identifiants
| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  21     | 76   |  80  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Réseau / Requêtes /  Stockage |

### Description
Les images représentent souvent la majorité des octets téléchargés, après les vidéos et juste avant les bibliothèques CSS et JavaScript.
Leur optimisation est donc cruciale pour réduire la bande passante consommée. La première étape consiste à choisir le format idéal
à vos besoins d'affichage. 

Les images matricielles doivent être réservées essentiellement aux photos et aux éléments de l’interface qui ne peuvent 
pas être pris en charge par des icônes ou des styles CSS.

Le choix du format dépend des caractéristiques de l’image : noir et blanc ou couleur, palette de couleurs, 
besoin de transparence… Parmi ces caractéristiques, le fait de pouvoir dégrader l’image définitivement (lossy) oriente 
plutôt vers les formats `JPEG`, `JPEG XL`, `AVIF` ou `WebP`, tandis qu’un besoin de transparence et/ou l’impossibilité de dégrader 
l’image (lossless) orientera plutôt vers un format `PNG` ou `WebP lossless` (qui supporte la transparence).

Le poids des images est beaucoup impacté par le format que vous allez choisir : en moyenne, une image `.webp` sera 30% plus légère
qu'une image `.jpeg` ou qu'une image `.png`. Une image `.avif` sera jusqu'à 20% plus légère qu'une image `.webp` et 50% plus légère 
qu'une image `.jepg`.

N'oubliez pas de faire attention à la prise en charge de ces formats d'image sur les navigateurs. Une image `.webp`
ne sera pas reconnu par un navigateur ancien, et ne s'affichera pas. Pour palier à cette problématique, il est possible de 
fournir au navigateur plusieurs formats pour la même image. 
Certains modules coté serveur (comme le [modPageSpeed](https://www.modpagespeed.com/) de google, disponible pour Apache et Nginx) 
permettent même de fournir l'image idéale en rapport au navigateur appelant le serveur.

De nombreux outils vous aideront à réduire au minimum le poids des images :
 - [SQUOOSH](https://squoosh.app)
 - [CLOUDINARY](https://webspeedtest.cloudinary.com/)
 - [ImageMagick](https://imagemagick.org/)
 - [PngCrush](https://pmt.sourceforge.io/pngcrush/)
 - JpegTran 

### Exemple
Dans cet exemple, l'élement `<picture>` du DOM indique au navigateur qu'il y a deux images : une image `.webp` et une image
`.jpg`, celle par défaut. Le navigateur décidera quelle image télécharger, s'il supporte le format `.webp` il téléchargera l'image 
`image.webp` sinon, il téléchargera l'image `image.jpg`

```html
<picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="..." loading="lazy">
</picture>
```

Pour aller plus loin :
 - https://web.dev/choose-the-right-image-format/
 - https://www.fasterize.com/fr/blog/webp-avif-compresser-images/

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| d'images non optimisées  | 0  |
