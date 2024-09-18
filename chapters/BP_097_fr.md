## Utiliser un serveur asynchrone

### Identifiants

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   77    | 94  | 97  |     |     |

RGESN : 3.1

### Catégories

| Cycle de vie  |   Tiers    |       Responsable       |
| :-----------: | :--------: | :---------------------: |
| 4. Production | Datacenter | Administrateur systèmes |

### Indications

| Degré de priorité | Mise en oeuvre | Impact écologique |
| :---------------: | :------------: | :---------------: |
|         3         |       3        |         4         |

|  Ressources Economisées   |
| :-----------------------: |
| Processeur / Mémoire vive |

### Description

Les serveurs (web, d’applications, etc.) tels que Nginx, node.js ou Gwan sont conçus pour être très performant et surtout utiliser le minimum de ressources (CPU et RAM). Grâce à leur fonctionnement en mode asynchrone, ils ne sont pas tenus de créer un processus ou un thread pour chaque requête. Ils évitent ainsi de gaspiller leurs ressources.

Alors que la plupart des serveurs web augmentent leur consommation de mémoire vive au fur et à mesure des sollicitations, les serveurs asynchrones demeurent quant à eux très stables.

### Exemple

Nginx est plus performant qu’Apache, il permet de servir 2 fois plus de requêtes par seconde.

Gwan (bien qu’encore très peu utilisé) est plus performant que Nginx, il permet de servir 4 fois plus de requêtes par seconde en 4 fois moins de temps tout en consommant 2 fois moins de RAM.

### Principe de validation

| Le nombre ...                      | est inférieur ou égal à |
| ---------------------------------- | :---------------------: |
| de serveurs applicatifs synchrones |            1            |
