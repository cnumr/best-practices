## Utiliser la simple côte (') au lieu du guillemet (")
### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|---------|:----:|:----:|:----:|
|      |   |   |  x   |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |   Facile                  |   Moyen               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur   |

### Règle

Pour déclarer une chaîne de caractères en PHP, on peut l’encadrer par des quotes (') ou des guillemets ("). La forme utilisant les guillemets permet au développeur d’insérer des variables qui seront substituées lors de l’exécution.
Mais si la chaîne de caractères ne possède pas de variable, utiliser plutôt les quotes. Ainsi, PHP ne recherchera pas les variables à subs- tituer, ce qui réduira la consommation de cycles CPU.

### Exemple

Optimiser le code suivant :
```php
echo "Lorem ipsum dolor sit amet, consectetur adi- pisicing elit, sed do eiusmod tempor incididunt.";
```
par :
```php
echo 'Lorem ipsum dolor sit amet, consectetur adi- pisicing elit, sed do eiusmod tempor incididunt.';
```
### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de ligne de code utilisant des guillements  | 10%  |
