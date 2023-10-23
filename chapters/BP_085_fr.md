## Mettre en place un plan de fin de vie du site

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   1030   |   | 85  |      |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 7. Fin de vie | Datacenter | PO/AMOA |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 2 | 3 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur / Mémoire vive / Réseau / Requêtes / Stockage   |

### Description
La plupart des environnements (POC - proof of concept, tests, recette, …) finissent par tomber en désuétude et ne sont plus nécessaires. Environ 25 % des serveurs physiques et 20 % des serveurs virtuels (VM) sont des zombies. C’est-à-dire que des serveurs consomment en attendant qu’on les utilise. Ils constituent autant d’impacts environnementaux et économiques évitables.

Réaliser une analyse de fin de vie évite cette situation.

Un plan de fin de vie simple consiste à nommer la personne qui décide de l’arrêt du service. Son rôle sera alors de monitorer son activité puis de l’arrêter. Une autre approche fixe le scénario de fin de vie (date de péremption…) et commissionne le budget adéquate dès la conception. Au lieu d’arrêter un service, une troisième piste consiste à allonger sa durée de vie.

Arrêter un service implique de 
- Libérer les ressources : décommissionner le service, ses dépendances, les outils utilisés par l’équipe de développement (ex : chanel Teams).
- Supprimer, archiver… les données (y compris la GED et le système de suivi des bugs).
- Réaffecter les installations, équipements et autres ressources du projet (y compris le code source).
- Valoriser les compétences acquises pendant la vie du projet.

### Exemple

Lors d'une migration de données ou d'applications vers un environnement cloud, plusieurs scénarii de fin de vie sont possibles :
* copier/coller l'existant vers le cloud avec décommissionnement de l'existant.
* refactoring avec une modification de l'architecture et du code et donc une remise en cause de l'existant : par exemple, un questionnement sur les fonctionnalités non utilisées et que l'on reprend au cas où…

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|  de site sans plan de fin de vie | 0  |
