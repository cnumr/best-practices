## Remplacer les $i++ par ++$i
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |   Facile                  |   Faible              | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur   |

### Règle
La forme `$i++` présente l’inconvénient de générer une variable temporaire lors de l’incrémentation, ce qui n’est pas le cas avec la forme
`++$i`.

### Exemple
Éviter :
`$i++`
qui génère 4 opcodes.

Préférer :
`++$i`
qui n’en génère que 3.


### Principe de validation
