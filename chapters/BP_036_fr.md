## Optimiser les images vectorielles

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   1050   | 22  | 36  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |   facile                  |  Fort                 | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|    |

### Règle

Les navigateurs modernes sont tous compatibles avec le format d’image vectorielle SVG (Scalable Vector Graphics), 
basé sur un ensemble de vecteurs décrits en XML. Les images SVG ont deux avantages indéniables : d’une part, 
elles peuvent être réduites et agrandies à l’infini sans dégradation de qualité ; d’autre part, elles sont,
la plupart du temps, moins lourdes que des images bitmap.

Cependant, la plupart des images SVG contiennent de nombreuses métadonnées qui ont été nécessaires à leur création. 
C’est par exemple le cas des informations de couche (layer), des commentaires, etc., qui sont indispensables pour éditer l’image,
mais inutiles pour l’afficher. D’où l’idée de les supprimer pour réduire le poids des fichiers.
De nombreux outils de minification et d’optimisation, tels que Com- pressor.io, SVG Cleaner, ou SVGO sont disponibles.

Le taux de compression via gzip varie selon la complexité de l’image. Mais il est toujours élevé, car il s’agit de compresser du texte :
en général, on atteint des ratios de l’ordre de 75 % à 80 %.


### Exemple

Gain potentiel : jusqu’à 75 % de Ko en moins.

Nous avons testé SVGO sur un fichier SVG de 1 Ko. Il a réduit sa taille de 36 %, le faisant passer de 1101 à 700 octets. En compressant le fichier via gzip avant son transfert, le poids passe à 498 octets, soit moins de la moitié (45 %) de la taille initiale, sans aucune perte de qualité à l’affichage.


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| d'images non optimisée  |  5% |
