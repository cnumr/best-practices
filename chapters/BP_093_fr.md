## Stocker les ressources et données dans le cloud

### Identifiants

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   71    | 92  | 93  |     |     |

RGESN : 3.2

### Catégories

| Cycle de vie  |   Tiers    |       Responsable       |
| :-----------: | :--------: | :---------------------: |
| 4. Production | Datacenter | Administrateur systèmes |

### Indications

| Degré de priorité | Mise en oeuvre | Impact écologique |
| :---------------: | :------------: | :---------------: |
|         2         |       3        |         2         |

| Ressources Economisées |
| :--------------------: |
|        Stockage        |

### Description

Pour optimiser l’espace de stockage nécessaire aux ressources d’un site web ou d’un service en ligne, il peut être intéressant d’utiliser des solutions de cloud computing. Ainsi, tout en disposant d’une solution évolutive (elastic en anglais), on ne monopolise pas de ressources inutilement.

Comme il ne faut pas multiplier les domaines (voir la bonne pratique n° 82), le plus simple est de regrouper toutes les ressources statiques sur un seul service de stockage en ligne.

### Exemple

La plupart du temps, il est plus efficace de recourir au service de stockage S3 d’Amazon pour stocker des données que d’ajouter de nouveaux disques durs aux serveurs existants.

### Principe de validation

| Le nombre ...                                                                                   | est inférieur ou égal à |
| ----------------------------------------------------------------------------------------------- | :---------------------: |
| de ressources, données du site web qui ne sont pas stockées sur une solution de cloud computing |            0            |
