## Supprimer tous les warning et toutes les notices
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |  Standard                 |    Fort               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur / Stokage   |

### Règle
Les warnings et notices ralentissent les serveurs d’applications tels que PHP, car ces derniers doivent retracer l’origine des erreurs et inscrire dans les différents journaux système les messages expliquant les problèmes rencontrés.

### Exemple
Éviter :
```html
<html>
    <body>
        <form method="post" accept-charset="utf-8">
            <input type="text" name="ﬁrst_name" value="<?php print $_POST['ﬁrst_name'] ?>" placeholder="">
            <input type="text" name="last_name" value="<?php print $_POST['last_name'] ?>" placeholder="">
        </form>
    </body>
</html>
```
`$_POST['ﬁrst_name']` et `$_POST['last_name']` font générer des notices car ils ne sont pas nécessairement définis.


### Principe de validation
