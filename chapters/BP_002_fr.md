## Quantifier précisément le besoin

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|---------|:----:|:----:|:----:|
|      |   |   |  x   |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Haute             | Difficile                 | Fort                  | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|Processeur / Mémoire vive / Stockage / Réseau / Requêtes    |

### Règle

Les « mensurations » de chaque fonctionnalité doivent être défi- nies précisément et dans leur ensemble. Il peut s’agir d’un taux de compression pour les images de l’interface graphique, du temps de réponse maximum pour une requête HTTP, du nombre d’items affi- chés dans une liste, etc.
Plus les « mensurations » et exigences associées à chaque fonctionna- lité collent au métier, plus on évite la surqualité. La logique doit donc être inversée par rapport aux habitudes actuelles. Si une information n’est pas précisée, c’est le niveau de qualité ou la quantité minimale qui est proposé. Par exemple, en l’absence de précision, le nombre d’items d’une liste est limité à 5 éléments ou au nombre maximal affichable sur le plus petit écran cible de l’application

### Exemple

Gain potentiel : en jouant sur le nombre d’items affichés sur la page de résultats de son moteur de recherche Bing, Microsoft Research a démontré qu’il était possible de réduire jusqu’à 80 % l’infrastructure physique (nombre de serveurs) sous-jacente.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| d'items dans les listes	| 10 |
