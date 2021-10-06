## Mettre en cache les réponses Ajax
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Non Prioritaire   |  Standard                 |    Moyen              | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Réseau / Requêtes  |

### Règle
Les réponses Ajax qui seront inchangées dans un futur proche ne doivent pas être redemandées au serveur. Par conséquent, les mettre en cache pour économiser de la bande passante.

### Exemple
Si une requête Ajax retourne une liste de noms de villes, de noms de contacts ou tout élément non calculé, il faut mettre ces réponses en cache du côté client pour ne pas générer à nouveau une requête vers le serveur.

### Principe de validation
