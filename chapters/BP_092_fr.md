## Mettre les caches entièrement en RAM

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  85    | 90  | 92  |      |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 4. Production | Datacenter | Administrateur systèmes |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 2 | 2 | 3 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur / Stockage   |

### Description

Les systèmes de cache doivent être, autant que possible, montés entièrement en mémoire vive (RAM) qui est bien plus rapide en accès lecture/écriture qu’un stockage sur disque dur (SSD ou mécanique). Cette mesure permet d’éviter :
- des entrées/sorties sur les supports de stockage
- des cycles CPU

### Exemple

Exemples d’intégration d’un cache RAM à Drupal :
 - intégration de Memcache : https://drupal.org/project/memcache
 - intégration de Varnish : https://drupal.org/project/varnish

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de caches non mis en RAM  | 0  |
