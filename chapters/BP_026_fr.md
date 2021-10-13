## Utiliser les notations CSS abrégées
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |   facile                  |  Fort                 | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|    |

### Règle
Utiliser les notations CSS abrégées pour réduire le poids de la feuille de styles.

### Exemple
Ne pas écrire :
```css
margin-top:1em; margin-right:0; margin-bottom:2em; margin-left:0.5em;
```
mais plutôt :
```css
margin:1em 0 2em 0.5em;
```

Pour aller plus loin :
 - www.w3.org/TR/CSS
 - www.456bereastreet.com/archive/200502/efficient_css_with_shorthand_properties

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de notations CSS non abrégé  |  20% |
