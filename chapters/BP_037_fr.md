## Utiliser le chargement paresseux

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   1010   |   |  37 |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 4 | 5 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Réseau  |

### Description
Lorsqu’un internaute ne consulte pas la totalité d’une page web, par défaut toutes les ressources (images, vidéos, iframes...)
situées en dehors de la zone visitée, en dessous de la ligne de flottaison, sont chargées inutilement. Pour éviter cela, 
il est possible d'utiliser la technique du chargement paresseux (lazy loading) qui consiste à ne charger un élement que
lorsque son emplacement devient visible à l’écran. 

Il est possible, en HTML5, d'ajouter un attribut `loading` à vos images et à vos iframes pour que le navigateur s'occupe
de ne télécharger que les images qui apparaissent à l'écran. Cependant, cet attribut est très récent : il ne sera
pas pris en compte sur d'anciennes versions de navigateurs. Dans un souci de compatibilité accrue, on pourra néanmoins
utiliser des mini-librairies Javascript, très légères, qui s'occuperont de lazy-loader vos images comme : 
    - [LOZAD](https://cdn.jsdelivr.net/npm/lozad) 1,9 Ko (gzip)
    - [Vanilla-lazyload](https://cdn.jsdelivr.net/npm/vanilla-lazyload/dist/lazyload.min.js) 3,5 Ko (gzip)

### Exemple
Dans cet exemple, l'image et l'iframe seront lazy-loadés automatiquement par le navigateur, si l'image doit apparaitre à
l'écran, elle sera téléchargée et affichée, si elle est en dessous de la ligne de flottaison, elle ne sera pas téléchargée.

```html
<img src="image.jpg" alt="..." loading="lazy">
<iframe src="video-player.html" title="..." loading="lazy"></iframe>
```

Pour aller plus loin :
 - https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading
 - https://web.dev/browser-level-image-lazy-loading/
 - https://web.dev/lazy-loading-video/

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| d'images, d'iframes et de vidéos appelés sans lazy loading, en dessous de la ligne de flottaison  |  0% |
