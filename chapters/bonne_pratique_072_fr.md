## Eviter d'effectuer des requêtes SQL à l’intérieur d’une boucle
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |  Standard                 |    Fort               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|   Processeur / Mémoire vive / Réseau  |

### Règle
Les requêtes SQL à l’intérieur d’une boucle posent de gros problèmes de performance, et ce d’autant plus si le(s) serveur(s) SQL n’est (ne sont) pas sur la machine locale. En effet, ces serveurs sont optimisés pour traiter plusieurs sélections, insertions ou modifications dans une seule requête ou une seule transaction.

Mal utilisées, ces requêtes consomment inutilement des cycles CPU, de la mémoire vive et de la bande passante.

### Exemple
Ne pas écrire :
```php
foreach ($userList as $user) {
    $query = 'INSERT INTO users (ﬁrst_name,last_name) VALUES("'. $user['ﬁrst_name'] .'", "'. $user['last_ name'] .'")';
    mysql_query($query);
}
```
mais plutôt :
```php
$userData = array();
foreach ($userList as $user) {
    $userData[] = '("'. $user['ﬁrst_name'] .'", "'.
    $user['last_name'] .'")';
}
$query = 'INSERT INTO users (ﬁrst_name,last_name) VALUES'. implode(',', $userData); mysql_query($query);
```

### Principe de validation
