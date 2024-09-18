## Stocker les données statiques localement

### Identifiants

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   205   | 10  | 10  | 64  |     |

RGESN : 6.2

### Catégories

|                 Cycle de vie                 |   Tiers    |           Responsable           |
| :------------------------------------------: | :--------: | :-----------------------------: |
| 3. Réalisation (fabrication / développement) | Datacenter | Architecte Logiciel/Développeur |

### Indications

| Degré de priorité | Mise en oeuvre | Impact écologique |
| :---------------: | :------------: | :---------------: |
|         4         |       3        |         4         |

| Ressources Economisées |
| :--------------------: |
|   Réseau / Requêtes    |

### Description

Avec le support généralisé sur tous les navigateurs des bases de données clé-valeur (IndexDB, Web Storage), et de la mise en cache via l'API Cache Storage, il est désormais possible de stocker localement des données statiques structurées.

L’intérêt du stockage local est double. D’une part, on évite les allers-retours inutiles avec le serveur, ce qui économise des ressources et du temps de réponse. D’autre part, comme les données sont locales, il est plus facile et plus rapide de les manipuler directement sur l’appareil de l’utilisateur.

Le gain potentiel est la réduction de la charge serveur, donc du nombre d’équipements nécessaires (de leur empreinte environnementale et économique), des serveurs HTTP jusqu’aux serveurs de base de données.

### Exemple

Par exemple pour stocker le nom de l’utilisateur vous pouvez utiliser l’instruction suivante :
`localStorage.setItem('name','nom_utilisateur');`

Il suffit ensuite d’utiliser la ligne suivante pour le retrouver ultérieurement :
`var myName = localStorage.getItem('name');`

### Principe de validation

| Le pourcentage ...                           | est inférieur ou égal à |
| -------------------------------------------- | :---------------------: |
| de données statiques non stockées localement |           25%           |
