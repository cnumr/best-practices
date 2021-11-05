## Ne pas générer de page 404

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  46    | 98  | 96  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       |  Difficile                |    Fort               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Mémoire vive / Réseau / Stockage  |

### Description

La page 404 doit être la plus légère possible, et même idéalement inexistante. En effet, lorsque le navigateur demande une ressource qui n’existe pas (image, feuille de styles CSS, fichier JavaScript, etc.), le serveur répond par la page 404, qui peut être plus lourde que la ressource demandée.

De plus, certains CMS exécutent leur routine de recherche de contenu (dans la base de données) pour tenter de trouver la page demandée. Par conséquent, du code serveur est exécuté, le serveur de base de données est sollicité, et la génération dynamique de la page HTML est exécutée. Tout ce processus aboutit à un gaspillage de cycles CPU, de mémoire vive et de bande passante.

### Exemple

Éviter les pages 404 dynamiques, qui sont personnalisées en fonction du contenu de l’URL. Préférer une seule page 404 statique.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de pages d'erreur 404 |  0 |
