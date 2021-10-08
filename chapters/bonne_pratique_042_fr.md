## Rendre les éléments du DOM invisibles lors de leur modification
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Conseillé        |    Facile                 |   Fort                | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur  |

### Règle
Lorsqu’un élément du DOM (Document Object Model) doit être modifié par plusieurs propriétés, chaque changement de style ou de contenu va générer un repaint ou un reﬂow. Aussi est-il générale- ment plus économe de :
 - rendre l’élément invisible (passer la propriété display à none) (1 reﬂow) ;
 - modifier toutes les propriétés de l’élément et rendre l’élément à nou-veau visible (1 reﬂow).

Soit 2 reﬂow au maximum.

### Exemple
Procéder comme suit :
```javascript
var elem = document.getElementById('foo'); elem.style.display ='none'; // Génère 1 reﬂow elem.style.width	='10em';
elem.style.height ='auto';
// ... autres changements ...
elem.style.display ='block'; // Génère 1 reﬂow
```

Au final, 2 reﬂow sont nécessaires au lieu de 6 ou 7 potentiellement.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|   |   |
