## Modifier plusieurs propriétés CSS en 1 seule fois

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  34    | 32  | 45  |      |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 3. Réalisation (fabrication / développement) | Utilisateur/Terminal | Architecte Logiciel/Développeur |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 4 | 2 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur |

### Description

Pour limiter le nombre de repaint/reﬂow, il est conseillé de ne pas modifier des propriétés une à une. 
Préférer l’ajout/la suppression de classes CSS, ce qui permet de modifier en une seule fois plusieurs propriétés, tout en ne générant qu’un repaint/reﬂow (voir [la bonne pratique n° 45](/chapters/bonne_pratique_045_fr.md)).

### Exemple

Préférer l’écriture :
```html
<style>
    .in-error { color: red;
        font-weight: bold;
    }
</style>
<script>
    $el.bind('error', function () {
        $el.addClass('in-error');
    });
    $el.bind('running'), function () {
        $el.removeClass('in-error');
    };
</script>
```


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de déclarations CSS pouvant être regroupées en une seule (margin, padding, ...), et n'utilisant pas la version courte  | 0  |
