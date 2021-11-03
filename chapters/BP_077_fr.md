## Minifier les fichiers CSS, JS et HTML

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  12    | 78  | 77  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire (5/5)|  Facile (1/5)              |    Fort               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Réseau   |

### Description

Utiliser un outil tel que YUI Compressor pour supprimer les espaces et sauts de ligne inutiles. Le module Apache mod_pagespeed de Google permet aussi d’automatiser cette opération.

### Exemple

YUI Compressor de Yahoo! fournit un ensemble de filtres spécialisés, qui permettent notamment d’effectuer les opérations suivantes :
 - suppression des commentaires et des espaces ;
 - suppression du dernier point-virgule ;
 - suppression des points-virgules superflus ;
 - suppression des déclarations vides ;
 - suppression des unités quand la valeur est 0 et concaténation des 0
en un seul ;
 - suppression du 0 pour les valeurs inférieures à 1 ;
 - remplacement des couleurs RGB en hexa et remplacement des hexa codées sur 6 caractères par des hexa codées sur 3 caractères ;
 - suppression des charsets supplémentaires ;
 - optimisation des valeurs d’opacité de la couche alpha sur Internet Explorer ;
 - remplacement de none par 0.


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de fichiers textes non minifiés  | 0  |
