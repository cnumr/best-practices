## Utiliser des serveurs virtualisés
### Indications
| Degré de priorité |      Mise en oeuvre       |  Impact écologique    | 
|-------------------|:-------------------------:|:---------------------:|
|  Non Prioritaire  |  Difficile                |    Fort               | 


|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Processeur / Mémoire |

### Règle
Au lieu d’utiliser un serveur dédié pour chaque projet, et de le charger au maximum à 20 % de sa capacité, mutualiser les ressources machine en mettant en place un hyperviseur. En effet, une seule machine physique pourra offrir les mêmes services que 4 serveurs dédiés et chargés à 20 %. Le processeur et la mémoire vive seront utilisés de façon optimale, tout en consommant moins d’électricité que plusieurs serveurs physiques. Cette démarche permet également de réduire la quantité de déchets électroniques (DEEE) générés par le site.

### Exemple
Utiliser des outils de virtualisation tels que VMware, Xen, KVM, etc.

### Principe de validation
