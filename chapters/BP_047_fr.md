## Eviter d'utiliser try-catch-finally

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   30   | 34  | 47  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Non prioritaire   |  Facile                   | Faible                | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur   |

### Description

Dans les parties du code gourmandes en ressources (certaines boucles, constructions de données complexes, etc.), éviter les appels à try…catch…ﬁnally.

En effet, lorsqu’une exception est levée, une variable (l’exception elle-même) est créée dans le bloc catch et détruite à la fin du bloc. La création de cette variable et sa destruction consomment inutilement des cycles CPU et de la mémoire vive. C’est pourquoi il est important de ne pas utiliser cette construction et de lui préférer, autant que possible, un test logique.

### Exemple

Préférer un test logique :
```javascript
var oProperties = ['ﬁrst','second',...,'nth'], i;
try {
    for( i = 0; i < oProperties.length; i++ ) {
        test[oProperties[i]].someproperty = somevalue;
    }
} catch(e) {
    // ...
}
```

Pour aller plus loin :
http://dev.opera.com/articles/view/efficient-javascript/?page=2# trycatch


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de try/catch/finally dans le code qui ne gèrent pas des problématiques exceptionnelles (coupure réseau, ressource indisponible, ...)  | 0  |
