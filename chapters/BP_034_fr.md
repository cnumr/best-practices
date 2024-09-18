## Dimensionner correctement les images côté navigateur

### Identifiants

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   93    | 20  | 34  |     |     |

### Catégories

|                 Cycle de vie                 |        Tiers         | Responsable |
| :------------------------------------------: | :------------------: | :---------: |
| 3. Réalisation (fabrication / développement) | Utilisateur/Terminal | Utilisateur |

### Indications

| Degré de priorité | Mise en oeuvre | Impact écologique |
| :---------------: | :------------: | :---------------: |
|         4         |       4        |         4         |

| Ressources Economisées |
| :--------------------: |
|  Processeur / Réseau   |

### Description

Idéalement, la taille d’affichage d’une image dans le navigateur doit être la plus proche possible de celle du fichier image téléchargée.
Dans le cadre des intégrations modernes, avec les images responsives il faut bien définir les attributs srcset ou sources pour que chaque type d’appareil utilise une version d’image adaptée à la taille et à la résolution de son écran.
NB : les attributs height et width permettent généralement de définir le plus petit ratio d’affichage mais ce sont surtout les css qui aujourd’hui déterminent les tailles d’affichage selon les tailles des écrans.

### Exemple

Une image de 350 × 300 pixels encodée en PNG 24 pèse 41 Ko. La même image affichée en vignette à 70 × 60 pixels pèse toujours 41 Ko, alors qu’elle ne devrait pas dépasser 3 Ko !
Exemple de syntaxe responsive :
HTML :
<img id=”monimage” src="image_3ko.png" width="70" height="60" 
 srcset="image_3ko.png 640w, image_41ko.png 1920w">
CSS :
#monimage {width: 70px; height:60px}
@media (min-width: 640px) {
#monimage {width: 350px; height:300px}

### Principe de validation

| Le nombre ...                                                                                                                                                                                                                               | est inférieur ou égal à |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------: |
| Comparez le nombre de pixels d’une image chargée au nombre de pixels affichés, pour en déduire le nombre de Ko en chargés en trop. Idéalement, ce nombre doit être inférieur à 300ko. ( https://yellowlab.tools/ permet de faire ce test. ) |           300           |
