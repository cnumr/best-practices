## Limiter le nombre de CSS

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   10   | 25  | 22  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       |   Facile                  | Fort                  | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|    |

### Description

Limiter le nombre de CSS pour ne pas multiplier les requêtes HTTP et pour simplifier le rendu côté navigateur. Utiliser une feuille de style commune pour tous les éléments communs, quel que soit l'affichage, et un fichier par résolution cible ou media querie.

Attention, intégrer ces fichiers directement dans le code HTML et NON PAS avec des directives @import dans les fichiers CSS eux-mêmes. En découpant de la sorte, le terminal de l'utilisateur choisira ce qu'il lui correspond et dépriorisera le chargement des fichiers dont il a n'a pas besoin.

Le cas échéant, des fichiers CSS pour certains composants peuvent être chargés en fonction du contexte.

### Exemple

```
<link rel='stylesheet' id='css-css'  href='communs.css' type='text/css' media='all' />
<link rel='stylesheet' id='css-xs-css'  href='petits-ecrans.css' type='text/css' media='(max-width: 959px)' />
<link rel='stylesheet' id='css-sm-css'  href='tablettes.css' type='text/css' media='(min-width: 768px)' />
<link rel='stylesheet' id='css-mdlg-css'  href='grands-ecrans.css' media='(min-width: 960px)' />
<link rel='stylesheet' id='css-print-css'  href='print.css' type='text/css' media='print' />
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de fichiers CSS  | 10  |
