## Utiliser Ajax pour certaines zones de contenu

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  40    |  49 | 38  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|   Prioritaire     |     Difficile             |    Moyen              | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur / Mémoire vive / Réseau   |

### Description

En général, les gabarits des pages sont mis en cache au niveau des reverse proxies. Il est alors conseillé de générer par
des appels Ajax les zones de contenu qui nécessitent un taux de rafraîchissement plus élevé.

Ainsi, le serveur applicatif ne génère que les parties dynamiques des pages, et non les pages entières.

### Exemple

Les sites d’actualité utilisent très souvent ce procédé, qui permet d’identifier clairement les zones qui nécessitent 
d’être mises à jour rapidement (flash d’informations, données météo, cours de la Bourse, résultats sportifs, etc.).

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de zones de contenu pouvant être mis à jour via AJAX mais qui ne le sont pas  | 10%  |
