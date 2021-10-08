## Priviliégier les fonctions anonymes
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       |  Facile                   | Faible                | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur |

### Règle
Puisque JavaScript autorise l’écriture de fonctions anonymes, les uti- liser lorsque c’est possible et que la maintenabilité du projet n’est pas remise en cause. De cette façon, l’interpréteur n’a plus besoin de résoudre le nom de la fonction.

Attention, cette bonne pratique ne s’applique que si la fonction est utilisée une seule fois. Dans le cas contraire, vous devez nommer cette fonction

### Exemple
Ne pas écrire :
```javascript
(function(){
    function invokeMe() {
        /*code*/
    }
    setTimeout(invokeMe, 5);
})();
```

mais plutôt :
```javascript
(function(){
    setTimeout(function(){ /*some code here*/ }, 5);
})();
```

### Principe de validation
