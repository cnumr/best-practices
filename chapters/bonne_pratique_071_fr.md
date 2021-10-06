## Utiliser des variables statiques
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
