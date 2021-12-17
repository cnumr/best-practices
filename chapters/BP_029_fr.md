## Favoriser les polices standards

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   19   | 17  | 29  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Stockage / Réseau / Requêtes  |

### Description

Péférer les polices standards, car elles sont déjà présentes sur l’ordinateur de l’utilisateur, qui n’a donc pas besoin de les télécharger. 
On économise ainsi de la bande passante, tout en accélérant l’affichage du site. Ces polices standards sont listées sur [https://systemfontstack.com/](https://systemfontstack.com/), par exemple.

Cependant si vous avez besoin d'une police particulière pour votre service numérique, même si c'est une Api font (google font, adobe font, etc.), vous devez :
- Héberger vous-même la font
- Utiliser un faux-gras via la propriété css ```-webkit-text-stroke``` si possible
- Préférer une variable font si vous avez besoin de plus d'une font d'une police (ex: regular, bold, etc.)
- Optimiser la font en l'allégeant des caractères non nécessaires (exemple: un site en français n'a besoin que de caractères latins, l'alphabet cyrillique peut donc être supprimé)

Si vous avez des pictogrammes ou illustrations monochromes (voir la bonne pratique : Préférez les glyphes aux images) et si les droits d'utilisations de la font le permettent, incorporer les nouveaux glyphes directement dans la font.

### Exemple

Voici un tableau comparatif de poids des fonts de la police Oswald :
| | Regular  | Regular + bold         | Variable | Latin Regular |  Latin Regular + Latin Bold |  Latin Variable |
|---:| :---------------: |:---------------:|:------------:| :-----:| :-----:| :-----:|
|Poids|37.6kb|76.9kb|66kb|16kb|32.5kb| ?

### Solution Alternative

Vos utilisateurs peuvent faire le choix, via les préférences de leurs navigateurs, de demander aux sites web, utilisant le media query `prefers-reduced-data` qu'ils visitent d'optimiser les requêtes réseau réalisées.

Dans l'exemple ci-dessous, nous ne téléchargeons que la font `Montserrat` si et seulement si l'utilisateur n'a pas défini de préférence. A contrario, la font `Arial` sera utilisée sans téléchargement de la `Montserrat`.

```css
@media (prefers-reduced-data: no-preference) {
    @font-face {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 400;
        src:  url('fonts/montserrat-latin-regular.woff2');
    }
}

body {
  font-family: Montserrat, Arial;
}
```

Pour plus d'informations sur la media query `prefers-reduced-data`: [https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data)

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de polices téléchargées  | 2  |
