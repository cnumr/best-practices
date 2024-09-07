---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: fr
published: false
---
## Choisir un format de données adapté

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  113    | 54  | 17  |      |

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

Le type de données utilisé pour manipuler et stocker une donnée a un impact significatif sur la consommation mémoire et
les cycles processeurs nécessaires lors des manipulations en base de données, au niveau du serveur d’applications et même
dans le navigateur (manipulation via JavaScript), ainsi que sur l’espace de stockage nécessaire. Choisir un mauvais type de données entraîne :
 - un gaspillage de mémoire (par exemple, si vous stockez de toutes
petites données dans une colonne prévue pour stocker de grosses quantités de données) ;
 - des problèmes de performance (il sera plus rapide de faire une
recherche sur un nombre que sur une chaîne de caractères).
   
Idéalement, les choix du type de données et de son dimensionnement doivent être fondés sur l’analyse d’un échantillon représentatif de données.

### Exemples

Dans le cas d’un établissement de formation, la taille du champ permettant de stocker le nombre d’élèves doit être basé sur une étude statistique.
On peut ainsi déterminer s’il est possible d’utiliser un TINYINT (1 octet, jusqu’à 127) plutôt qu’un SMALLINT (2 octets, jusqu’à 32 767). 
Dans tous les cas, le choix par défaut d’un INT (4 octets, jusqu’à 2 147 483 647) voire un BIGINT (8 octets) est une aberration (que nous rencontrons malheureusement tous les jours lors de nos audits…).
Gain potentiel : jusqu’à 8 fois moins de stockage. La consommation en cycle processeur est réduite dans les mêmes proportions.

Dans le cas d'un stockage d'un identifiant UUID, un stockage textuel sera non adapté. Un UUID est stocké sur 16 octets alors que sous sa forme textuelle cela demanderait au minimum 36 octets. Les indexes de base de données ne seraient également pas aussi efficaces qu'avec le type UUID/GUID/uniqueidentifier.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|  de champs de la base dont le format est inadapté est  | 15%  |
