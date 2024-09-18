## Favoriser HSTS Preload list aux redirections 301

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  1060    |   | 84  |      |

RGESN : 3.1

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 4. Production | Réseau | Administrateur systèmes |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Réseau / Requêtes  |

### Description

Le protocole HTTP Strict Transport Security (HSTS) permet d’indiquer à n’importe quel navigateur, via un header de réponse HTTP gardé en cache, que le domaine doit exclusivement être contacté en HTTPS. Cela permet aux requêtes suivantes, émises sur le même domaine, d’être exclusivement contactées avec le protocole HTTPS, ce qui évite une multitude de redirections 301 (pour forcer les appels en HTTPS).

Néanmoins, le premier appel exige une réponse (potentiellement non sécurisée) HTTP avec un header STS. Pour pallier ce problème et obliger les navigateurs à contacter l’intégralité du domaine en HTTPS, il est possible, en plus d’activer le HSTS, de s’enregistrer dans une liste statique mise à jour sur tous les navigateurs récents (https://hstspreload.org). L’enregistrement est rapide et concerne l’intégralité du domaine (sous-domaines inclus). 

Avant d’effectuer cet enregistrement, assurez vous d'être sûr de pouvoir prendre en charge HTTPS sur l'ensemble des sous-domaines à long terme car une demande de suppression de la liste peut prendre plusieurs mois.


### Exemple

Exemple de configuration pour Nginx
```nginxconf
add_header Strict-Transport-Security 'max-age=63072000; includeSubDomains; preload; always'
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de non activations de HSTS  | 0  |
