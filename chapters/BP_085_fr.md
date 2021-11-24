## Mettre en place un plan de fin de vie du site

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   1030   |   | 85  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  5/5      |  5/5                   |    5/5               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur / Mémoire vive / Réseau / Requêtes / Stockage   |

### Description

La plupart des environnements (POC - proof of concept, tests, recette, chanel Teams, …) finissent par tomber en désuétude et ne sont plus nécessaires. Environ 25 % des serveurs physiques et 20 % des serveurs virtuels (VM) sont des zombies. C’est-à-dire que des serveurs consomment en attendant qu’on les utilise. Ils constituent autant d’impacts environnementaux et économiques évitables.
Parfois, il peut y avoir une date de fin claire. Le plus souvent, un site décline petit à petit sans que l’activité ne s’arrête complétement.
Un plan de fin de vie simple consiste à nommer la personne qui décide de l’arrêt du service. Son rôle sera alors de monitorer et d’arrêter le service. Une autre approche fixe les conditions de fin de vie (date de péremption…) dès la conception. 
Arrêter un service implique de 
-	Décommissionner le service et ses dépendances
-	Supprimer, archiver… les données
-	Recycler un maximum code

### Exemple

Lors d'une migration de données ou d'applications vers un environnement cloud, plusieurs plans de fin de vie sont possibles :
* copier/coller de l'existant vers le cloud avec décommissionnement de l'existant.
* refactoring avec une modification de l'architecture ou code et donc une remise en cause de l'existant : par exemple, un questionnement sur les fonctionnalités non utilisées et que l'on reprend au cas où…


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|  de site sans plan de fin de vie | 0  |
