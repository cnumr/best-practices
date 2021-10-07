## Installer le minimum requis sur le serveur
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |  Facile                   |    Fort               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Mémoire vive / Stockage  |

### Règle
Désinstaller tous les services qui ne sont pas indispensables au bon fonctionnement du site. Cette mesure supprimera nécessairement des daemons (agents et services fonctionnant en permanence en mémoire), qui sont consommateurs de ressources, notamment en cycles CPU et en mémoire vive.

### Exemple
Privilégier une installation « manuelle » du serveur (LAMP + CMS, par exemple) plutôt qu’une distribution avec une surcouche de type cPanel ou Plesk. Et si une surcouche d’administration est nécessaire, préférer des solutions légères comme Webmin.

### Principe de validation
