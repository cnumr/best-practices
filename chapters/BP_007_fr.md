## Respecter le principe de navigation rapide dans l’historique

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   28   | 5  |  7 |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| 3         | 3                  | 5                  | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|Processeur / Réseau    |

### Description

Les navigateurs possèdent une fonction de navigation rapide dans l’historique (boutons Page précédente et Page suivante),
souvent nommée _back-forward cache_ ou encore _bfcache_. 
Grâce à cette fonction, il n’est pas nécessaire de redemander la page au serveur, puis de la recharger. 
On évite ainsi de consommer inutilement de la bande passante et de générer des requêtes HTTP supplémentaires,
ainsi que de ré-exécuter les scripts et refaire le rendu de la page.

Par conséquent, il faut éviter tout élément qui rendrait la page inéligible au _bfcache_,
et/ou qui rendrait la page inutilisable après l'avoir quittée
(ou éventuellement les rendre utilisables à nouveau quand la page est réutilisée, ou juste avant qu'elle soit mise en cache).

### Exemple

Éviter :
 - les actions lorsqu'on quitte la page (événements `unload` ou `beforeunload`, leur préférer `pagehide` si c'est vraiment nécessaire)
 - les liens qui ouvrent de nouveaux onglets / fenêtres sans `rel="noopener"` ou `rel="noreferrer"`
 - de laisser des connexions (IndexedDB, `fetch()` ou XMLHttpRequest, Web Sockets, etc.) ouvertes quand l'utilisateur quitte la page

Utiliser les événéments `pageshow` et/ou `pagehide` pour réinitialiser les éléments qui le nécessitent,
par exemple réactiver les boutons de formulaire qui se désactivent lors de la soumission
ou supprimer les informations sensibles (comme les mots de passe),
ou pour fermer/rouvrir des connexions persistantes.

Sources:
* https://web.dev/bfcache/


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de pages inéligibles au _bfcache_  |  10% |
