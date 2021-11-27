## Favoriser les polices standards

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   19   | 17  | 29  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  5      |   5                  |  5                 | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Stockage / Réseau / Requêtes  |

### Description

Péférer les polices standards, car elles sont déjà présentes sur l’ordinateur de l’utilisateur, qui n’a donc pas besoin de les télécharger. 
On économise ainsi de la bande passante, tout en accélérant l’affichage du site. Ces polices standarts sont listées sur [https://systemfontstack.com/](https://systemfontstack.com/), par exemple.

Cependant si vous avez besoin d'une police particulière pour votre service numérique, même si c'est une google font ou adobe font :
- Héberger vous-même la font
- Utiliser un faux-gras via la propriété css ```-webkit-text-stroke``` si possible
- Préférer une variable font si vous avez besoin de plus d'une font d'une police (ex: regular, bold, etc.)
- Optimiser la font en l'allégeant des caractères non nécessaires (exemple: un site en français n'a besoin que de caractères latin, l'alphabet cyrillique peut être supprimé)

Si vous avez des pictogrammes ou illustrations monochromes (voir la bonne pratique : Préférez les glyphes aux images) et si les droits d'utilisations de la font le permettent, incorporer les nouveaux glyphes directement dans la font.

### Exemple




#### Alternatives

Vos utilisateurs peuvent faire le choix, via les préférence de leurs navigateurs, de demander aux sites web qu'ils visitent d'optimiser les requêtes réseau réalisées. Grâce à cette possibilité et à une media queries de ne télécharger la font que pour les utilisateurs la souhaitant.

Dans l'exemple ci-dessous, nous ne téléchargeons que la font `Montserrat` si et seulement si l'utilisateur n'a pas définir de préférence. Si ce n'est pas le cas, la font ne sera pas téléchargée, et la font `Arial` sera utilisée.

```css
@media (prefers-reduced-data: no-preference) {
    @font-face {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 400;
        src:  url('fonts/montserrat-regular.woff2');
    }
}

body {
  font-family: Montserrat, Arial;
}
```

Nous pouvons par exemple ce principe pour :
* charger une image optimisée
* désactiver le chargement dynamique automatiue d'une liste de donnes

Pour plus d'informations sur la media query `prefers-reduced-data`, vous pouvew l'article dédié sur le site [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data)

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de polices téléchargées  | 2  |
