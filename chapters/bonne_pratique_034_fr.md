## Redimensionner les images en dehors du HTML
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |   facile                  |  Fort                 | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|    |

### Règle
Ne pas redimensionner les images en utilisant les attributs HEIGHT et WIDTH du code HTML. Cette approche impose en effet de transférer ces images dans leur taille originale, gaspillant ainsi de la bande pas- sante et des cycles CPU.

### Exemple
Une image de 350 × 300 pixels encodée en PNG 24 pèse 41 Ko. Redi- mensionnée dans le code HTML, la même image affichée en vignette à 70 × 60 pixels pèse toujours 41 Ko, alors qu’elle ne devrait pas dépas- ser 3 Ko ! Soit 38 Ko téléchargés à chaque fois pour rien…
La meilleure solution consiste à utiliser des images redimensionnées en dehors du code HTML à l’aide d’un logiciel de type Photoshop.
Dans la mesure où le contenu proposé par les utilisateurs du site web n’a pas de valeur ajoutée particulière, il est préférable de leur interdire la possibilité d’insérer des images à partir d’un éditeur WYSIWYG comme CKEditor.

### Principe de validation
