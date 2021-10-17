## Utiliser un système de templating (Smarty, Twig)
### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|---------|:----:|:----:|:----:|
|      |   |   |  x   |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       |  Standard                 | Fort                  | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur |

### Règle

À l’instar de Smarty ou Twig, les moteurs de templating fournissent presque toujours un système de mise en cache des templates com- pilés, dans un fichier binaire contenant du code intermédiaire appelé bytecode.

Le gain en nombre de cycles CPU est souvent très significatif, surtout lorsqu’un cache de code intermédiaire se greffe au système de cache du moteur de templating.

### Exemple

Pour activer le cache de Smarty :
```php
<?php 

require('Smarty.class.php');

$smarty = new Smarty();
$smarty->caching = 1;
$smarty->display('index.tpl');

?>
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de système de template absents  |  1 |
