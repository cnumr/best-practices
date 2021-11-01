## Ne jamais faire de SELECT * FROM

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   57   |  73 | 74  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |  Facile                   |    Fort               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur  |

### Description

Le serveur de base de données doit résoudre les champs en fonction du schéma. Si vous connaissez le schéma, il est vivement recommandé de nommer les champs.

### Exemple

Ne pas écrire :
```sql
SELECT * FROM clients;
```
mais plutôt :
```sql
SELECT raison_social, adresse, code_postal, telephone FROM clients;
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de requêtes SQL de type SELECT * FROM  | 0  |
