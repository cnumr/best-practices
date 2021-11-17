## Ne se connecter à une base de données que si nécessaire

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   56   | 72  | 73  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  5/5      |  5/5                  |    2/5               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur / Mémoire vive / Réseau   |

### Description
Quelque soit le système de base de données, l’ouverture d’une connexion est un processus couteux en ressources pour le client et le serveur :
*	Allocation de mémoire et I/O disque pour les buffers,
*	Aller-retours réseaux pour le protocole de connexion,
*	Coût CPU induit.
Exemple :  pour Oracle, plusieurs aller-retours sont nécessaires (validation des crédentials, information sur le driver, négociation de la taille des paquets optimale, ...).
Le fait d’ouvrir et de fermer une connexion nécessite l’allocation et la désallocation de ces ressources ainsi que de nombreux échanges réseaux, à chaque fois.

La bonne pratique qui est usuellement utilisée est la mise en place d’un pool de connexions.
Il permet d’optimiser la gestion des connexions ainsi que les performances. Cependant, sa configuration n’est pas forcément une opération triviale (nécessite de superviser le comportement de celui-ci pour trouver le bon paramétrage).

Ceci dit, chaque fois que l’application peut éviter un accès à la base de données, faites-le !
### Exemple

HikariCP est un pool de connexions JDBC solide et performant. Il est intégré dans SpringBoot.


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|  de connexions à une base de données n’utilisant pas un pool| 0  |
|  de connexions à une base de données pour requêter, stocker une donnée non nécessaire à l'utilisation du service | 0  |
