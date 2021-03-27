## Préférer la saisie assistée à l'autocomplétions

### Règle

### Exemple

### Solution alternatives
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
