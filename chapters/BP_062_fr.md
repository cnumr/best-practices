## Eviter la ré-écriture des getter / setter natifs

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  53    | 67  | 62  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Conseillé         |  Facile                   | Moyen                 | 

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur |

### Description

La plupart des langages objet proposent des getter et des setter stan- dards que le développeur n’a pas besoin d’écrire.

Les surcharger allonge les temps de compilation et d’exécution de ces méthodes, qui sont généralement bien mieux optimisées par le langage que par le développeur.

Par conséquent, privilégier l’utilisation des getter et setter standards, et implémenter des méthodes spécifiques métier. Cette méthode offre également l’avantage de faciliter la maintenance par les autres développeurs, qui seront habitués au comportement des getter/setter standards plutôt que ceux implémentés spécifiquement.

### Exemple

Préférer l’approche orientée objet sans getter/setter mais avec un set « natif » de la propriété privée cheese par la méthode de classe putCheese :
```
class Fridge
{
    private int cheese;
    void putCheese(int _number) {
        cheese += _number; 
    }
}

void go_shopping(Fridge fridge)
{
    fridge.putCheese(5);
}
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de surcharges de getters ou setters natifs  | 0  |
