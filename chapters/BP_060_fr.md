## Encoder les sons en dehors du CMS

### Identifiants

| GreenIT |  V2  |  V3  | V4  | V5  |
|:-------:|:----:|:----:|:---:|:---:|
|  96    | 60  | 60  | 104 |  |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 5. Utilisation | Utilisateur/Terminal | Utilisateur |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 4 | 4 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur / Mémoire vive / Réseau / Stockage |

### Description

Convertir et optimiser les sons en dehors du service numérique permet d’économiser beaucoup de bande passante et soulagera la CPU et la mémoire vive du serveur, car celui-ci n’est pas optimisé pour le (ré)encodage des fichiers audio.

### Exemple

Si vous ajoutez un fichier audio WAV dans la bibliothèque multimédia de Wordpress, il sera encodé en MP3 par le CMS. Or, un fichier MP3 permet typiquement un gain d’un facteur 10 sans dégrader la qualité du fichier audio. Si vous réalisez cette compression avant de l’importer, vous gagnez 90% d’espace de stockage auquel s’ajoutent les ressources économisées lors du traitement en délivrant strictement le même rendu audio pour l’utilisateur.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de fichiers sonores encodés directement par le CMS  | 0  |
