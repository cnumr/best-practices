---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: fr
published: false
---
## Préférer la saisie assistée à l'autocomplétion

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  204    | 4  | 4  |      |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 1. Spécification | Utilisateur/Terminal | PO/AMOA |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 3 | 3 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Requêtes    |

### Description

L'autocomplétion, ou complément automatique est une fonctionnalité très répandue consistant à suggérer à l'utilisateur
des résultats correspondant à sa recherche pendant sa saisie. Par exemple, un site permettant de rechercher un itinéraire
va proposer « Paris », « Lyon Part-Dieu » et « Paray le Monial » quand l'utilisateur tape « Par ».

L'implémentation de l'autocomplétion consiste à envoyer une requête au serveur à chaque caractère saisi pour récupérer les
résultats correspondants. On peut donc avoir beaucoup de requêtes effectuées et beaucoup de ressources dépensées.

Dans la mesure du possible, cette fonctionnalité est à remplacer par la saisie assistée.
Cela consiste à guider l’utilisateur par un ensemble d’informations et d’indices : 
 - Présentation du format attendu en grisé dans le champ de saisie (`placeholder`)
 - Texte expliquant le format attendu
 - Réaction de l’interface avec un message d’erreur ou un changement de couleur et aide textuelle lorsque la saisie est incorrecte
 - etc.

Les interactions liées à la saisie assistée sont gérées localement, ce qui réduit les échanges avec le serveur.

Pour l'exemple de la recherche d'itinéraire et de la complétion des villes, il est possible, en cas d'ambiguïté, de proposer
les différents résultats après la soumission du formulaire. L'utilisateur entre une chaine de caractère, par exemple « Lens »,
soumet le formulaire, et se voit à ce moment proposées différentes options : « Lens (France) », « Lens (Belgique) », 
« Loison sous Lens ».

Si le recours à l'autocomplétion ne peut pas être évité il est possible de minimiser le nombre de requêtes avec des optimisations simples : 
 - Ajouter un délai de quelque dixièmes de secondes entre l'ajout d'un caractère et la requête : cela permet de ne pas déclencher de requête si l'utilisateur n'a pas terminé sa saisie.
 - Limiter le nombre de résultats affichés par l'autocomplétion, priorisés par une note de pertinence
 - Fixer un nombre de caractères minimal avant de chercher à compléter.
 - Si la taille de la base de données le permet, l'inclure dans le code html ou dans le `local storage` et effectuer l'autocomplétion côté client.
 - Mettre en cache les résultats des recherches avec pour clef la chaîne saisie pour moins solliciter la base de données.
 - Contextualiser les résultats pour en limiter le nombre.

### Exemple

Gain potentiel : à chaque fois que l’on utilise la saisie assistée pour une fonctionnalité, plutôt que l’autocomplétion, on réduit le nombre de requêtes associées par un facteur 10.

### Solution alternative

Si la donnée qui est proposée à l'utilisateur est assez petite en quantité, vous pouvez l'inclure directement dans votre code HTML et utiliser l'éléments natif [datalist](https://developer.mozilla.org/fr/docs/Web/HTML/Element/datalist).

Ce système proposera nativement, et sans aller/retour avec le serveur, un mécanisme d'autocompletion.

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
