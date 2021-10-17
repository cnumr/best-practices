## Ne pas faire de modification du DOM lorsqu’on le traverse

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  43    | 43  | 41  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       |  Standard                 |  Fort                 | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur  |

### Règle

Modifier le DOM (Document Object Model) lorsqu’on le traverse peut engendrer des situations où la boucle devient très gourmande en ressources, notamment en cycles CPU. En effet, si on y ajoute des éléments en le traversant, il est possible de générer une boucle infinie qui consommera une grande quantité de ressources. Ce genre de modification est donc fortement déconseillée.

### Exemple

Éviter :
```html
<script>
    // Notation jQuery
    $('a.extlink').each(function(el) {
        $(el).attr('rel','external nofollow');
    });
</script>
```


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| d'insertions dans le DOM réalisées lorsque cette même partie du DOM est traversé par un code JavaScript  | 0  |
