## Utiliser un cache HTTP

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  72    | 103  | 99  |      |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 4. Production | Réseau | Administrateur systèmes |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 5 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Mémoire vive  |

### Description

Les reverse proxies (Varnish, Squid ou NGINX) sont optimisés pour servir du contenu (pages HTML, images, etc.) de façon rapide, tout en consommant le moins de cycles CPU possible. En évitant de solliciter inutilement le serveur d’applications, ils permettent d’utiliser une infrastructure plus réduite.

### Exemple

Le recours à un reverse proxy spécialisé comme Varnish réduit drastiquement le temps nécessaire pour servir les pages dynamiques mise en cache, tout en soulageant le serveur d’application / CMS pour servir de nouvelles requêtes (non mises en cache).

On constate également qu’un cache généraliste comme APC n’est pas adapté (source : Asymptotix).

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|  d'entêtes sans cache HTTP identifié | 0  |
