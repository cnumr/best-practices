## Utiliser les procédures stockées
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |  Difficile                |    Fort               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur / Mémoire vive / Réseau   |

### Règle
Les procédures stockées sont plus performantes et économes en res- sources que les requêtes SQL envoyées par le serveur d’applications vers le système de gestion de base de données relationnelles (SGBDR). Deux raisons à cela :
 - une procédure stockée économise au serveur l’interprétation de la
requête puisqu’elle est précompilée ;
 - une procédure stockée est moins gourmande en bande passante puisqu’il y a moins d’informations échangées entre le serveur et le client.

Il faut donc s’appuyer au maximum sur cette fonctionnalité du SGBDR.

Tous les SGBDR récents (SQL Server, MySQL, PostgreSQL, etc.) prennent en charge les procédures stockées.

### Exemple
Quand utiliser les procédures stockées ?
 - Pour éviter d’envoyer des requêtes complexes au serveur SQL, qui font l’objet d’une analyse syntaxique puis d’une interprétation avant d’être exécutées. Ces étapes consomment beaucoup de res- sources.
 - Pour simplifier le code du site et favoriser ainsi sa maintenabilité. En effet, l’empreinte écologique d’un site est aussi constituée des ressources mises en œuvre pour le maintenir et le faire évoluer.


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|  de requêtes pouvant être exécutées sous la forme de procédures stockées mais non implémentées sous cette forme |  20% |
