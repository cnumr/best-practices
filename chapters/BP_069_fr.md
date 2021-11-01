## Ne pas appeler de fonction dans la déclaration d’une boucle de type for

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   50   | 64  | 69  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |  Facile                   |    Fort               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur  |

### Description

Ne pas appeler de fonction dans la déclaration d’une boucle de type `for`, afin d’éviter que la fonction ne soit appelée à chaque itération de la boucle.

### Exemple

Ne pas écrire :
```php
for ($i = 0; $i < count($array); $i++) {}
```
mais plutôt :
```php
$count = count($array);
for ($i = 0; $i < $count; $i++) {}
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de fonctions appelées au sein de la déclaration d'une boucle for  | 0  |
