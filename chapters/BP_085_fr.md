## Mettre en place un plan de fin de vie du site

### Identifiants

| GreenIT  | V2  | V3  | V4  | V5 |
|:--------:|:---:|:---:|:---:|:--:|
|   1030   |     |  85 | 115 |    |

RGESN : 2.7, 5.8

### Catégories

| Cycle de vie  |   Tiers    | Responsable |
|:-------------:|:----------:|:-----------:|
| 7. Fin de vie | Datacenter |   PO/AMOA   |

### Indications

| Degré de priorité  | Mise en oeuvre | Impact écologique |
|:------------------:|:--------------:|:-----------------:|
|         3          |       2        |         3         |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur / Mémoire vive / Réseau / Requêtes / Stockage   |

### Description

La plupart du temps, la fin de vie d’un service numérique n’est pas anticipée.

Un plan de fin de vie peut prendre la forme d’un document incluant de façon exhaustive toutes les ressources à décommissionner, supprimer ou sauvegarder : serveurs, stockage, middlewares, configurations, code source, documentations, …

Ne pas oublier les éléments de la vie de développement comme les canaux de messagerie, les jobs d’intégration continue et bien sûr les environnements de tests.

Les compétences acquises sur le projet doivent être valorisées si possible.

### Exemple

Lors d'une migration de données ou d'applications vers un environnement cloud, plusieurs scénarii de fin de vie sont possibles :
* copier/coller l'existant vers le cloud avec décommissionnement de l'existant.
* refactoring avec une modification de l'architecture et du code et donc une remise en cause de l'existant : par exemple, un questionnement sur les fonctionnalités non utilisées et que l'on reprend au cas où…

### Principe de validation

| Le nombre ...                    | est inférieur ou égal à |  
|----------------------------------|:-----------------------:|
| de sites sans plan de fin de vie |            0            |
