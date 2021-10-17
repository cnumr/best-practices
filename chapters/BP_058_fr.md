## Générer les PDF en dehors du CMS

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   99   | 58  | 58  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       |  Standard                 | Fort                  | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Mémoire vive / Réseau / Stockage  |

### Règle

La génération de PDF « à la volée » est extrêmement consommatrice de cycles CPU et de mémoire vive. Par conséquent, ne pas générer les PDF à la demande, page par page, mais proposer plutôt quelques fichiers générés et optimisés en dehors du CMS

### Exemple

Dans le cas d’un catalogue, la concaténation « à la volée » de fiches elles-mêmes créées à la volée doit être évitée à tout prix.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de PDF généré par le CMS   |  0 |
