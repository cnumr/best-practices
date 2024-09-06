## Stocker les données dans le cloud

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  71    |  92 |  93 |      |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 4. Production | Datacenter | Administrateur systèmes |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 2 | 3 | 2 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Stockage   |

### Description

Pour optimiser l’espace de stockage nécessaire aux ressources d’un site web ou d’un service en ligne, il peut être intéressant d’utiliser des solutions de cloud computing. Ainsi, tout en disposant d’une solution évolutive (elastic en anglais), on ne monopolise pas de ressources inutilement. L’autre intérêt est d’héberger les ressources statiques sur un domaine sans cookies. On évite alors de transporter le cookie avec chaque ressource transférée vers le navigateur (voir la bonne pratique "Héberger les ressources (CSS/JS) sur un domaine sans cookie").

Cette approche est donc judicieuse pour les images et autres ressources statiques. Comme il ne faut pas multiplier les domaines (voir la bonne pratique "Limiter le nombre de domaines servant les ressources"), le plus simple est de regrouper toutes les ressources statiques sur un seul service de stockage en ligne.

### Exemple

Pour la réalisation d’un jeu concours basé sur des témoignages vidéo, il est plus efficace de recourir au service de stockage S3 d’Amazon que d’ajouter de nouveaux disques durs aux serveurs existants.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de ressources, données du site web qui ne sont pas stockées sur une solution de cloud computing  |  0 |
