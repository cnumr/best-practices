## Utiliser tous les niveaux de cache du CMS

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   60   | 57  | 57  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       |  Facile                   | Fort                  | 


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

Dès lors avec l'un de ces plugins, les pages sont mis en cache sur le serveur et ne sont plus générés pour chaque utilisateur. Accessoirement ce genre d'outil fournit aussi d'autres optimisation orientée WebPerf qui vont dans le sens de l'écoconception web.


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|  de cache non activé |  0 |
