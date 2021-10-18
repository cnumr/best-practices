## Supprimer les balises images dont l’attribut SRC est vide

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  23    | 19  | 33  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |   facile                  |  Fort                 | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|    |

### Règle

Si une balise image est présente et que son attribut SRC est vide, le navigateur va appeler la page d’index du niveau d’arborescence où il se situe,
générant des requêtes HTTP supplémentaires et inutiles.

### Exemple

La balise image suivante demandera au serveur le fichier index du répertoire foo :
```html
<img src='' alt='' />
```
sur une page située à l’URL :
http://domain.tld/foo/bar.html

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| Le nombre de balises images dont l’attribut SRC est vide   |  0 |
