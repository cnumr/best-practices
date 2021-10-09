## Compresser les librairies CSS et Javascript
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |  Facile                   |    Fort               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Réseau  |

### Règle
Compresser les feuilles de style CSS et les bibliothèques JavaScript pour limiter l’utilisation de la bande passante et améliorer les temps de chargement.

### Exemple
Pour Apache, il suffit d’ajouter dans le fichier .htaccess (pour utiliser `DEFLATE`) :
```apacheconf
# compress text, html, javascript, css, xml: AddOutputFilterByType DEFLATE text/plain AddOutputFilterByType DEFLATE text/html AddOutputFilterByType DEFLATE text/xml AddOutputFilterByType DEFLATE text/css AddOutputFilterByType DEFLATE application/xml AddOutputFilterByType DEFLATE application/xhtml+xml AddOutputFilterByType DEFLATE application/rss+xml AddOutputFilterByType DEFLATE application/ javascript
AddOutputFilterByType DEFLATE application/x- javascript
# Or, compress certain ﬁle types by extension:
<files *.html>
    SetOutputFilter DEFLATE
</files>
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de librairies CSS et JS non compressées  |  0 |
