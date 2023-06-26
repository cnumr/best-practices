## Supprimer tous les warning et toutes les notices

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   51   |  65 | 70  |      |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 4. Production | Datacenter | Administrateur systèmes |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 2 | 3 | 2 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur / Stockage   |

### Description

Les warnings et notices ralentissent les serveurs d’applications tels que PHP, car ces derniers doivent retracer l’origine des erreurs et inscrire dans les différents journaux système les messages expliquant les problèmes rencontrés.

### Exemple

Éviter :
```html
<html>
     <body>
         <form method="post" accept-charset="utf-8">
             <label>
                 First Name
                 <input type="text" name="ﬁrst_name" value="<?php print $_POST['ﬁrst_name'] ?>" placeholder="">
            </label>     
             <label>
                  Last Name
                  <input type="text" name="last_name" value="<?php print $_POST['last_name'] ?>" placeholder="">
             </label>     
         </form>
     </body>
</html>
```
`$_POST['ﬁrst_name']` et `$_POST['last_name']` font générer des notices car ils ne sont pas nécessairement définis.


### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de warning et notice en production | 0  |
