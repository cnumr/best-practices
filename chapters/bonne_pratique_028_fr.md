## Utiliser les commentaires conditionnel
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |   facile                  |  Fort                 | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|    |

### Règle
Si des ressources spécifiques doivent être transmises à certains navi- gateurs, utiliser les commentaires conditionnels afin que les autres navigateurs ne téléchargent pas inutilement ces ressources.

### Exemple
Dans le cas de la prise en charge du navigateur Internet Explorer 7, on peut par exemple ajouter le commentaire conditionnel suivant :
```html
<!--[if lte IE 7]>
<link type="text/css" rel="stylesheet"media="all" href="/ﬁx-ie.css"/>
<![endif]-->
```

### Principe de validation
