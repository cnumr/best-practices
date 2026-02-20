# Prise en main du template

Nous vous mettons à disposition le [template](WP_0.00_titre-de-la-bonne-pratique.md).

## Le titre

**Le titre (title) d'une bonne pratique se construit sous le format suivant <numero de cycle>.<numéro de la bonne pratique> <Titre de la bonne pratique>.**

- Le premier chiffre correspond au moment du cycle de vie d'un WordPress où votre bonne pratique s'inscrit.

1.  Analyse des besoins
2.  Installation
3.  Conception & Design
4.  Intégration & Développement
5.  Contenu & médias
6.  Tests & validation
7.  Mise en ligne
8.  Maintenance
9.  Fin de vie

- Le second correspond au numéro de la bonne pratique, à savoir à la suite de son groupe.

  Exemple : 3.08 Préférer faire des sites roses est bien une pratique correspondant au cycle de vie Conception & Design et est la huitième fiche de ce groupe.

  - Le fichier : WP_3.08_preferer-faire-des-sites-roses
  - Le `tilte` : 3.08 Préférer faire des sites roses
  - Le `path` : /fiches/WP_3.08_preferer-faire-des-sites-roses

## Le corps

Il est découpé en deux blocs, le premier est encadré par des `---` :

1. Dans cette première partie, vous trouverez les métadatas utiles pour générer convenablement le site (cf. [frontmatter](https://frontmatter.codes)).
2. Dans la deuxième partie se trouve le contenu de la bonne pratique elle-même.

> ⚠️ Attention si vous souhaitez utiliser des images, audios ou vidéos, il est nécessaire de tous les regrouper par bonne pratique dans le dossier `medias_<numero de la bonne pratique>` que vous aurez créé dans le dossier `fiches`.

## Explication de certaines métadatas

### Le cycle de vie

Le cycle de vie d'un service numérique regroupe les étapes par lesquelles ce service passe au cours du temps.
Nous l'avons défini comme suit :

- Analyse des besoins
- Installation
- Conception & Design
- Intégration & Développement
- Contenu & médias
- Tests & validation
- Mise en ligne
- Maintenance
- Fin de vie

### La priorité d'implémentation

Nous estimons la priorité de mettre en oeuvre une bonne pratique via ce système :

- Faible 👍
- Moyen 👍👍
- Fort 👍👍👍

### L'impact environnemental

Nous évaluons l'impact de chaque bonne pratique, voire de chaque solution proposée avec le système suivant :

- Faible 🌱
- Moyen 🌱🌱
- Fort 🌱🌱🌱

### Les ressources sauvegardées

Pour une meilleure compréhension, de la localisation de l'impact ou des impacts environnementaux :

- Processeur
- Mémoire vive
- Stockage
- Réseau
- Requêtes
