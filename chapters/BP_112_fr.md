## Adapter les sons aux contextes d'écoute

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   95   | 113  | 112  |      |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 5. Utilisation | Utilisateur/Terminal | Utilisateur |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 2 | 2 | 3 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Réseau |

### Description

Les fichiers audio peuvent être volumineux et consommateurs de bande passante. Aussi est-il indispensable d’en optimiser le poids. Privilégier 3 formats couvrant les 3 grandes plates-formes (Windows, Mac OS X et Linux) :
 - MP3 (MPEG-1 Audio Layer 3) ;
 - AAC (Advanced Audio Coding) ;
 - Vorbis.
Ces formats appliquent des algorithmes de compression très évolués permettant des gains de poids significatifs.

### Exemple

Des encodeurs comme LAME permettent de convertir au format MP3 des fichiers audio non compressés, mais également de jouer sur le taux d’échantillonnage, afin de gagner encore du poids, au détriment de la qualité audio. À tester sur chaque fichier sonore.

Dans le cas d’un fichier de référence WAV son.wav de 63 128 octets, sa conversion en MP3 donne :
 - un fichier son-128.mp3 de 10 823 octets (128 kb/s), 6 fois plus léger ;
 - un fichier son-64.mp3 de 6 508 octets (64 kb/s), 10 fois plus léger.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de codec audio propriétaires (non libres) et de pistes audio dont le ratio poids en mega octet/durée en minute est superieur a 1  | 0  |
