## Remplacer les boutons officiels de partage des réseaux sociaux

### Identifiants

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   910   |     | 19  | 59  |     |

RGESN : 2.10

### Catégories

|                 Cycle de vie                 |        Tiers         |  Responsable   |
| :------------------------------------------: | :------------------: | :------------: |
| 3. Réalisation (fabrication / développement) | Utilisateur/Terminal | UX/UI Designer |

### Indications

| Degré de priorité | Mise en oeuvre | Impact écologique |
| :---------------: | :------------: | :---------------: |
|         4         |       4        |         4         |

| Ressources Economisées |
| :--------------------: |
|   Réseau / Requêtes    |

### Description

Les principaux réseaux sociaux tels que Facebook, X (anciennement Twitter), Pinterest, etc. fournissent des plugins à installer sur une page web pour y afficher un bouton Partager ou un compteur de J’aime. Ces plugins JavaScript sont très gourmands en ressources : pour fonctionner, ils nécessitent un grand nombre de requêtes et de télécharger des fichiers lourds. Mieux vaut leur préférer des liens directs, en HTML, vers les pages de partage. On peut générer ces liens à la main (voir ci-dessous) ou via un outil tel que https://www.sharelinkgenerator.com/.
Cette bonne pratique ne se limite pas aux réseaux sociaux !

### Exemple

On peut ajouter un bouton qui ouvre une pop-up de partage comme le font les boutons officiels, par exemple avec le code suivant :

```html
<button
  type="button"
  onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=XXXXX', '', 'menubar = no, toolbar = no, resizable = yes, scrollbars = yes, height = 500, width = 700')"
>
  Je partage cette page sur Facebook
</button>
```

Pour aller plus loin :
https://www.nuweb.fr/736

### Principe de validation

| Le nombre ...             | est inférieur ou égal à |
| ------------------------- | :---------------------: |
| de bibliothèques externes |            0            |
