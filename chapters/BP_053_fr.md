## Éviter les boucles for...in

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   29   | 41  | 53  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Conseillé         |  Standard                 | Moyen                 | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur |

### Règle

La boucle `for…in` est plus sophistiquée que la boucle `for` basique, car elle dédoublonne les éléments d’une liste avant de commencer l’énumération. Aussi est-il généralement plus économe d’utiliser une boucle for simple lorsqu’on maîtrise bien la collection

### Exemple

Dans la boucle suivante, le for…in est mal utilisé :
```javascript
var oSum = 0;
for( var i in oArray ) {
    oSum += oArray[i];
}
```
Préférer plutôt :
```javascript
var oSum = 0;
var oLength = oArray.length;
for( var i = 0; i < oLength; i++ ) {
    oSum += oArray[i];
}
```
### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| d'utilisations de boucles foreach, for ...in lorsque l'utilisation d'une boucle for simple est possible  | 0  |
