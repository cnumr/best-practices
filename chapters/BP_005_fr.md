## Favoriser un design simple, épuré, adapté au web

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  5    | 6  | 5  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| 5       | 5                  | 5                  | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur / Mémoire vive / Réseau   |

### Description

Tout design d'interface ou webdesign doit être réfléchi en amont, en prenant en compte :
- les besoins de l'utilisateur (cf BP Optimiser le parcours utilisateur)
- les heuristiques d'ergonomie (Bastien et Scapin, Nielsen, etc.)
- les contraintes techniques
- les bonnes pratiques d'écoconception

Privilégiez un design réalisable en HTML5 et CSS3.

### Exemple

Proposer des dégradés de couleurs, un style de coins arrondis, etc., qui puissent être réalisés en CSS3 au lieu de nécessiter des images.
```css
/* Exemple de bords arrondis */
.box_round {
-webkit-border-radius: 12px; /* Saf3-4, iOS
1-3.2, Android ≤1.6 */
border-radius: 12px; /* Opera 10.5, IE9, Saf5, Chrome, FF4+, iOS 4, Android 2.1+ */
/* useful if you don’t want a bg color from leaking outside the border: */
-moz-background-clip: padding; -webkit-background- clip: padding-box; background-clip: padding-box;
}

/* Exemple d’ombre sous la boite */
.box_shadow {
-webkit-box-shadow: 0px 0px 4px 0px #ﬀﬀﬀ; /*
Saf3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
box-shadow: 0px 0px 4px 0px #ﬀﬀﬀ; /* Opera 10.5, IE9, FF4+, Chrome 6+, iOS 5 */
}
```
Imaginer des bandeaux, headers, etc., de sorte que le texte, les fonds de couleur, etc. soient réalisables en HTML/CSS. Pour plus d’exemples, voir :
http://css3please.com

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|  de design non adapté au Web |  1 |
