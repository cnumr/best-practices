## Réduire au maximum le repaint (appearence) et le reflow (layout)

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  42    | 45  | 43  |      |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 3. Réalisation (fabrication / développement) | Utilisateur/Terminal | Architecte Logiciel/Développeur |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 4 | 4 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur   |

### Description

Le repaint est le changement d’apparence d’un élément du DOM (Document Object Model), tandis que le reﬂow est le changement/recalcul de la position des éléments dans le DOM. Ces deux opérations sont coûteuses en ressources, notamment en cycles CPU : il faut donc éviter de les déclencher.

### Exemple

Pour éviter les repaint, ne pas modifier les propriétés stylistiques d’un élément (couleur de fond, style de bordure, couleur du texte, taille, etc.).

Pour éviter les reﬂow, limiter les changements de propriétés de position, de dimension, de type de positionnement, de contenu, etc. Cette suggestion est notamment valable pour certains éléments HTML tels que les tables, dont le reﬂow peut nécessiter jusqu’à trois fois plus de temps qu’un élément équivalent avec un block display.

Pour aller plus loin :
https://developers.google.com/speed/articles/reflow


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|  de modifications n'affectant pas le layout et occasionnant un repaint (ex: color, background, visibility) | 1  |
