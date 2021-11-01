## Préférer la saisie assistée à l'autocomplétions

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  204    | 4  | 4  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       | Facile                    | Fort                  | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Requêtes    |

### Description

Le complètement automatique (autocomplétion) guide les utilisateurs en complétant automatiquement la fin du texte saisi dans un champ.
Cette fonctionnalité est parfois très pratique pour éviter des erreurs ou suggérer un axe de recherche, 
mais elle nécessite des allers-retours incessants entre le navigateur et le serveur (malgré la possibilité de
« caper » les échanges). Le navigateur envoie en effet chaque nouveau caractère ou mot saisi au serveur, 
qui lui renvoie un texte pour compléter la saisie de l’utilisateur. Le volume de données échangées est très faible, 
mais il sollicite beaucoup les serveurs et le réseau en termes de requêtes.

Dans la mesure du possible, cette fonctionnalité est à éviter et à remplacer si possible par la saisie assistée. 
Cela consiste à guider l’utilisateur par un ensemble d’informations et d’indices
(présentation du format attendu en grisé dans le champ de saisie, réaction de l’interface avec un message d’erreur, 
une aide lorsque la saisie est incorrecte…). Les interactions liées à la saisie assistée sont gérées localement, ce qui réduit les échanges avec le serveur.

### Exemple

Gain potentiel : à chaque fois que l’on utilise la saisie assistée pour une fonctionnalité, plutôt que l’autocomplétion, on réduit le nombre de requêtes associées par un facteur 10.

### Solution alternative
#### l'élement `<datalist></datalist>`

* Utilisation de l'élément HTML [datalist](https://developer.mozilla.org/fr/docs/Web/HTML/Element/datalist)

Si la données qui est proposée à l'utilisateur est assez petite en quantité, vous pouvez l'inclure directement dans votre code HTML et utiliser l'éléments natif `datalist`. Ce système proposera nativement, et sans aller/retour avec le serveur, un mécanisme d'autocompletion.

```html
<label for="ice-cream-choice">Choose a flavor:</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
    <option value="Chocolate">
    <option value="Coconut">
    <option value="Mint">
    <option value="Strawberry">
    <option value="Vanilla">
</datalist>
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de champs en autocomplétion  | 20%  |
