## Privilégier les variables locales

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  37    | 37  | 50  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       |  Facile                   | Moyen                 | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur |

### Description

En JavaScript, lorsqu’on fait appel à une variable globale, le moteur d’interprétation doit vérifier :
 - qu’elle existe dans le scope actuel, dans celui du dessus, etc. ;
 - que la variable dispose d’une valeur ;
 - …

Pour éviter toutes ces vérifications, il est souvent envisageable de passer les variables utiles en arguments des routines, les rendant locales. Ce procédé permet ainsi d’économiser du temps de calcul (cycles CPU).

### Exemple

Ne pas écrire :
```javascript
var aGlobal = new String('Hello Dolly'); 
function globalLength() {
    length = aGlobal.length;
    console.log(length);
}
globalLength();
```

mais plutôt :
```javascript
var aGlobal = new String('Hello Dolly');
function someVarLength(str) { 
    length = str.length;
    console.log(length);
}
someVarLength(aGlobal);
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|  de variables déclarées dans l'espace globale | 0  |
