## Utiliser tous les niveaux de cache du CMS

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   60   | 57  | 57  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       |  Facile                   | Fort                  | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Mémoire vive  |

### Règle

Si le CMS (comme Drupal, eZ Publish...) propose un système de cache à plusieurs niveaux, utiliser ces différents niveaux car leur granularité permet de réduire les ressources consommées (cycles CPU, mémoire) et d’offrir de bonnes performances à l’utilisateur.

### Exemple

Dans sa configuration de base, Drupal possède 6 niveaux de cache.
1.	La table (ou le bin depuis Drupal 7) cache enregistre une copie de la configuration des modules, de la structure de toutes les autres tables et de toutes les informations concernant le thème utilisé sur le site.
2.	La table cache page enregistre une copie des pages, mais seulement pour les utilisateurs non identifiés.
3.	La table cache block enregistre une copie des blocs.
4.	La table cache menu enregistre une copie du menu de navigation et des URL qui lui sont associées.
5.	La table cache ﬁlter enregistre une copie de tous les contenus des nœuds (nodes), une fois qu’ils ont été filtrés par le système de filtre.
6.	La table cache form enregistre tous les formulaires soumis à la Form API.

Il faut mettre en cache les requêtes des vues, les résultats des vues, les blocs affichant les vues et la page dans son ensemble. Vous pouvez également jouer sur les stratégies de cache pour augmenter le TTL (Time to Live) des éléments HTML qui sont rarement modifiés.


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|  de cache non activé |  0 |
