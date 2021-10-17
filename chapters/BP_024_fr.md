## Ecrire des sélecteurs CSS efficaces

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  13    | 27  | 24  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       |    Facile                 |   Faible              | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|    |

### Règle

Privilégier les sélecteurs basés sur des ID ou des classes. Ils seront ainsi filtrés plus rapidement, économisant des cycles CPU à la machine interprétant les règles.

### Exemple

Ne pas écrire :
```css
treeitem[mailfolder="true"] > treerow > treecell {…}
```
mais plutôt :
```css
.treecell-mailfolder {…}
```

Ne pas écrire :
```css
treehead > treerow > treecell {…}
```
mais plutôt :
```css
.treecell-header {…}
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de sélecteurs CSS qui n'utilisent ni d'id, ni de class et ni d'attribut  |  0 |
