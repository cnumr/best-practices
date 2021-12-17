## Mettre en cache les réponses Ajax

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   91   | 107  | 102  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 2 | 4 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Réseau / Requêtes  |

### Description

Les réponses Ajax qui seront inchangées dans un futur proche ne doivent pas être redemandées au serveur. Par conséquent, les mettre en cache pour économiser de la bande passante.

### Exemple

Si une requête Ajax retourne une liste de noms de villes, de noms de contacts ou tout élément non calculé, il faut mettre ces réponses en cache du côté client pour ne pas générer à nouveau une requête vers le serveur.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de réponses AJAX non mises en cache  | 10%  |
