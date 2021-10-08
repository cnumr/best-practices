## Désactiver les logs binaires de MySQL / MariaDb
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Conseillé         |  Facile                   |    Moyen              | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Mémoire vive / Stockage  |

### Règle
Les logs binaires du serveur MySQL ou MariaDB peuvent devenir très volumineux, consommant des cycles CPU tout en générant des entrées-sorties (I/O) sur le disque dur, puisque chaque requête de modification/suppression est inscrite dans le fichier de log. Aussi, si vous avez la possibilité de désactiver ces logs, vous économiserez beaucoup de ressources.

### Exemple
Pour MySQL, mettre en commentaire dans le fichier my.cnf (ou équivalent) :
```# log-bin
# expire_logs_days = 10
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|   |   |
