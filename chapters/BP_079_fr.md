## Combiner les fichiers CSS et JavaScript

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  89    | 81  | 79  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |  Facile                   |    Fort               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Requêtes |

### Description

La combinaison de feuilles de style CSS ou de bibliothèques Javascript permet de réduire le nombre de requêtes HTTP.

### Exemple

Le module Apache mod_pagespeed de Google permet d’automatiser ce processus. Il fournit un ensemble de filtres spécialisés, parmi lesquels :
 - combine_css. Combine les CSS en une seule ;
 - combine_javascript. Combine plusieurs fichiers JavaScript en un seul ;
 - defer_javascript. Diffère l’exécution de JavaScript dans le code HTML ;
 - extend_cache. Améliore les possibilités de mise en cache ;
 - inline_preview_images. Retarde l’affichage des images originales et les remplace par des versions de moins bonne qualité tant qu’elles ne sont pas téléchargées ;
 - outline_css. Déplace les gros styles CSS inline dans des fichiers pour améliorer leur propension à la mise en cache ;
 - outline_javascript. Déplace les grosses balises <script> inline dans des fichiers pour améliorer leur propension à la mise en cache ;
 - rewrite_css. Réduit les CSS ;
 - sprite_images. Crée des sprites d’images. Pour aller plus loin : www.modpagespeed.com


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de fichiers CSS et JS non combinés  | 10%  |
