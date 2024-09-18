## Optimiser les images

### Identifiants

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   21    | 76  | 80  |     |     |

### Catégories

|                 Cycle de vie                 |        Tiers         | Responsable |
| :------------------------------------------: | :------------------: | :---------: |
| 3. Réalisation (fabrication / développement) | Utilisateur/Terminal | Utilisateur |

### Indications

| Degré de priorité | Mise en oeuvre | Impact écologique |
| :---------------: | :------------: | :---------------: |
|         4         |       3        |         4         |

|    Ressources Economisées    |
| :--------------------------: |
| Réseau / Requêtes / Stockage |

### Description

Réduire le poids des images consiste tout d’abord à choisir un format adapté. Réservez les images matricielles aux photos et aux éléments de l’interface qui ne peuvent pas être pris en charge par des icônes ou des styles CSS.
Le choix du format dépend des caractéristiques de l’image. Le fait de pouvoir dégrader l’image définitivement (lossy) oriente plutôt vers les formats JPEG, JPEG XL, AVIF ou WEBP, tandis qu’un besoin de transparence et/ou l’impossibilité de dégrader l’image (lossless) orientent vers un format PNG ou WEBP lossless.
En moyenne, une image .webp est 30 % plus légère qu’une image .jpg ou .png mais 20 % plus lourde qu’une image .avif.
Certains modules côté serveur (comme modPageSpeed de Google, disponible pour Apache et Nginx) fournissent même l’image idéale en rapport au navigateur appelant le serveur.

### Exemple

L’élément `<picture>` du DOM indique au navigateur qu’il y a deux images : une image .webp et une image.jpg, celle par défaut. Le navigateur décidera quelle image télécharger :

```html
<picture>
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="..." loading="lazy" />
</picture>
```

### Principe de validation

| Le nombre ...           | est inférieur ou égal à |
| ----------------------- | :---------------------: |
| d'images non optimisées |            0            |
