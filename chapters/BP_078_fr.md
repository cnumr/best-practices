## Compresser les fichiers CSS, JavaScript, HTML et SVG

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
L’algorithme GZIP est un standard de la compression coté serveur, il permet de compresser à la volée les ressources avant de les envoyer aux clients.
Plus récemment, BROTLI à été popularisé avec des performances accrues, il est supporté par tous les navigateurs les plus répandus.
### Exemple

Pour utiliser `BROTLI` dans Apache, il suffit d’ajouter la configuration suivante :

```
# compress html, text, xml, css, javascript
AddOutputFilterByType BROTLI_COMPRESS text/html text/plain text/xml text/css text/javascript application/javascript

# Or, compress certain ﬁle types in a specific directory:
<Directory "/your-directory">
    AddOutputFilterByType BROTLI_COMPRESS text/html
</Directory>
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de fichiers CSS, JavaScript,  HTML et SVG non compressées  |  0 |
