## Limiter le nombre de résultats (clause LIMIT)
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |  Standard                 |    Fort               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur / Mémoire vive / Réseau   |

### Règle
Lorsque c’est possible, limiter avec la clause `LIMIT` le nombre de résultats attendus pour une requête donnée. Cette approche permet de limiter le nombre de cycles CPU et la quantité de mémoire vive utilisés pour retrouver les enregistrements concernés.

Le gain en performance sera d’autant plus important si les enregistre- ments contiennent un grand nombre de champs volumineux.

### Exemple
Si vous ne souhaitez afficher que les 25 premiers enregistrements d’une table contenant le nom et le prénom de personnes, remplacer lors de la sélection :
```sql
SELECT prenom, nom FROM personnes
```
par :
```sql
SELECT prenom, nom FROM personnes LIMIT 0, 25
```


### Principe de validation
