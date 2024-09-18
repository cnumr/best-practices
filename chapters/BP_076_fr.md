## Éviter le transfert d'une grande quantité de données pour réaliser un traitement

### Identifiants

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   58    | 75  | 76  |     |     |

### Catégories

| Cycle de vie  | Tiers  |           Responsable           |
| :-----------: | :----: | :-----------------------------: |
| 2. Conception | Réseau | Architecte Logiciel/Développeur |

### Indications

| Degré de priorité | Mise en oeuvre | Impact écologique |
| :---------------: | :------------: | :---------------: |
|         3         |       3        |         3         |

|       Ressources Economisées       |
| :--------------------------------: |
| Processeur / Mémoire vive / Réseau |

### Description

Les systèmes de gestion de base de données sont conçus et optimisés pour répondre efficacement aux traitements de grandes quantités de données.
Dans le cas de traitements avec une logique plus ou moins complexe, il est déconseillé de récupérer les données "brutes" et de réaliser toutes les opérations de calcul, de transformation ou encore d'agrégation côté serveur backend voire frontend.

Ces traitements doivent plutôt être réalisés au plus près de la donnée afin de:

- limiter la bande passante à cause du transfert de données non traitées
- profiter des optimisations de la base données sur la manipulation des données
- d'alléger le cycle CPU côté serveur backend voire frontend

### Exemple

Dans le cas de requêtes complexes avec un nombre important de données et de l'utilisation d'un système de gestion de base de données relationnelles (SGBDR), il est conseillé d'utiliser des procédures stockées car:

- une procédure stockée économise au serveur l’interprétation de la requête puisqu’elle est précompilée ;
- une procédure stockée est moins gourmande en bande passante puisqu’il y a moins d’informations échangées entre le serveur et le client.

Tous les SGBDR récents (SQL Server, MySQL, PostgreSQL, etc.) prennent en charge les procédures stockées.

### Principe de validation

| Le nombre ...                                                                                       | est inférieur ou égal à |
| --------------------------------------------------------------------------------------------------- | :---------------------: |
| de traitements avec une grande quantité de données exécutés en dehors du serveur de base de données |            1            |
