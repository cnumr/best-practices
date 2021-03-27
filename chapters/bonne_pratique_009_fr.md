## Limiter le nombre de requêtes HTTP

### Règle

### Exemple


### Solution alternatives
#### Differential Loading

Afin de limiter la taille de votre code JavaScript, vous pouvez mettre en place une pratique nommée 
**Differential Loading**. Cette pratique consiste, via des outils reconnu de l'écosystème JavaScript comme Webpack ou encore rollup, de générer deux livrables :

* un pour les navigateurs récents, utilisant les toutes dernières syntaxes du langage
* un pour les vieux navigateurs utilisant du code JavaScript compatible ECMAScript5. 
  
Le premier livrable étant bien entendu obligatoirement plus petit en terme de poids que le second.

Ensuite, pour indiquer quelle version soit être téléchargée par le navigateur, nous allons utiliser la syntaxe 
**module/nomodule**. Les navigateurs récents utiliseront l'import `type=module` et pour les autres l'import avec l'attribut `nomodule`.

```html
<script type="module" src="app.js"></script>
<script nomodule src="app-legacy.js"></script>
```

### Principe de validation
