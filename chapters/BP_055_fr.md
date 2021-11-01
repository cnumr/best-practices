## Privilégier les changements visuels instantanés

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   36   | 47  | 55  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Conseillé         |  Standard                 | Fort                  | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur |

### Description

Les animations, qu’elles soient réalisées en CSS ou pilotées par Javascript, génèrent beaucoup de repaint/reﬂow. Pour moins consommer de cycles CPU, il est donc préférable d’utiliser des changements instantanés plutôt qu’animés.

### Exemple

Éviter les effets JavaScript de fade in/fade out dans les sliders. Ne pas écrire :
```html
<script>
// Notation jQuery
$('a').click(function () {
    $('#foo').fadeIn();
});
</script>
```

mais plutôt :
```html
<script>
// Notation jQuery
$('a').click(function () {
    $('#foo').show();
});
</script>
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| d'effets d'animation (fadeIn, fadeOut, slideUp, slideDown, animate) dans la page  |  1 |
