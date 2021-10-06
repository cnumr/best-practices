## Optimiser la taille des cookies
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Non Prioritaire  | Standard                  |    Moyen              | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Réseau  |

### Règle
Un cookie permet de maintenir un état entre le navigateur de l’inter- naute et le serveur web distant grâce à des identifiants. Ce fichier texte est transféré dans chaque requête HTTP. Il faut donc optimiser au maximum sa taille et le supprimer dès que sa présence n’est plus obligatoire.

### Exemple
On peut supprimer automatiquement un cookie lorsqu’il n’est plus utile, en précisant une date d’expiration, de la manière suivante :
```
Set-Cookie: user_mavariable=mavaleur; expires=Wed,
12 Dec 2012 07:42:30 UTC
```
Voir la RFC 2109 de l’IETF (Internet Engineering Task Force) pour en savoir plus sur les cookies :
https://tools.ietf.org/rfc/rfc2019.txt

### Principe de validation
