# Contribuer au référentiel de bonnes pratiques

> [!IMPORTANT]
> Cette documentation est ancienne et ne correspond plus à la réalité. Il faut utiliser maintenant la plateforme de contribution [URL à définir].

Tout personne qui le souhaite peut se proposer pour contribuer au référentiel.

Les règles du présent document devront être respectées.

L'équipe projet en charge de ce repository s'assure de la bonne tenue de ces règles.

## But des contributions

Les contributions ont pour but :

- De supprimer les bonnes pratiques obsolètes, non applicables ou sans effet
- D’ajouter des bonnes pratiques qui semblent pertinentes, sont issues du terrain
- D’associer aux nouvelles bonnes pratiques une règle de conformité
- De vérifier, améliorer le cas échéant les bonnes pratiques existantes ainsi que leur règle de conformité
- De proposer toute idée qui pourrait améliorer le référentiel d'une manière générale et le cas échéant la mettre en place

## Règles générales

- Tout le monde a sa place, chacun peut apporter son expérience
- La convivialité, le partage, la courtoisie et la bienveillance sont des règles d'or dans les échanges
- Chaque bonne pratique doit être le résultat d'un retour terrain ou d'une approche scientifique
- Ces bonnes pratiques sont aussi un aide mémoire donc même une bonne pratique simple, de bon sens peut avoir sa place

## Equipe Projet

L'équipe projet est constituée de:

