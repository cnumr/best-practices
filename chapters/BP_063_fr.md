## Ne pas assigner inutilement de valeur aux variables
### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|---------|:----:|:----:|:----:|
|      |   |   |  x   |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       |  Facile                   | Fort                  | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Mémoire vive  |

### Règle

Eviter de déclarer et d’utiliser des variables lorsque ce n’est pas indis- pensable. En effet, à chaque allocation correspond de la mémoire vive occupée.

### Exemple

Ne pas écrire :

```php 
$clients = $crm->fetchAllClients(); 
return $clients;
```

mais plutôt :

```php
return $crm->fetchAllClients();
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| d'allocations temporaires à une variable pouvant être utilisées directement par l'instruction qui la renvoie  | 10%  |
