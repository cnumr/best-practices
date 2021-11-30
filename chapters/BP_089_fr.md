## Utiliser des serveurs virtualisés

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   70   | 87  | 89  |      |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  1/5  |  1/5                |    5/5               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur / Mémoire |

### Description


La virtualisation est une technologie permettant de créer et d’exécuter des représentations virtuelles d’un ordinateur sur une ou plusieurs machines physiques. Le logiciel en charge de la virtualisation se charge d'allouer les ressources entre les différents environnements virtuels en fonction de leurs besoins.

En conséquence, la vitualisation permet :
* une économie sur le matériel par mutualisation
* une utilisation optimale des ressources (RAM, CPU, disque)

Cette démarche réduit la quantité de déchets électroniques (DEEE) et la consommation électrique comparé à l'utilisation de plusieurs serveurs physiques.

La conteneurisation est le compagnon à la virtualisation : une machine virtuelle peut accueillir un service de conteneurisation. Il va permettre d'executer de manière isolé plusieurs applications sur le même système d'exploitation.

### Exemple

Utiliser des outils de virtualisation tels que VMware, Xen, KVM, etc.

Utiliser des outils de conteneurisation tels que Docker, Kubernetes, etc.

Au lieu d’utiliser quatre serveurs dédiés pour quatre projets, et de les charger au maximum à 20 % de leur capacité, mutualiser les ressources en mettant en place un hyperviseur. En effet, une seule machine physique pourra offrir les mêmes services que les quatre serveurs dédiés. 

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| d'applications non conteunerisées |  0% |
