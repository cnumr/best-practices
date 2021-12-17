## Quantifier précisément le besoin

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   110   | 2  | 2  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 5 | 4 | 5 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|Processeur / Mémoire vive / Stockage / Réseau / Requêtes    |

### Description

Les « mensurations » de chaque fonctionnalité doivent être définies précisément et dans leur ensemble. Il peut s’agir 
d’un taux de compression pour les images de l’interface graphique, du temps de réponse maximum pour une requête HTTP, 
du nombre d’items affichés dans une liste, etc.

Plus les « mensurations » et exigences associées à chaque fonctionnalité collent au métier, plus on évite la surqualité.
La logique doit donc être inversée par rapport aux habitudes actuelles. Si une information n’est pas précisée, 
c’est le niveau de qualité ou la quantité minimale qui est proposé. Par exemple, en l’absence de précision, 
le nombre d’items d’une liste est limité à 5 éléments ou au nombre maximal affichable sur le plus petit écran cible de l’application.

Les valeurs par défaut, rarement modifiées par l'utilisateur, doivent être choisies pour répondre au besoin avec un impact minimal.

### Exemple

Gain potentiel : en jouant sur le nombre d’items affichés sur la page de résultats de son moteur de recherche Bing, 
Microsoft Research a démontré qu’il était possible de réduire jusqu’à 80 % l’infrastructure physique (nombre de serveurs) sous-jacente.

Autre exemple : en utilisant par défaut une résolution de vidéo acceptable (480p) plutôt que maximale, on réduit la bande passante 
utilisée pour la plupart des utilisateurs (qui ne changeront pas la valeur par défaut), tout en laissant la possibilité aux autres 
d'augmenter la résolution s'ils en en ont le besoin.

### Principe de validation

| Le nombre ...     | est égal à   |  
|-------------------|:-------------------------:|
| de fonctionnalités avec des dimensions supérieures au besoin	| 0 |
