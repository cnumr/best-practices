## Favoriser un développement sur-mesure à l'usage d'un CMS dynamique

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   2   | 12  | 11  |      |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 2. Conception | Datacenter | Architecte Logiciel/Développeur |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 3 | 3 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Mémoire vive / Réseau  |

### Description

Utiliser un framework, un développement sur mesure voire un générateur de site statique, afin de bénéficier d’une plus grande liberté dans l’optimisation de certains processus.
Les CMS dynamiques sont en effet plus contraignants et imposent des fonctionnements parfois gourmands en ressources pour atteindre leur principal objectif, la souplesse.

Ainsi, pour la gestion de leurs extensions, les CMS dynamiques utilisent des systèmes d'API pour extension, qui reposent généralement sur une convention de nommage des fonctions, la détection des extensions, la surcharge des comportements natifs.
Le test de l’existence d'extension est un processus qui consomme des ressources, tandis que les développements sur mesure n’ont pas à « découvrir » l’existence de fonctions puisqu’elles sont déjà connues. L’usage d’un nombre trop important d’extensions, notamment issues de la contribution, souvent au prix d'une surcharge de ressources (inclusion de fonctionnalités chargées mais non utilisées) peut consommer beaucoup de ressources et ralentir le site.

Il existe désormais des solutions de génération et déploiement de site statique, qui, par ailleurs, proposent le meilleur des deux mondes (adminsitration + staticité).

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| d'extensions d'un site reposant sur un CMS dynamique | 3  |
