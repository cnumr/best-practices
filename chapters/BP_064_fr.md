## Mettre en cache les données calculées souvent utilisées

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  47    | 62  | 64  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       |  Standard                 | Fort                  | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Mémoire vive |

### Description

Lorsque des calculs de valeurs ou de données sont coûteux en res- sources, les mettre en cache si les valeurs demeurent inchangées, afin de ne pas réitérer ces opérations.

### Exemple

Les systèmes de cache de type key-value store sont prévus pour stocker ces données. Généralement montés entièrement en mémoire vive (RAM), ils génèrent d’importantes économies de cycles CPU si les données calculées sont très souvent sollicitées.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de données peu volatiles, demandant un calcul et accédées plusieurs fois, non mises dans un système de cache  |  10% |
