## N'utilisez que les portions indispensables des librairies Javascript et frameworks CSS
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Prioritaire      |   Difficile               | Moyen                 | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Mémoire vive / Réseau |

### Règle
Les bibliothèques JavaScript telles que jQuery, mootools, YUI et les frameworks CSS prêts à l’emploi (Bootstrap, skeleton, gumby, founda- tion…) sont d’excellents outils pour réaliser rapidement des sites, car ils répondent à presque tous les besoins les plus courants. Revers de la médaille, on n’en utilise généralement qu’une petite portion ; or ces fra- meworks et bibliothèques ne s’appuient pas tous sur une architecture modulaire, ce qui contraint l’internaute à télécharger toute la librairie pour n’utiliser qu’un faible pourcentage de ses fonctionnalités.

Dans la mesure du possible, il est préférable de se passer de ces biblio- thèques (voir http://youmightnotneedjquery.com) ou de n’en conserver que les portions réellement utilisées (voir http://getbootstrap.com/custo- mize). Si cette approche n’est pas envisageable, télécharger les sources et créer un build custom qui ne comprend que les composants nécessaires

### Exemple
![img_1.png](img_1.png)

Certains frameworks, ici Bootstrap, permettent de créer des bibliothèques sur mesure qui ne contenant que les portions réellement utilisées par le site, ce qui réduit le poids des bibliothèques et les ressources consommées lors de l’exécution.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|   |   |
