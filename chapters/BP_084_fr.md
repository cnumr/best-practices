## Favoriser HSTS Preload list aux redirections 301

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  1060    |   | 84  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |  Standard                 |    Fort               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Réseau / Requêtes  |

### Description

Le HSTS permet d’indiquer à n’importe quel navigateur, via un hea- der de réponse HTTP gardé en cache que le domaine doit exclusive- ment être contacté en HTTPS.

Cela permet aux requêtes suivantes, émises sur le même domaine, d’être exclusivement contactées avec le protocole HTTPS, ce qui évite une multitude de redirections 301.
Néanmoins, le premier appel exige une réponse (potentiellement non sécurisé) HTTP avec un header STS.
Pour pallier ce problème, et obliger les navigateurs à contacter l’inté- gralité du domaine en HTTPS, il est possible, en plus d’activer le HSTS, de s’enregistrer dans une liste statique mise à jour sur tous les navigateurs récents : https://hstspreload.org.

Il est important de noter que l’enregistrement de son domaine sur htstpreload.org est rapide et concerne l’intégralité du domaine, (sous- domaines inclus). Avant d’effectuer cet enregistrement, qui est relati- vement lent à supprimer, veillez qu’aucun de vos sous-domaines ne soient perturbés par la mise en place du HTTPS

### Exemple

Exemple de configuration
```apacheconf
Strict-Transport-Security : max-age = 63072000 ; includeSubDomains ; preload
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de non activation de HSTS  | 0  |
