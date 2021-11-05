## Utiliser un framework ou développer sur mesure

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   2   | 12  | 11  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|    Conseillé      |  Difficile                | Fort                  | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Mémoire vive / Réseau  |

### Description

Utiliser un framework ou un développement sur mesure, afin de bénéficier d’une plus grande liberté dans l’optimisation de certains processus.
Les CMS sont en effet plus contraignants et imposent des fonctionnements parfois gourmands en ressources pour atteindre leur principal objectif, la souplesse.

Ainsi, pour la gestion de ses modules, le CMS Drupal utilise un système de « hook », qui repose sur une convention de nommage des fonctions contenues dans ces modules.
Mais tester l’existence de fonctions est un processus qui consomme des ressources. Tandis que les développements sur mesure n’ont pas à « découvrir »
l’existence de fonctions puisqu’elles sont déjà connues.

### Exemple

Éviter ce type d’implémentation lorsque c’est possible :
```php
<?php
    foreach ($list as $module) {
        if (function_exists($module .'_'. $hook)) {
            // Do some stuﬀ here...
        }
    }
?>
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| Le site repose sur un dév sur mesure  | 1  |
