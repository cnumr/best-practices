## Limiter le nombre de requêtes HTTP

### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       | Standard                  | Fort                  | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Réseau / Requêtes    |

### Règle
Le temps de chargement d’une page côté navigateur est directement corrélé au nombre de fichiers que le navigateur doit télécharger, et au poids unitaire de chaque fichier.

Pour chaque fichier, le navigateur émet un GET HTTP vers le serveur est directement corrélé au nombre de fichiers que le navigateur doit télécharger, et au poids unitaire de chaque fichier.

Il attend sa réponse, puis télécharge la ressource dès qu’elle est disponible. Selon le type de serveur web que vous utilisez, plus le nombre de requêtes par page est important, moins vous pourrez servir de pages par serveur. Diminuer le nombre de requêtes par page est crucial pour réduire le nombre de serveurs HTTP nécessaires au fonctionnement du site, et donc les impacts environnementaux associés.

De nombreuses approches permettent de réduire le nombre de requêtes par page :
 - combiner les fichiers statiques : bibliothèques CSS et JavaScript, notamment (voir la bonne pratique n° 81) ;
 - utiliser un sprite CSS (voir la bonne pratique n° 23) pour regrouper les images de l’interface ;
 - préférer les glyphes aux images (voir la bonne pratique n° 18) et plus généralement les images vectorielles aux matricielles ;
 - mettre en cache navigateur tout ce qui peut l’être.

### Exemple
Gain potentiel : réduction de la charge serveur, donc du nombre d’équipements nécessaires – de leur empreinte environnementale et économique –, des serveurs HTTP jusqu’aux serveurs d’applications et aux SGBD/R.

### Solution alternative
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

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de requêtes HTTP  | 40  |
