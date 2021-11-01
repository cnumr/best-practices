## Utiliser les commentaires conditionnel

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   17   | 31  | 28  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |   facile                  |  Fort                 | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|    |

### Description

Si des ressources spécifiques doivent être transmises à certains navigateurs, utiliser les commentaires conditionnels afin
que les autres navigateurs ne téléchargent pas inutilement ces ressources.

### Exemple

Dans le cas de la prise en charge du navigateur Internet Explorer 7, on peut par exemple ajouter le commentaire conditionnel suivant :
```html
<!--[if lte IE 7]>
<link type="text/css" rel="stylesheet"media="all" href="/ﬁx-ie.css"/>
<![endif]-->
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de ressources statiques spécifiques à un navigateur et appliquées à un autre navigateur  | 0  |
