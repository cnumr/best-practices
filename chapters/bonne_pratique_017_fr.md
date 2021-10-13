## Choisir un format de données adapté
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |   Facile                  |  Fort                 |


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|    |

### Règle
Le type de données utilisé pour manipuler et stocker une donnée a un impact significatif sur la consommation mémoire et les cycles pro- cesseurs nécessaires lors des manipulations en base de données, au niveau du serveur d’applications et même dans le navigateur (mani- pulation via JavaScript), ainsi que sur l’espace de stockage nécessaire. Choisir un mauvais type de données entraîne :
 - un gaspillage de mémoire (par exemple, si vous stockez de toutes
petites données dans une colonne prévue pour stocker de grosses quantités de données) ;
 - des problèmes de performance (il sera plus rapide de faire une
recherche sur un nombre que sur une chaîne de caractères).
   
Idéalement, les choix du type de données et de son dimensionne- ment doivent êtres fondés sur l’analyse d’un échantillon représentatif de données.

### Exemple
Dans le cas d’un établissement de formation, la taille du champ permettant de stocker le nombre d’élèves doit être basé sur une étude statistique. On peut ainsi déterminer s’il est possible d’utiliser un TINYINT (1 octet, jusqu’à 127) plutôt qu’un SMALLINT (2 octets, jusqu’à 32 767). Dans tous les cas, le choix par défaut d’un INT (4 octets, jusqu’à 2 147 483 647) est une aberration (que nous rencontrons mal- heureusement tous les jours lors de nos audits…).
Gain potentiel : jusqu’à 8 fois moins de mémoire et de bande passante consommée. La consommation en cycle processeur est réduite dans les mêmes proportions.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|  de champs de la base dont le format est inadapté est  | 15%  |
