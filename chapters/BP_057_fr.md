## Utiliser tous les niveaux de cache du serveur d’application / CMS

### Identifiants

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   60    | 57  | 57  |     |     |

RGESN : 7.1

### Catégories

| Cycle de vie  |   Tiers    |       Responsable       |
| :-----------: | :--------: | :---------------------: |
| 4. Production | Datacenter | Administrateur systèmes |

### Indications

| Degré de priorité | Mise en oeuvre | Impact écologique |
| :---------------: | :------------: | :---------------: |
|         4         |       3        |         4         |

|  Ressources Economisées   |
| :-----------------------: |
| Processeur / Mémoire vive |

### Description

Si le serveur d’application ou le CMS (comme Wordpress, Drupal, eZ Publish...) propose un système de cache à plusieurs niveaux, utiliser ces différents niveaux car leur granularité permet de réduire les ressources consommées (cycles CPU, mémoire). On délivre ainsi de bonnes performances à l’utilisateur tout en consommant moins de ressources côté serveur.

### Exemple

WordPress dispose de différentes extensions de gestion de cache : LiteSpeed Cache, WP Fastest Cache, W3 Total Cache, WP Super Cache.

Les pages sont mises en cache sur le serveur et ne sont plus générées pour chaque utilisateur. Accessoirement, ce genre d’outil fournit aussi d’autres optimisations orientées WebPerf qui vont dans le sens de l’écoconception web.

Il est intéressant également d’activer la mise en cache des requêtes SQL afin de soulager la base de données.

### Principe de validation

| Le nombre ...         | est inférieur ou égal à |
| --------------------- | :---------------------: |
| de caches non activés |            0            |
