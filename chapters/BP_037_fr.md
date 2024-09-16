## Utiliser le chargement paresseux

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   1010   |   |  37 |      |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 3. Réalisation (fabrication / développement) | Réseau | UX/UI Designer |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 4 | 5 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Réseau  |

### Description
Lorsqu’un internaute ne consulte pas la totalité d’une page web, toutes les ressources (images, vidéos, iframes…) situées en dehors de la zone visible , en dessous de la ligne de flottaison, sont chargées inutilement. Évitez cela via la technique du chargement paresseux (lazy loading) qui consiste à ne charger un élément que lorsque son emplacement devient visible à l’écran.
En HTML5, il est possible d’ajouter un attribut loading à vos images et à vos iframes pour que le navigateur ne télécharge que les images qui apparaissent à l’écran.

### Exemple
L’image et l’iframe seront chargées automatiquement par le navigateur : si l’image doit apparaître à l’écran, elle sera téléchargée et affichée, mais ne le sera pas si elle est située en dessous de la ligne de flottaison.
<img src="image.jpg" alt="..." loading="lazy">
<iframe src="video-player.html" title="..." loading="lazy"></iframe>


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| Le nombre d’images, d’iframes et de vidéos situés en dessous de la ligne de flottaison et appelés sans lazy loading est égal à |  0 |