- [Thomas Broyer](https://github.com/tbroyer)
- [Raphaël Lemaire](https://github.com/rlemaire)
- [Romuald Priol](https://github.com/DocRoms)
- [Thomas Lemaire](https://github.com/ACTLEM)

Cette équipe s'assure que les règles instaurées pour la contribution soient respectées.

En cas de désaccord entre contributeurs, son rôle est aussi de trancher une décision.

L'équipe projet fait preuve de transparence et fait en sorte que les décisions soient les plus collégiales possibles.

L'équipe projet est responsable de la validation définitive des `Pull Request` et donc de l'intégration de la proposition d'ajout, de modification ou de suppression dans le référentiel.

Un membre de l'équipe projet peut soumettre une proposition aux contributeurs mais ne peut pas être responsable seul de la validation ou non de celle-ci : il faut un consensus de l'équipe projet.

## Proposition

Chaque proposition d'ajout, de modification majeure ou de suppression de bonnes pratiques doit passer par [une discussion](https://github.com/cnumr/best-practices/discussions/categories/bonnes-pratiques).

Le titre de la discussion doit être explicite et doit spécifier s'il s'agit d'un ajout, d'une modification majeure ou d'une suppression.

Une modification majeure peut être:

- Une modification importante du niveau de priorité, c'est à dire des niveaux de mise en oeuvre et d'impacts écologique
- L'ajout ou la suppression d'élément dans la définition de la règle
- L'ajout ou la suppression d'exemples
- La modification de la règle de conformité

Tout contributeur peut donner son avis sur la proposition:

- En cas d'accord, un contributeur clique sur la "flèche vers le haut"
- En cas de désaccord, un contributeur ajoute un "pouce bas" et devra obligatoirement expliquer via un commentaire les raisons de son désaccord
- En cas d'incompréhension, il peut entamer une discussion pour demander des précisions
- En cas d'idée d'amélioration, il peut la proposer

Lorsqu'une proposition reçoit plusieurs votes positifs, l'équipe projet est sollicitée et évalue la pertinence de la bonne pratique.

Les cas suivants peuvent se produire:

- La proposition est validée et le contributeur peut créer une `Issue` avec la discussion en référence
- La proposition est définitivement rejetée avec justification
- La proposition doit être retravaillée avant une décision finale

L'`Issue` créée devra contenir le tag `création`, `modification` ou `suppression` suivant le type de proposition et être rattachée au projet [`Bonnes Pratiques V5`](https://github.com/cnumr/best-practices/projects/2).

En cas d'ajout, le fichier sera nommé suivant le pattern suivant: `BP-5xxx-fr.md` avec `5xxx` le numéro de la bonne pratique qui sera défini par l'équipe projet.

Le fichier sera à copier à partir du [template](./resources/BP_xxxx_fr.md)

Une `Pull Request` associée à l'`Issue` sera créée et soumise à l'équipe projet qui est en charge de la revue.

La création de `Pull Request` suite le processus classique au sein de Github, à savoir:

- Création d'un `fork` personnelle de la personne en charge de la `Pull Request`
- Ajout du repository d'origine comme remote (`upstream`)
- Création d'une branche sur le fork personnel
- Créer une `Pull Request` à partir du fork en mettant comme cible la branche `main` du repository cible

## Amélioration

Pour les améliorations comme:

- Une correction d'orthographe, de grammaire ou de conjugaison
- Une autre formulation
- Une autre mise en forme

Il n'est pas nécessaire de passer par une discussion, il faut:

- Créer une `Issue` avec un intitulé explicite et les tags `modification` et `mineur`
- Développer et créer la PR associée sans oublier la référence à l'`Issue`

## Contenu d'une bonne pratique

Chaque bonne pratique devra obligatoirement contenir:

- Un titre
- Un degré de priorité (sur 5, 5 = prioritaire, 1 = non prioritaire)
- Une difficulté de mise en oeuvre (sur 5, 5 = facile, 1 = difficile)
- Un niveau d'impact écologique (sur 5, 5 = fort, 1 = faible)
- Une description
- Une règle de validation et un seuil de conformité

Les éléments suivants sont facultatifs:

- Un ou des exemples
- Une solution alternative

### Règle de validation et seuil de conformité

La règle de validation permet de tester la mise en oeuvre de la bonne pratique avec une approche objective.
Le seuil de conformité associe à la règle de validation une valeur numérique (seuil) qui permet de décider de façon binaire (oui/non) si la bonne pratique a été mise en oeuvre ou pas.
L'ensemble des règles de validation et des seuils de conformité permettent d'établir un niveau de maturité atteint par le service numérique.

### Définition des niveaux

Trois niveaux doivent être définis pour une bonne pratique :
1. Mise en oeuvre (facilité ou difficulté à mettre en oeuvre la bonne pratique)
2. Impacts environnemental (contribution plus ou moins forte à la réduction des impacts env.)
3. Priorité (ce niveau est défini en fonction de 1. et 2.)

Chacun de ces niveaux est défini par une note de 1 à 5.

#### Mise en oeuvre (higher is better)
   
La facilité ou difficulté de mise en oeuvre peut être évaluée de la manière suivante :

1. La mise en oeuvre nécessite un haut niveau d'expertise ET une refonte en profondeur du projet
2. La mise en oeuvre nécessite un haut niveau d'expertise OU une refonte en profondeur du projet
3. Le mise en oeuvre demande une compétence particulière sans être rare (ex: SEO, DBA, ...) ET n'a pas besoin de refonte en profondeur du projet
4. La mise en oeuvre ne nécessite pas compétence particulière OU n'a pas d'effet de bord sur le reste du projet
5. La mise en oeuvre ne nécessite pas compétence particulière ET n'a pas d'effet de bord sur le reste du projet

#### Impact environnemental (higher is better)

Cet apport peut être évalué de la manière suivante :

1. Elle réduit la consommation électrique des réseaux ou serveurs à équipements constants
2. Elle réduit la consommation électrique sur la majorité des terminaux utilisateurs
3. Elle limite le besoin en ressources informatiques côté serveur
4. Elle limite le risque de saturation des réseaux mobiles ou fixes
5. Elle limite les risques d'obsolescence des terminaux utilisateurs

#### Priorité (higher is better)

Le niveau de priorité est proposé librement par le contributeur et s'appuie sur la Mise en oeuvre et l'Impact environnemental.
