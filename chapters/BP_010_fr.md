## Stocker les données statiques localement

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  205    | 10  | 10  |      |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 3. Réalisation (fabrication / développement) | Datacenter | Architecte Logiciel/Développeur |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Réseau / Requêtes    |

### Description

Avec le support désormais généralisé sur tous les navigateurs des bases de données clé-valeur (IndexDB, Web Storage), et de la mise en cache dans le Cache Storage API, il est possible de stocker localement des données structurées statiques.

L’intérêt du stockage local est double. D’une part, on évite les allers-retours inutiles avec le serveur, ce qui économise des ressources et du temps de réponse.
D’autre part, comme les données sont locales, il est plus facile et plus rapide de les manipuler au sein de l’interface.

Le gain potentiel est la réduction de la charge serveur, donc du nombre d’équipements nécessaires (de leur empreinte environnementale et économique),
des serveurs HTTP jusqu’aux serveurs de base données.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de données statiques non stockées localement  | 25%  |
