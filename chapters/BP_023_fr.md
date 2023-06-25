## Préférer les CSS aux images

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  11    | 26  | 23  |      |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 3. Réalisation (fabrication / développement) | Réseau | Architecte Logiciel/Développeur |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Réseau / Requêtes  |

### Description

Utiliser les propriétés CSS à la place d’images. En effet, le poids d’une feuille de styles est bien plus faible, 
surtout si elle est compressée. En outre, l’appel d’une feuille de styles ne génère qu’une seule requête HTTP, 
contre un grand nombre si l’on emploie beaucoup d’images
(une requête HTTP pour chaque image).

### Exemple

Les coins arrondis des cases doivent être gérés en CSS plutôt qu’avec des images.

Préférer l’écriture :
```css
#cadre {
    border-radius: 10px;
}
```

```html
<div id="cadre">
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
</div>
```


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|  d'images qui auraient pu être remplacées par des CSS |  0 |
