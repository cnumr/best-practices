## Utiliser la délégation d'évènements

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  41    | 46  | 44  |      |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 3. Réalisation (fabrication / développement) | Utilisateur/Terminal | Architecte Logiciel/Développeur |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 3 | 4 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur / Mémoire vive   |

### Description

La délégation d’événements évite de surcharger la mémoire du navigateur en instanciant un seul écouteur pour plusieurs éléments du DOM.
Le principe est le suivant : au lieu d’assigner un événement à plusieurs éléments de la page, vous pouvez mettre un seul événement sur un élément parent de ces objets. C’est dans ce gestionnaire d'événement que l'élément déclencheur sera déterminé grâce à event.target.
Plus d’infos sur  : https://fr.javascript.info/event-delegation


### Exemple

Exemple de script pour surligner une cellule de tableau :
```html
<script type="text/javascript">
        let selectedTd;

table.onclick = function(event) {
  let target = event.target; 
  if (target.tagName != 'TD') return; 
  highlight(target);
};

function highlight(td) {
              if (selectedTd) { 
   selectedTd.classList.remove('highlight');
  }
  selectedTd = td;
  selectedTd.classList.add('highlight'); }
</script>
Ici on ne greffe pas un événement sur chaque cellule mais uniquement sur le tableau.

```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| Le nombre de listeners qui n’utilise pas la délégation d’événements est égal à  | 0  |
