## Utiliser des variables statiques
### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|---------|:----:|:----:|:----:|
|      |   |   |  x   |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |  Facile                   |    Fort               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur  |

### Règle

Lorsque le contexte le permet, utiliser des variables statiques pour éviter d’exécuter plusieurs fois le même code. Vous limiterez ainsi les cycles CPU inutiles.

Ce procédé est particulièrement efficace pour les procédures gour- mandes en ressources.

### Exemple

Pour ne charger qu’une seule fois un parser lourd à initialiser, utiliser les variables statiques :
```php
private function dataParserLoad() { 
    static $done = FALSE;
    if (!$done) {
        require_once APPLICATION_PATH_APP .'/libraries/ DataParser/Parser.php';
        $this->parser = new DataParser();
        $done = TRUE;
    }
}
```


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| d'attributs de classes constants et non partagés par l'ensemble des instances de la classe (ie: non statiques)  | 0  |
