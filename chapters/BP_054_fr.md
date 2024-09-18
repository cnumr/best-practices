## Réduire les accès au DOM via JavaScript

### Identifiants

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   32    | 42  | 54  |     |     |

### Catégories

|                 Cycle de vie                 |        Tiers         |           Responsable           |
| :------------------------------------------: | :------------------: | :-----------------------------: |
| 3. Réalisation (fabrication / développement) | Utilisateur/Terminal | Architecte Logiciel/Développeur |

### Indications

| Degré de priorité | Mise en oeuvre | Impact écologique |
| :---------------: | :------------: | :---------------: |
|         3         |       3        |         3         |

|  Ressources Economisées   |
| :-----------------------: |
| Processeur / Mémoire vive |

### Description

L’accès au DOM via JavaScript est une procédure lourde qui consomme beaucoup de cycles processeur (CPU), d’autant plus si la page a un DOM important. Réduisez autant que possible ces accès.

Pour cela, vous pouvez assigner le nœud dans des variables que vous réutiliserez lors du cycle de vie de l’application, ce qui évite de retraverser l’arbre à chaque manipulation du document.

Si la page a un DOM important, il peut être judicieux d’utiliser des bibliothèques de type « Shadow DOM », qui optimisent les modifications de l’arbre par un système de batch.

### Exemple

Pour en savoir plus, vous pouvez consulter le projet de Shadow DOM du W3C :
https://w3c.github.io/webcomponents/spec/shadow/
et les préconisations du W3C pour réduire les accès au DOM via JavaScript :
https://www.w3.org/wiki/JavaScript_best_practices#Keep_DOM_access_to_a_minimum

### Principe de validation

| Le nombre ...                                                 | est inférieur ou égal à |
| ------------------------------------------------------------- | :---------------------: |
| d'accès à un élément HTML sans passer par une variable locale |            0            |
