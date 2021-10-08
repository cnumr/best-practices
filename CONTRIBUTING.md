# Contribuer au référentiel de bonnes pratiques

Tout personne qui le souhaite peut se proposer pour contribuer au référentiel.

Les règles du présent document devront être respectées.

Une équipe projet s'assure de la bonne tenue de ces règles.

## But des contributions 

Les contributions ont pour but :

- De supprimer les bonnes pratiques obsolètes, non applicables ou sans effet
- De challenger les bonnes pratiques très orientées programmation et langage (étudier le remplacement par des bonnes pratiques agnostiques au langage)
- D’ajouter des bonnes pratiques qui semblent pertinentes, sont issues du terrain
- D’associer aux nouvelles bonnes pratiques une règle de conformité
- De vérifier, améliorer le cas échéant les bonnes pratiques existantes ainsi que leur règle de conformité
- De passer les niveaux d'impact écologique de 3 à 5 niveaux
- De proposer et le cas échéant mettre en place toute idée qui pourrait améliorer le référentiel d'une manière générale

## Règles générales

- Tout le monde a sa place, chacun peut apporter son expérience
- La convivialité, le partage, la courtoisie sont des règles d'or dans les échanges
- Chaque bonne pratique doit être le résultat d'un retour terrain ou d'une approche scientifique
- Ces bonnes pratiques sont aussi un aide mémoire donc même une bonne pratique simple, de bon sens peut avoir sa place

## Equipe Projet

L'équipe projet est constituée de:

- ...
- ...
- ...

Cette équipe s'assure que les règles instaurées pour la contribution soient respectées.

En cas de désaccord entre contributeurs, son rôle est aussi de trancher dans la décision.

L'équipe projet fait preuve de transparence et fait en sorte que les décisions soient les plus collégiales possibles.

L'équipe projet est responsable de la validation définitive des `Pull Request` et donc de l'intégration de la proposition d'ajout, de modification ou de suppression dans le référentiel.

Un membre de l'équipe projet peut soumettre une proposition aux contributeurs mais ne peut pas être responsable de la validation ou non de celle-ci.

## Proposition

Chaque proposition d'ajout, de modification majeure ou de suppression de bonnes pratiques doit passer par [une discussion](https://github.com/cnumr/best-practices/discussions/categories/bonnes-pratiques).

L'état des différentes bonnes pratiques est résumé sur la [page d'accueil du repository](README.md)

Le titre de la discussion doit être explicite et doit spécifier s'il s'agit d'un ajout, d'une modification majeure ou d'une suppression.

Une modification majeure peut être:

- La modification du niveau d'impact écologique
- L'ajout ou la suppression d'élément dans la définition de la règle
- L'ajout ou la suppression d'exemples
- La modification de la règle de conformité

Tout contributeur peut donner son avis sur la proposition:

- En cas d'accord, un contributeur ajoute un "pouce haut"
- En cas de désaccord, un contributeur ajoute un "pouce bas" et devra obligatoirement expliquer via un commentaire les raisons de son désaccord
- En cas d'incompréhension, il peut entamer une discussion pour demander des précisions
- En cas d'idée d'amélioration, il peut proposer son idée

Lorsqu'une proposition reçoit plusieurs votes positifs, l'équipe projet est sollicitée et évalue la pertinence de la bonne pratique.

Les cas suivants peuvent se produire:

- La proposition est validée et une `Issue` est créée avec la discussion en référence
- La proposition est définitivement rejetée avec justification
- La proposition doit être retravaillée avant une décision finale

L'`Issue` créée devra contenir le tag `création`, `modification` ou `suppression` suivant le type de proposition.

Une `Pull Request` associée à l'`Issue` sera créée et soumise à l'équipe projet.

Une fois la `Pull Request` validée, son état est mis à jour sur la page d'accueil du repository.

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
- Un degré de priorité
- Une difficulté de mise en oeuvre
- Un niveau d'impact écologique
- Une description
- Une règle de validation ou conformité

Les éléments suivants sont facultatifs:

- Un ou des exemples
- Une solution alternative

### Règle de validation ou conformité

La règle de validation ou conformité permet d'établir ou pas le respect de la bonne pratique.

### Définition du niveau d'impact écologique

L'impact écologique est établi sur une note de 1 à 5. 

Le niveau d'impact écologique correspond l'apport en termes de performance environnementale de la mise en place règle.

Cette apport peut être évaluée de la manière suivante:

- 5: Elle limite les risques d'obsolescence des terminaux utilisateurs
- 4: Elle limite le risque de saturation des réseaux mobiles ou fixes
- 3: Elle limite le besoin en ressources informatiques côté serveur
- 2: Elle réduit la consommation électrique sur la majorité des terminaux utilisateurs
- 1: Elle réduit la consommation électrique des réseaux ou serveurs à équipements constants

Si une bonne pratique répond à plusieurs niveaux de règles, c'est la plus élevée qui sera choisie.



