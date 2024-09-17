## Choisir un format de données adapté pour la base de données

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |  V5  |
|:-------:|:----:|:----:|:----:|:----:|
|  113    | 54  | 17  |  63  |  |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 3. Réalisation (fabrication / développement) | Datacenter | Architecte Logiciel/Développeur |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Mémoire vive / Stockage / Réseau  |

### Description

Le type de données utilisé pour manipuler et stocker une donnée a un impact significatif sur la consommation mémoire et les cycles processeurs nécessaires lors des manipulations en base de données, au niveau du serveur d’applications et même dans le navigateur (manipulation via JavaScript), ainsi que sur l’espace de stockage nécessaire. Choisir un mauvais type de données entraîne un gaspillage de mémoire (par exemple, si vous stockez de toutes petites données dans une colonne prévue pour stocker de grosses quantités de données) et des problèmes de performance. Les choix du type de données et de son dimensionnement doivent donc être fondés sur l’analyse d’un échantillon représentatif de données.

### Exemples

Dans le cas d’un établissement de formation, la taille du champ permettant de stocker le nombre d’élèves doit être basé sur une étude statistique. On peut ainsi déterminer s’il est possible d’utiliser un TINYINT (1 octet, jusqu’à 127) plutôt qu’un SMALLINT (2 octets, jusqu’à 32 767). Dans tous les cas, le choix par défaut d’un INT (4 octets, jusqu’à 2 147 483 647) voire un BIGINT (8 octets) est une aberration (que nous rencontrons malheureusement tous les jours lors de nos audits…).
Gain potentiel : jusqu’à 8 fois moins de stockage. La consommation en cycles processeurs est réduite dans les mêmes proportions.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|  de champs de la base dont le format est inadapté est  | 15%  |
