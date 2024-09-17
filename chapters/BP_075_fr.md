## Optimiser les requêtes aux bases de données

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |  V5  |
|:-------:|:----:|:----:|:----:|:----:|
|  59    | 74  | 75  |  66  |    |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 3. Réalisation (fabrication / développement) | Datacenter | Architecte Logiciel/Développeur |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 3 | 3 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur / Mémoire vive / Réseau   |

### Description

Les requêtes effectuées pour récupérer et enregistrer des données ont un impact important sur la consommation de ressources et doivent donc être optimisées. Les pistes classiques d’optimisation sont nombreuses :

 - Ramener moins de données et se limiter au nécessaire.
 - Sélectionner uniquement les champs nécessaires.
 - Ajouter des index sur les champs utilisés comme clés. Cet ajout peut réduire drastiquement la puissance nécessaire à la requête.
 - Analyser les requêtes pour identifier les points d’amélioration, par exemple via `EXPLAIN` pour un SGBDR.
 - Conserver en cache le résultat des requêtes les plus coûteuses et les plus fréquentes.
 - Éventuellement, dénormaliser le modèle de données pour éviter les jointures, qui peuvent ralentir les requêtes.

### Exemple

Si vous ne souhaitez afficher que les 25 premiers enregistrements d’une table contenant le nom et le prénom de personnes, remplacez lors de la sélection :
```sql
SELECT prenom, nom FROM personnes
```
par :
```sql
SELECT prenom, nom FROM personnes LIMIT 0, 25
```

### Principe de validation

| Le nombre ...     | est égal à   |  
|-------------------|:-------------------------:|
| de requêtes peu performantes identifiées non optimisées | 0  |
