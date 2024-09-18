## Optimiser la taille des cookies

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |  V5  |
|:-------:|:----:|:----:|:----:|:----:|
|   65   | 82  | 82  |  62  |   |

RGESN : 6.1

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 3. Réalisation (fabrication / développement) | Réseau | Architecte Logiciel/Développeur |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 2 | 4 | 2 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Réseau  |

### Description

Un cookie est un fichier texte stocké sur l’appareil de l’internaute qui permet de maintenir un état entre son navigateur et le serveur web distant grâce à des données partagées. Il est inclus dans chaque requête HTTP, ce qui signifie qu'une taille excessive peut alourdir les requêtes, ralentir le chargement des pages et consommer davantage de bande passante. Il faut donc optimiser au maximum sa taille en limitant les données stockées aux informations essentielles, en utilisant des valeurs compactes, et en le supprimant dès que sa présence n’est plus obligatoire.
### Exemple

On peut supprimer un cookie lorsqu’il n’est plus utile en précisant une durée d’expiration nulle ou négative, de la manière suivante :
```
Set-Cookie: user_mavariable=; Max-Age=0
```
Voir la RFC 6265 de l’IETF (Internet Engineering Task Force) pour en savoir plus sur les cookies :
https://datatracker.ietf.org/doc/html/rfc6265

### Principe de validation

| Le nombre ...     | est égal à   |  
|-------------------|:-------------------------:|
|  de cookies non utiles ou non optimisés |  0 |
