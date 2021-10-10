## Désactiver le DNS lookup d’Apache
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Conseille         |  Facile                   |    Moyen              | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Réseau  |

### Règle
À chaque fois qu’un serveur web reçoit une requête HTTP, il enre- gistre cette information dans un log, en traduisant généralement l’adresse IP de l’internaute en nom de domaine. Cette conversion (DNS Lookup) constitue l’un des goulots d’étranglement du serveur HTTP Apache.

À désactiver donc.

### Exemple
Dans le fichier de configuration de votre serveur Apache, situé à l’adresse `/etc/apache/httpd.conf` ou à l’adresse `/etc/apache2/apache2.conf`, écrire :
```apacheconf
 HostnameLookups Off
```

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de DNS lookup actif  |  0 |
