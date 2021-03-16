## Favoriser les polices standards

### Alternatives

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