## Compresser lles fichiers CSS, JavaScript, HTML et SVG

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   86   |  80 | 78  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire (5/5) |  Facile  (1/5)            |    Fort               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Réseau  |

### Description

Compresser les feuilles de style CSS, les bibliothèques JavaScript ainsi que les fichiers HTML pour limiter l’utilisation de la bande passante et améliorer les temps de chargement.

### Exemple

Pour Apache, il suffit d’ajouter dans le fichier .htaccess (pour utiliser `DEFLATE`) :
```apacheconf
# compress text, html, javascript, css, xml: AddOutputFilterByType DEFLATE text/plain AddOutputFilterByType DEFLATE text/html AddOutputFilterByType DEFLATE text/xml AddOutputFilterByType DEFLATE text/css AddOutputFilterByType DEFLATE application/xml AddOutputFilterByType DEFLATE application/xhtml+xml AddOutputFilterByType DEFLATE application/rss+xml AddOutputFilterByType DEFLATE application/ javascript
AddOutputFilterByType DEFLATE application/x-javascript
# Or, compress certain ﬁle types by extension:
<files *.html>
    SetOutputFilter DEFLATE
</files>
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de fichiers CSS, JavaScript,  HTML et SVG non compressées  |  0 |
