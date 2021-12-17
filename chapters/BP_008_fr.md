## Proposer un traitement asynchrone lorsque c'est possible

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   112   |  8 |  8 |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|-------------------|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Mémoire vive / Réseau / Requêtes    |

### Description

Lorsque l’interaction avec l’utilisateur induit un traitement lourd et long côté serveur, proposer un traitement asynchrone lorsque c’est possible.
L’idée est d’encourager l’utilisateur à déclencher le traitement, puis à se reconnecter quand celui-ci est terminé sans attendre sur son terminal la fin de l'exécution; 
par exemple, via la réception d’un e-mail contenant un lien.
Cette approche permet de réaliser des traitements par lots (batchs), souvent plus efficients en ressources que des traitements synchrones à la volée.
On libère ainsi les serveurs de présentation, qui peuvent prendre en charge d’autres internautes pendant que le traitement s’effectue en mode asynchrone côté serveur.
Il est également plus aisé de lisser la charge du serveur responsable du traitement, ce qui permet une meilleure mutualisation de serveurs et par conséquent moins de serveurs.

### Exemple

Dans le cas d’un service en ligne de conversion de documents bureautiques, inciter l’utilisateur à déposer ses fichiers en une seule fois, puis l’avertir par e-mail lorsque le traitement est terminé. Pour optimiser le processus, l’ensemble des fichiers peut être regroupé et compressé dans une archive.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de traitements synchrones qui prennent plus d'une minute  | 0  |
