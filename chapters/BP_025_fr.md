## Grouper les déclarations CSS similaires

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   14   | 28  | 25  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |   facile                  |  Fort                 | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|    |

### Description

Lorsque plusieurs éléments du DOM (Document Object Model) ont des propriétés CSS communes,
les déclarer ensemble dans la même feuille de styles. Cette méthode permet de réduire le poids de la CSS.

### Exemple


Ne pas écrire :
```css
h1 {
background-color: gray; color: navy;
}

h2 {
background-color: gray; color: navy;
}

h3 {
background-color: gray; color: navy;
}
```

mais plutôt :
```css
h1, h2, h3 {
background-color: gray; color: navy;
}
```

Si vous souhaitez vous assurer que cette règle est bien respectée, vous pouvez mettre en place le module [stylelint](https://stylelint.io/) 
dans votre projet (`devDependencies`) et utiliser la règle `shorthand-property-no-redundant-values`

Vous trouverez la liste complète de ces propriétés raccourcies sur le site [MDN](https://developer.mozilla.org/fr/docs/Web/CSS/Propri%C3%A9t%C3%A9s_raccourcies)

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|  de déclaration CSS similaires non regroupées | 1  |
