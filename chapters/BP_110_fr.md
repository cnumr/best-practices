## Utiliser uniquement des emails validés par double consentement

### Identifiants

| GreenIT |  V2  |  V3  | V4  | V5  |
|:-------:|:----:|:----:|:---:|:---:|
|  103    | 111  | 110  | 101 |

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 2. Conception | Utilisateur/Terminal | PO/AMOA |

### Indications

| Degré de priorité | Mise en oeuvre |  Impact écologique    |
|:-------------------:|:--------------:|:---------------------:|
| 2 |       2        | 2 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
|  Processeur / Réseau / Requêtes |

### Description

Le double opt-in est une pratique marketing consistant à demander le consentement du prospect d’ajouter son e-mail à des listes de diffusion en 2 étapes. D’abord par accord électronique en renseignant son e-mail tout en cochant une case d’approbation, et ensuite en faisant valider ce consentement par l’envoi d’un e-mail de confirmation à l’adresse indiquée. L’état de l’adresse devient double opt-in dans la base de données lorsque le destinataire a cliqué sur le lien contenu dans l’e-mail de confirmation.
Ce procédé permet en même temps de valider l’adresse e-mail et de vérifier que la personne qui l’a fournie en est bien propriétaire. Cette double vérification confirme ainsi l’engagement du prospect pour recevoir des communications, des newsletters, souscrire à un abonnement, etc.
Il est donc recommandé d’utiliser la pratique du double opt-in pour réduire significativement :
 - le nombre d’e-mails envoyés sans véritable impact (et donc la bande passante consommée) ;
 - la charge du serveur SMTP lors de l’envoi de l’e-mailing ;
 - la charge du serveur lors du traitement des désabonnements.

### Exemple

Dans le cas d’un opérateur téléphonique ou d’une banque, laisser aux clients le choix parmi un catalogue de produits ou de services pour lesquels ils acceptent d’être sollicités. Intégrez le double opt-in pour valider doublement ce consentement et offrez une fonction de désabonnement (opt-out) rapide conformément à la réglementation RGPD.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
|  de contacts e-mail qui n’ont pas été validés par un double opt-in | 0  |
