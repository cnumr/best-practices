## Limiter le nombre de CSS
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       |   Facile                  | Fort                  | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|    |

### Règle
Limiter le nombre de CSS pour ne pas multiplier les requêtes HTTP. Si plusieurs feuilles de style sont utilisées sur toutes les pages du site, concaténez-les dans un seul fichier.

Certains CMS et frameworks fournissent des solutions automatiques pour effectuer ce type d’optimisation. Il est également possible de paramétrer le serveur HTTP pour qu’il réduise la taille des feuilles de style en les compressant 
(voir la [bonne pratique n° 83](/chapters/bonne_pratique_083_fr.md)).

### Exemple
Avec le serveur web Apache, il suffit d’ajouter dans le fichier de configuration .htaccess la ligne suivante :
```apacheconf
# compress css :
AddOutputFilterByType DEFLATE text/css
```
Cette instruction active le mode Deflate qui compresse toutes les feuilles de style entre le serveur et le client HTTP.

En savoir plus sur Deflate :
http://httpd.apache.org/docs/2.4/mod/mod_deflate.html

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de librairies CSS  | 5  |
