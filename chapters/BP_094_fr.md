## Héberger les ressources (CSS/JS) sur un domaine sans cookie

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   73   | 96  | 94  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       |  Standard                 |    Fort               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Réseau |

### Description

Les images, feuilles de style CSS et fichiers JavaScript doivent être hébergés sur un domaine sans cookies. Cela évite au navigateur d’envoyer un cookie pour chaque ressource... alors qu’il est inutile. En effet, bien que transféré dans chaque requête HTTP, le cookie
est inutile pour les contenus statiques, puisqu’il sert à maintenir un état entre le navigateur de l’internaute et le serveur d’applications distant grâce aux identifiants contenus dans le fichier texte. Il est donc préférable de stocker ce type de contenus sur un nom de domaine spécifique, par exemple static.mondomaine.com.

### Exemple

Les leaders du Web utilisent un domaine séparé pour servir les ressources statiques qui ne nécessitent pas de cookies. Yahoo! emploie par exemple le domaine yimg.com, YouTube le domaine ytimg.com et Amazon le domaine images-amazon.com.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de domaines servant des ressources statiques AVEC un cookie  | 2  |
