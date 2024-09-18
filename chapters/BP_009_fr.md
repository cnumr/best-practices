## Limiter le nombre de requêtes HTTP

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |  V5  |
|:-------:|:----:|:----:|:----:|:----:|
|   180   | 9  | 9  |   47   |   47  |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 3. Réalisation (fabrication / développement) | Réseau | Architecte Logiciel/Développeur |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Réseau / Requêtes    |

### Description

Le temps de chargement d’une page côté navigateur est directement corrélé au nombre de fichiers que le navigateur doit télécharger,
et au poids unitaire de chaque fichier.

Pour chaque fichier, le navigateur émet un GET HTTP vers le serveur.

Il attend sa réponse, puis télécharge la ressource dès qu’elle est disponible. Selon le type de serveur web que vous utilisez,
plus le nombre de requêtes par page est important, moins vous pourrez servir de pages par serveur. 
Diminuer le nombre de requêtes par page est crucial pour réduire le nombre de serveurs HTTP (voire des serveurs d'application et de base de données) nécessaires au fonctionnement du site,
et donc les impacts environnementaux associés.

### Exemple

Il existe plusieurs techniques pour réduire le nombre de requêtes :
- Concaténer des fichiers JS
- Concaténer des fichiers CSS
- Créer des sprites ou des fonts d'icônes pour les icônes
- Utiliser le lazyload pour les images


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de requêtes HTTP  | 40  |
