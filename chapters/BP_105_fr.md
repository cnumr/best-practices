## Apache Vhost : désactiver le AllowOverride

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  81    | 101  | 105  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|-------------------|:-------------------------:|:---------------------:|
| 2 | 2 | 3 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur  |

### Description

Lorsque la directive `AllowOverride` est activée, le serveur HTTP Apache doit remonter toute la hiérarchie des répertoires pour,
peut-être, y trouver un fichier .htaccess contenant des règles de surcharge. 
C’est pourquoi il est conseillé de désactiver si possible cette directive dans la configuration d’Apache.

### Exemple

Dans le fichier de configuration de votre hôte Apache, ajouter :
```apacheconf
AllowOverride none
```

Pour aller plus loin :
https://httpd.apache.org/docs/2.0/mod/core.html#allowoverride

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|  de fichiers de configuration contenant le texte "AllowOverride" avec autre chose que "AllowOverride None" | 0  |
