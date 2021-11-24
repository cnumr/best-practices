## Utiliser un cache HTTP

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  72    | 103  | 99  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       |  Standard                 |    Fort               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Mémoire vive  |

### Description

Les reverse proxies (Varnish, Squid ou Nginx) sont optimisés pour servir du contenu (pages HTML, images, etc.) de façon rapide, tout en consommant le moins de cycles CPU possible. En évitant de solliciter inutilement le serveur d’applications, ils permettent d’utiliser une infrastructure plus réduite.

### Exemple

Le recours à un reverse proxy spécialisé comme Varnish réduit drastiquement le temps nécessaire pour servir les pages dynamiques, tout en augmentant la capacité du CMS (Drupal, ici)
à en délivrer un grand nombre en même temps. On constate également qu’un cache généraliste comme APC n’est pas adapté (source : Asymptotix).

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|  d'entêtes sans cache HTTP identifié | 0  |
