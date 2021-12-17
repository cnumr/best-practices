## Installer le minimum requis sur le serveur

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   74   | 89  | 91  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|-------------------|:-------------------------:|:---------------------:|
| 3 | 4 | 3 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Mémoire vive / Stockage  |

### Description

Désinstaller tous les services qui ne sont pas indispensables au bon fonctionnement du site. Cette mesure supprimera nécessairement des daemons (agents et services fonctionnant en permanence en mémoire), qui sont consommateurs de ressources, notamment en cycles CPU et en mémoire vive.

### Exemple

Privilégier une installation « manuelle » du serveur (LAMP + CMS, par exemple) plutôt qu’une distribution avec une surcouche de type cPanel ou Plesk. Et si une surcouche d’administration est nécessaire, préférer des solutions légères comme Webmin.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de services non nécessaires au fonctionnement du site exécutés sur le système d'exploitation  |  0 |
