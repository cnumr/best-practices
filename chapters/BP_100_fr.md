## Mettre en cache le favicon.ico

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   22   | 104  | 100  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       |  Facile                   |    Fort               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Réseau  |

### Règle

Le favicon.ico est la petite image qui s’affiche très souvent dans la barre d’adresse, à côté de l’URL du site. Non seulement son poids doit être optimisé, mais il faut absolument qu’il soit présent en cache. En effet, ce petit fichier est appelé par le navigateur sur toutes les pages, quoi qu’il arrive.

Par ailleurs, il est recommandé de toujours prévoir ce type de fichier, car certains navigateurs le demandent même s’il n’y en a pas, ce qui génère des erreurs 404.

### Exemple

Ajouter dans le fichier .htaccess :
```apacheconf
<IfModule mod_header.c>
    <FilesMatch"\.ico$">
        # cache .ico files for 1 year(31536000 sec)
        Header set Cache-control max-age=31536000
    </FilesMatch>
</IfModule>
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de favicon non mis en cache  | 0  |
