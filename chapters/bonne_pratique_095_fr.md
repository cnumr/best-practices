## Eviter les redirections
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       |  Difficile                |    Fort               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur / Réseau / Stockage |

### Règle
Les redirections dégradent le temps de réponse, tout en consommant des ressources inutilement. Il faut donc les éviter autant que possible. Ces redirections peuvent avoir lieu à différents niveaux : code HTML, code JavaScript, serveur HTTP et serveur d’applications (PHP, etc.).

### Exemple
Au niveau du serveur HTTP (Apache, dans ce cas), une redirection consiste à activer une réécriture systématique des URL via le fichier
.htaccess :
```apacheconf
<IfModule mod_alias.c>
    Redirect permanent http://ancienne_adresse.fr http://nouvelle.adresse.fr/
</IfModule>
```
Mieux vaut remplacer manuellement les adresses statiques intégrées aux pages web


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de redirections  | 1  |
