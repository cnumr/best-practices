## Ne se connecter à une base de données que si nécessaire
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |  Standard                 |    Fort               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur / Mémoire vive / Réseau   |

### Règle
Déclencher une connexion à un serveur de base de données est coû- teux en ressources pour le serveur d’applications, pour le serveur de base de données et, éventuellement, pour le réseau. Chaque fois que l’application peut se passer de la base de données, faites-le !

### Exemple
Les outils dynamiques génèrent souvent des pages 404 pour les res- sources (CSS, JavaScript, images, etc.) qui ne se trouvent pas sur le système de fichiers. Ces pages 404 sont générées une fois que le CMS a vérifié dans la base de données qu’aucun contenu ne correspond à l’URL demandée.

Aussi est-il judicieux de mettre en place un système de règles, excluant la recherche dans la base pour les URL contenant des extensions de type *.css, *.js, *.png, etc., afin de ne pas déclencher de connexion à la base de données.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|  de connexions à une base de données pour requêter, stocker une donnée non nécessaire à l'utilisation du service | 0  |
