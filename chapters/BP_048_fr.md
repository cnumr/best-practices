## Utiliser les opérations primitives
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Non prioritaire   |  Facile                   | Moyen                 | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur   |

### Règle
L’emploi de méthodes pour les opérations de base engendre une consommation supplémentaire de ressources système. L’interpréteur doit en effet résoudre les objets puis les méthodes, rien que pour effectuer ces opérations simples du langage.

À éviter donc autant que possible.

### Exemple
Ne pas écrire :

```var min = Math.min(a,b); A.push(v);```

mais plutôt :

```var min = a < b ? a : b; A[A.length] = v;```


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| d'opérations, méthodes réécrites et déjà fournies par le SDK  | 0  |
