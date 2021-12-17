## Mettre en cache les données calculées souvent utilisées

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  47    | 62  | 64  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|-------------------|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Mémoire vive |

### Description

Lorsque des calculs de valeurs ou de données sont coûteux en ressources, les mettre en cache si les valeurs demeurent inchangées, afin de ne pas réitérer ces opérations.
Les systèmes de cache de type key-value store sont prévus pour stocker ces données. Généralement montés entièrement en mémoire vive (RAM), ils génèrent d’importantes économies de cycles CPU si les données calculées sont très souvent sollicitées.

### Exemple

Le nombre de contenus (ex: des produits) appartenant à une catégorie est calculé alors qu'il n'est pas mis à jour de manière très fréquente. Mettre en cache pour chaque catégorie leur nombre de contenus permet de gagner du cycle CPU.

Les jetons d'accès en OAuth2 sont associés à une date d'expiration. Mettre en cache le jeton et son délai d'expiration évite des appels inutiles au serveur d'autorisation et de revalider le jeton.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de données peu volatiles, demandant un calcul et accédées plusieurs fois, non mises dans un système de cache  |  10% |
