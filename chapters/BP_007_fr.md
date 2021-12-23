## Respecter le principe de navigation rapide dans l’historique

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   28   | 5  |  7 |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 4 | 3 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|Processeur / Réseau    |

### Description

Les navigateurs possèdent une fonction de navigation rapide dans l’historique (boutons Page précédente et Page suivante),
souvent nommée _back-forward cache_ ou encore _bfcache_.

Contrairement au cache HTTP qui permet de garder en mémoire les réponses aux requêtes précédemment effectuées et donc d'éviter de les générer plusieurs fois inutilement et d'accélérer le chargement de pages, le cache _bfcache_ permet de garder en mémoire une page entière. 
Néanmoins, comme l'utilisation de cette fonctionnalité mobilise des resources machine supplémentaires côté utilisateur, il faut veiller à alléger au maximum les fonctionnalités des pages stockées avec le _bfcache_. 
Par ailleurs, l'utilisation de _bfcache_ implique certaines précautions notamment lorsque le délai d'attente est dépassé (_setTimeout_). 
En effet, comme les navigateurs suspendent l'exécution des timers en attente et les tâches dans les files d'attente JavaScript, et reprennent le traitement des tâches lorsque la page est restaurée à partir du _bfcache_, il peut y avoir des situations problématiques. 
Par exemple, si le navigateur suspend une tâche requise dans le cadre d'une transaction IndexedDB ou d'utilisation d'API et que d'autres onglets (utilisant les mêmes bases de données IndexedDB) sont ouverts à ce moment-là, le navigateur ne mettra pas en cache les différentes pages.

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

Source:
* https://web.dev/bfcache/ (contenu sous licence CC BY 4.0 - _Back/forward cache_ par Philip Walton)


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de pages inéligibles au _bfcache_  |  0% |
