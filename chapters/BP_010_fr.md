## Stocker les données statiques localement

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  205    | 10  | 10  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       | Standard                 | Fort                  | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Réseau / Requêtes    |

### Description

L’une des grandes nouveautés de HTML 5 est la possibilité de stocker localement des données structurées sous différentes formes : 
paires valeurs-clés (Web Storage), base de données relationnelle SQL (IndexedDB), et la mise en cache applicatif (Service Workers).

L’intérêt du stockage local est double. D’une part, on évite les allers-retours inutiles avec le serveur, ce qui économise des ressources et du temps de réponse.
D’autre part, comme les données sont locales, il est plus facile et plus rapide de les manipuler au sein de l’interface.

À l’heure où nous écrivons ces lignes (juillet 2015), le support par les dernières versions des navigateurs de Web Storage est total et celui de IndexedDB est bon.
On peut consulter le site www.caniuse.com, très utile pour tester l’avancée du support de chacune de ces approches par les navigateurs.

### Exemple

Gain potentiel : réduction de la charge serveur, donc du nombre d’équipements nécessaires (de leur empreinte environnementale et économique),
des serveurs HTTP jusqu’aux mainframes.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de données statiques non stockées localement  | 25%  |
