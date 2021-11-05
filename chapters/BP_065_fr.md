## Mettre en cache le Bytecode code intermédiaire

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  64    | 61  | 65  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
| Prioritaire       |  Standard                 | Fort                  | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur / Mémoire vive |

### Description

Le bytecode (appelé opcode dans le cas de PHP) est le code binaire généré à partir du code source. Certains accélérateurs permettent de mettre en cache ce bytecode, ce qui évite de le recompiler à chaque fois à partir du code source. Cette réduction du temps de compilation économise des cycles CPU et de la mémoire vive.

### Exemple

Un script de référence PHP peut servir :
 - 298 requêtes par minute (sans accélérateur) ;
 - 914 requêtes par minute (avec l’accélérateur APC). Soit 3 fois plus de requêtes pour la même machine.

Pour consulter la liste des accélérateurs pour PHP :
http://en.wikipedia.org/wiki/List_of_PHP_accelerators
On peut aussi citer le compilateur HipHop for PHP, qui permet de traduire le code source PHP en C++, lequel est ensuite compilé en binaires natifs à l’aide de g++.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de codes sources non mis en cache intermédiaire  | 10%  |
