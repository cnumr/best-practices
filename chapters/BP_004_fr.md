## Préférer la saisie assistée à l'autocomplétion

### Identifiants

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   204   |  4  |  4  |     |     |

### Catégories

|   Cycle de vie   |        Tiers         | Responsable |
| :--------------: | :------------------: | :---------: |
| 1. Spécification | Utilisateur/Terminal |   PO/AMOA   |

### Indications

| Degré de priorité | Mise en oeuvre | Impact écologique |
| :---------------: | :------------: | :---------------: |
|         3         |       3        |         3         |

| Ressources Economisées |
| :--------------------: |
|        Requêtes        |

### Description

L’autocomplétion suggère à l’utilisateur des résultats correspondant à sa recherche pendant sa saisie. À chaque caractère saisi, une requête est envoyée au serveur pour récupérer les résultats appropriés. Ce qui peut être coûteux.

Préférez la saisie assistée qui consiste à guider l’utilisateur par un ensemble d’informations et d’indices gérés localement, ce qui réduit les échanges avec le serveur.

Minimisez l’impact de l’autocomplétion avec des optimisations simples : délai de quelques dixièmes de secondes entre l’ajout d’un caractère et la requête, ne lancer la requête qu’après avoir saisi un certain nombre de caractères, limitation du nombre de résultats affichés, etc.

Pour minimiser les allers-retours, si la donnée proposée à l’utilisateur est en assez petite quantité, vous pouvez l’inclure directement dans votre code HTML et utiliser l’élément natif <datalist>.

### Exemple

L’élément `<datalist>` un aller-retour avec le serveur.

```html
<label for="ice-cream-choice">Choose a flavor:</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
  <option value="Chocolate"></option>
  <option value="Coconut"></option>
  <option value="Mint"></option>
  <option value="Strawberry"></option>
  <option value="Vanilla"></option>
</datalist>
```

### Principe de validation

| Le nombre ...               | est inférieur ou égal à |
| --------------------------- | :---------------------: |
| de champs en autocomplétion |           20%           |
