## Désactiver le DNS lookup d’Apache

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  84    | 100  | 104  |      |

RGESN : 3.1

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 4. Production | Datacenter | Administrateur systèmes |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 2 | 2 | 3 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Réseau  |

### Description

À chaque fois qu’un serveur web reçoit une requête HTTP, il enregistre cette information dans un log, en traduisant l’adresse IP en nom de domaine. Cette conversion (DNS Lookup) constitue l’un des goulots d’étranglement de certains serveurs HTTP (Apachenotamment). Désactiver le DNS Lookup permet d’éviter de consommer des ressources serveurs inutilement et accélère le temps de chargement des pages améliorant l’expérience utilisateur.

### Exemple

Sur un serveur Apache, éditer le fichier de configuration  (`/etc/apache/httpd.conf` ou `/etc/apache2/apache2.conf`), et ajouter cette directive :
```apacheconf
 HostnameLookups Off
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de DNS lookup actif  |  0 |
