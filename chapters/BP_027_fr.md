## Fournir une CSS print

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   16   | 30  | 27  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |   facile                  |  Fort                 | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|    |

### Règle

Outre le service apporté à l’internaute, cette feuille de styles réduit le nombre de pages imprimées, 
et donc indirectement l’empreinte écologique du site web. La plus dépouillée possible, elle doit proposer une police
de caractères économe en encre (Century Gothic, par exemple). Pensez aussi à masquer le header, le footer, le menu, le sidebar,
supprimer toutes les images sauf celles du contenu, etc.

### Exemple

Cette CSS print « nettoie » la page affichée à l’écran afin de proposer une impression épurée :
```css
body {
background-color :#ﬀf; font-family :Serif; font-size :15pt;
}
#page { margin :0;
border :none;
}
#banner, #menuright, #footer { display :none;
}
h1#top { margin :0;
padding :0;
text-indent :0; line-height :25pt; font-size :25pt;
} (...)
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| minimum de CSS print est égal à   |  1 |
