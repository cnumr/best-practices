## Eviter les animations Javascript / CSS coûteuses
### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|---------|:----:|:----:|:----:|
|      |   |   |  x   |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       |    Facile                 |  Fort                 | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur / Mémoire vive  |

### Règle

Les animations Javascript/CSS peuvent être très coûteuses en termes de cycles CPU et de consommation mémoire. Elles déclenchent toutes une action de type (re)paint/(re)ﬂow très coûteuse en res- sources. Il faut donc éviter au maximum les animations, et ne les utiliser que lorsqu’elles sont indispensables.

Si vous ne pouvez vous passer d’une animation, limitez-vous aux proprié- tés CSS3 opacity et transform, et aux fonctions associées translate, rotate, scale de transform. Ces deux propriétés sont automatique- ment optimisées par le navigateur, et l’animation peut être prise en charge par le processeur graphique (GPU). Le site www.csstriggers.com liste les actions sur le DOM déclenchées par une animation.

Pour que le navigateur puisse réduire au minimum les ressources consommées par l’animation, vous pouvez le prévenir qu’une ani- mation va avoir lieu grâce à will-change.

### Exemple

L’instruction will-change permet de prévenir le navigateur qu’une animation qu’il est en mesure d’optimiser va être déclenchée. Utilisée à bon escient, cette approche réduit la consommation de ressources.
```css
.box {
    will-change: transform, opacity;
}
```

Pour en savoir plus :
http://www.html5rocks.com/en/tutorials/speed/high-performance- animations/

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| d'animations JS / CSS par page / URLs  |  3 |
