## Mettre en cache les objets souvent accédés en JavaScript

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  33    | 36  | 49  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       |  Facile                   | Moyen                 | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur   |

### Règle

L’accès au DOM (Document Object Model) est coûteux en termes de ressources processeur (cycles CPU). Aussi, lorsque vous utilisez plusieurs fois le même élément du DOM depuis JavaScript, stockez sa référence dans une variable afin de ne pas parcourir à nouveau le DOM pour ce même élément.

### Exemple

Ne pas écrire :
```javascript
document.getElementById('menu').property1 = 'foo'; document.getElementById('menu').property2 = 'bar';
```

mais plutôt :
```javascript
var mmenu = document.getElementById('menu');
menu.property1 = 'foo';
menu.property2 = 'bar'
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de données constantes (ou non volatiles) récupérés à plusieurs reprises sans être mises en cache  | 0  |
