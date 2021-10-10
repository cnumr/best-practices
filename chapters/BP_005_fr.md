## Favoriser un design simple, épuré, adapté au web

### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       | Standard                  | Fort                  | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur / Mémoire vive / Réseau   |

### Règle
Exploiter les fonctionnalités d’HTML5 et de CSS3 pour concevoir le design d’un site. Il ne faut surtout pas imaginer un site sans prendre en compte les contraintes techniques, puis essayer de le réaliser.

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
