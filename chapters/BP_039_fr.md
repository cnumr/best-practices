## Eviter les animations Javascript / CSS

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   810   | 48  | 39  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| 5       |    5                 |  5                 | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur / Mémoire vive  |

### Description

Les animations Javascript/CSS peuvent être très coûteuses en termes de cycles CPU et de consommation mémoire. 
Elles déclenchent toutes une action de type (re)paint/(re)ﬂow très coûteuse en ressources. Il faut donc éviter au maximum les animations, et ne les utiliser que lorsqu’elles sont indispensables.

Si vous ne pouvez vous passer d’une animation, limitez-vous aux propriétés CSS3 `opacity` et `transform`, et aux fonctions associées `translate`, `rotate`, `scale` de `transform`. Ces deux propriétés sont automatiquement optimisées par le navigateur, et l’animation peut être prise en charge par le processeur graphique (GPU). Le site [www.csstriggers.com](https://csstriggers.com/) liste les actions sur le DOM déclenchées par une animation.

Pour que le navigateur puisse réduire au minimum les ressources consommées par l’animation, vous pouvez le prévenir qu’une animation va avoir lieu grâce à l'instruction `will-change`.

Pour en savoir plus :
https://web.dev/animations-guide/

### Exemple

```css
.box {
    will-change: transform, opacity;
}
```
### Solution alternative

Vous pouvez aussi laissez le choix à vos utilisateurs, via les préférences de leurs navigateurs et la media query `prefers-reduced-motion`, de jouer ou non l'animation. L'animation est jouée seulement si l'utilisateur n'a pas défini de préférence.

```css
@media (prefers-reduced-motion : no-preference ) {
  .animation {
    animation: pulse 1s linear infinite;
  }
}
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| d'animations JS / CSS par page / URLs  |  3 |
