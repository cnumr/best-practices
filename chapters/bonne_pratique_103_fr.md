## Désactiver certains logs d’accès du serveur web
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Conseille         |  Standard                 |    Moyen              | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Mémoire vive / Stockage  |

### Règle
Les logs d’accès du serveur web pouvant devenir très volumineux en fonction du trafic, il est recommandé de désactiver tous ceux qui ne sont pas indispensables. En limitant le nombre d’événements consi- gnés dans le log de l’application, on évite des écritures sur le disque, ce qui limite la consommation de cycles CPU et réduit l’espace de stockage nécessaire.

### Exemple
Configurer les logs Apache comme suit :
```apacheconf
SetEnvIf Request_URI".(ico|pdf|ﬂv|jpg|jpeg|png|gif| js|css|gz|swf|txt)$"dontlog
SetEnvIf Request_URI"^/rss/"dontlog CustomLog /var/log/apache/access.log combined env=!dontlog
```
### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|   |   |
