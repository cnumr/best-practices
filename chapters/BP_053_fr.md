## Éviter les boucles for...in en JavaScript

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   29   | 41  | 53  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| 2/5         |  5/5                 | 2/5                 | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur/Mémoire vive |

### Description

En javascript, la boucle `for…in` dédoublonne les éléments d’une liste avant de commencer l’énumération. Aussi est-il généralement plus économe d’utiliser une boucle  for..of ou foreach

### Exemple

Eviter :
```javascript

for( const i in oArray ) {
    // do some processing
}
```
Préférer plutôt :
```javascript

for( const i of oArray ) {
     // do some processing
}
```

Ou encore :

```javascript

oArray.forEach(i => 
// do some processing 
);
```


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| d'utilisations de boucles  for ...in lorsque l'utilisation d'autres types de boucles est possible   | 0  |
