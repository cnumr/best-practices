## Adapter les vidéos aux contextes de visualisation

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   92   |  115 |  114 |      |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 5. Utilisation | Utilisateur/Terminal | Utilisateur |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 2 | 3 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Réseau  |

### Description

Prévoir plusieurs formats (taille, frame rate, compression audio, etc.) selon le contexte de lecture des vidéos (ordinateur de bureau, tablette Wi-Fi, smartphone EDGE. ).

L’optimisation des vidéos doit être réalisée en dehors du site web, idéalement lors de la postproduction. Si ce n’est pas possible, utiliser des services comme Youtube ou Vimeo qui proposent, par défaut, plusieurs formats optimisés (SD, HD, etc.).

### Exemple

Une aide utilisateur tournée en 1 680 × 1 050, d’une durée de 15 secondes, pèse :
 - 49 Mo non optimisée ;
 - 3 Mo optimisée pour une résolution égale ou supérieure à 1 024 × 720 en MPEG 4 / H.264 / AAC ;
 - 1,2 Mo optimisée pour une résolution  égale  ou  supérieure  à 480 × 320 en MPEG 4 / H.264 / AAC.

On peut donc estimer un gain d’au moins 50 % du poids (et probablement des gains lors du décodage, car le format d’encodage tient compte des matériels cibles) entre la version « desktop » et la version
« mobile » de la vidéo.

Avec 3 tailles différentes × 3 encodages différents, soit 9 versions d’une même vidéo, la plupart des cas devraient être couverts. Avec une logique de responsive design, il est possible de servir telle ou telle vidéo en fonction de règles simples telles que la résolution d’écran.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de vidéos avec une définition de 1080p ou + affichées sur le site web quand le terminal détecté est un smartphone  |  0 |
