## Utiliser un serveur asynchrone

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  77    | 94  | 97  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Conseillé         |  Difficile                |    Fort               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Mémoire vive  |

### Description

Les serveurs (web, d’applications, etc.) tels que Nginx, node.js ou Gwan sont conçus pour utiliser le minimum de ressources possible. Grâce à leur fonctionnement en mode asynchrone, ils ne sont pas tenus de créer un processus ou un thread pour chaque requête. Ils évitent ainsi de gaspiller leurs ressources.

Alors que la plupart des serveurs web augmentent leur consommation de mémoire vive au fur et à mesure des sollicitations, les serveurs asynchrones demeurent eux très stables.

### Exemple

Nginx a la réputation d’être plus performant qu’Apache. Il peut ainsi servir 2,1 fois plus de requêtes par seconde que ce serveur.

Pour aller plus loin :
 - http://nbonvin.wordpress.com/2011/03/14/apache-vs-nginx-vs-varnish-vs-gwan
 - http://nbonvin.wordpress.com/2011/03/24/serving-small-static-files-which-server-to-use


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de serveurs applicatifs synchrones  | 0  |
