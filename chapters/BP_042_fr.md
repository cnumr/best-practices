## Rendre les éléments du DOM invisibles lors de leur modification

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   44   | 44  | 42  |      |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 3. Réalisation (fabrication / développement) | Utilisateur/Terminal | Architecte Logiciel/Développeur |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 4 | 4 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur  |

### Description

Lorsqu’un élément du DOM (Document Object Model) doit être modifié par plusieurs propriétés, chaque changement de style ou de contenu va générer un repaint ou un reﬂow. Aussi est-il généralement plus économe de :
 - rendre l’élément invisible (passer la propriété display à none) (1 reﬂow) ;
 - modifier toutes les propriétés de l’élément et rendre l’élément à nouveau visible (1 reﬂow).

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
|  de manipulations d'un élément du DOM sans qu'il soit rendu invisible pendant sa modification |  1 |
