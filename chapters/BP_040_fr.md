## N'utilisez que les portions indispensables des librairies JavaScript et frameworks CSS

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   811   | 77  | 40  |      |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 2. Conception | Réseau | Architecte Logiciel/Développeur |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 4 | 4 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Mémoire vive / Réseau |

### Description

Les bibliothèques JavaScript telles que jQuery et les frameworks CSS prêts à l’emploi (Bootstrap, skeleton, gumby, foundation…)
sont d’excellents outils pour réaliser rapidement des sites, car ils répondent à presque tous les besoins les plus courants. 
Revers de la médaille, on n’en utilise généralement qu’une petite portion ; or ces frameworks et bibliothèques ne s’appuient pas tous sur une architecture modulaire, 
ce qui contraint l’internaute à télécharger toute la librairie pour n’utiliser qu’un faible pourcentage de ses fonctionnalités.

Dans la mesure du possible, il est préférable de se passer de ces bibliothèques (voir https://youmightnotneedjquery.com)
ou de n’en conserver que les portions réellement utilisées (voir https://getbootstrap.com/customize).

Utiliser un bundler (ex: Webpack) permet de faire facilement du tree shaking, soit d'éliminer du code "mort" donc non utilisé.

### Exemple

![img_1.png](img_1.png)

Certains frameworks, ici Bootstrap, permettent de créer des bibliothèques sur mesure qui ne contenant que les portions réellement
utilisées par le site, ce qui réduit le poids des bibliothèques et les ressources consommées lors de l’exécution.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de librairies dont des portions non indispensables sont utilisées  | 1  |
