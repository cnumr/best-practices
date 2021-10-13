## Favoriser les polices standards
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |   facile                  |  Fort                 | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|    |

### Règle
Péférer les polices standards, car elles sont déjà présentes sur l’ordina- teur de l’internaute, qui n’a donc pas besoin de les télécharger. On éco- nomise ainsi de la bande passante, tout en accélérant l’affichage du site.

### Exemple
Dans la mesure du possible, privilégier des polices de caractères comme :
 - Courier New ;
 - Georgia ;
 - Arial ;
 - Comic ;
 - Impact ;
 - Tahoma ;
 - Trebuchet MS ;
 - Times New Roman ;
 - Verdana ;
 - Segoe UI.

Pour aller plus loin :
http://en.wikipedia.org/wiki/List_of_typefaces_included_with_ Mac_OS_X
www.awayback.com/revised-font-stack

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
