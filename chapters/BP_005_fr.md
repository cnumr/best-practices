## Favoriser un design simple, épuré, adapté au web

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  5    | 6  | 5  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| 5       | 5                  | 5                  | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur / Mémoire vive / Réseau   |

### Description

Tout design d'interface ou webdesign doit être réfléchi en amont, en prenant en compte :
- les besoins de l'utilisateur (voir la bonne pratique "Optimiser le parcours utilisateur")
- les heuristiques d'ergonomie (Bastien et Scapin, Nielsen, etc.)
- les contraintes techniques
- les bonnes pratiques d'écoconception
- et de préférence les bonnes pratiques d'accessibilité

**Privilégiez un design simple et épuré réalisable uniquement en HTML5 et CSS3.**

### Exemple

![Capture d'écran du 26/11/2021 d'une section la landing page de https://www.gouvernement.fr/](https://github.com/florinesueur/images/blob/main/heuritique-gouv-72.png)
![Capture d'écran du 26/11/2021 d'une section la landing page de https://www.gouvernement.fr/](https://github.com/florinesueur/images/blob/main/heuritique-gouv-72-color.png)

**Description :** Les images encadrées, non contrastées et non lisibles (RGAA) créent une surcarche mentale non nécessaire (2.2. Densité Informationnelle de Scapin et Bastien). Téléchargées, elles ne sont pourtant pas visibles sur mobile (éccoconception). On peut soulever l'incohérence entre signalétique et colorimétrie (1.2.2. Groupement/Distinction par le Format de Scapin et Bastien). Le logotype "France Relance" regroupe les items 1 et 2 alors que la colorimétrie regroupe les items 2 et 3.

**Recommandation :** Supprimer les images de fond et ajouter un glyphe (Préférer les glyphes aux images, bonne pratique d'écoconception) avec une colorimétrie cohérente si un regroupement doit avoir lieu.

*Capture d'écran du 26/11/2021 d'une section de la landing page de https://www.gouvernement.fr/*


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|  de pages non réalisables uniquement en HTML5 et CSS3 |  10% |
