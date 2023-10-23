## Utiliser tous les niveaux de cache du CMS

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   60   | 57  | 57  |      |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 4. Production | Datacenter | Administrateur systèmes |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Mémoire vive  |

### Description

Si le CMS (comme Wordpress, Drupal, eZ Publish...) propose un système de cache à plusieurs niveaux, utiliser ces différents niveaux car leur granularité permet de réduire les ressources consommées (cycles CPU, mémoire) et d’offrir de bonnes performances à l’utilisateur.

### Exemple

Un CMS comme WordPress ne dispose pas nativement de système de cache, mais il existe plusieurs plugins qui comblent cette lacune, les plus connus étant :

- W3 total Cache
- Wp Super Cache
- Wp-rocket

Dès lors avec l'un de ces plugins, les pages sont mises en cache sur le serveur et ne sont plus générées pour chaque utilisateur. Accessoirement, ce genre d'outils fournit aussi d'autres optimisations orientées WebPerf qui vont dans le sens de l'écoconception web.


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|  de caches non activés |  0 |
