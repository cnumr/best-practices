# Les 115 bonnes pratiques
## Le projet

Le contenu du référentiel d'écoconception a été publié par Frédéric Bordage / GreenIT.fr chez Eyrolles sous le titre:

1. ""écoconception web : les 100 bonnes pratiques"" en octobre 2012
2. ""écoconception web : les 115 bonnes pratiques, 2ème édition"" en septembre 2015
3. ""écoconception web : les 115 bonnes pratiques, 3ème édition"" en avril 2019.

Nous remercions chaleureusement l'ensemble des contributrices et contributeurs qui ont participé à la mise au point de ce référentiel et le font évoluer depuis presque de 10 ans.

Nous vous invitons à participer à la prochaine version en suivant [le guide des contributeurs](CONTRIBUTING.md).


## Les membres présents sur ce dépôt
Nom / Prénom                                        | Entreprise
------------                                        | -------------         
[Emmanuel Demey](https://github.com/EmmanuelDemey)  | -
[Romuald Priol](https://github.com/DocRoms)         | -
[Thomas Lemaire](https://github.com/ACTLEM)         | -

## Les besoins
Ce référentiel date d'il y a quelques années, bien qu'il ai été mis à jour en 2015 et en 2019, il y a des règles qui 
meritent d'être débattues, d'être ajoutées, et certaines d'être supprimées (:speak_no_evil:) .
Nous avons donc besoin de faire le ménage :tada: et de réactualiser ce référentiel.

## Comment contribuer ?
...

## La liste des 115 Bonnes pratiques
### Légende
 :heavy_check_mark: Règle mise à jour depuis la `v3.0.0`, validée pour la `v4.0.0`
 
 :beginner: Règle actuellement en discussion [ici](https://github.com/cnumr/best-practices/discussions/categories/bonnes-pratiques)
 
 :o: Règle non mise à jour depuis la `v3.0.0`
 
### Liste des bonnes pratiques
* :o: #001 [Eliminer les fonctionnalités non essentielles](/chapters/BP_001_fr.md)
* :o: #002 [Quantifier précisément le besoin](/chapters/BP_002_fr.md)
* :o: #003 [Fluidifier le processus](/chapters/BP_003_fr.md)
* :o: #004 [Préférer la saisie assistée à l'autocomplétions](/chapters/BP_004_fr.md)
* :o: #005 [Favoriser un design simple, épuré, adapté au web](/chapters/BP_005_fr.md)
* :o: #006 [Privilégier une approche "mobile first", à défaut RESS](/chapters/BP_006_fr.md)
* :o: #007 [Respecter le principe de navigation rapide dans l’historique](/chapters/BP_007_fr.md)
* :o: #008 [Proposer un traitement asynchrone lorsque c'est possible](/chapters/BP_008_fr.md)
* :o: #009 [Limiter le nombre de requêtes HTTP](/chapters/BP_009_fr.md)
* :o: #010 [Stocker les données statiques localement](/chapters/BP_010_fr.md)
* :o: #011 [Utiliser un framework ou développer sur mesure](/chapters/BP_011_fr.md)
* :beginner: #012 [Limiter le recours aux plugins](/chapters/BP_012_fr.md)
* :o: #013 [Favoriser les pages statiques](/chapters/BP_013_fr.md)
* :o: #014 [Créer une architecture applicative modulaire](/chapters/BP_014_fr.md)
* :o: #015 [Choisir les technologies les plus adaptées](/chapters/BP_015_fr.md)
* :o: #016 [Utiliser certains forks applicatifs orientés "performance"](/chapters/BP_016_fr.md)
* :o: #017 [Choisir un format de données adapté](/chapters/BP_017_fr.md)
* :o: #018 [Limiter le nombre de domaine servant les ressources](/chapters/BP_018_fr.md)
* :o: #019 [Remplacer les boutons officiels de partage des réseaux sociaux](/chapters/BP_019_fr.md)
* :o: #020 [Générer des spritesheets CSS](/chapters/BP_020_fr.md)
* :o: #021 [Découper les CSS](/chapters/BP_021_fr.md)
* :o: #022 [Limiter le nombre de CSS](/chapters/BP_022_fr.md)
* :o: #023 [Préférer les CSS aux images](/chapters/BP_023_fr.md)
* :o: #024 [Ecrire des sélecteurs CSS efficaces](/chapters/BP_024_fr.md)
* :o: #025 [Grouper les déclarations CSS similaires](/chapters/BP_025_fr.md)
* :o: #026 [Utiliser les notations CSS abrégées](/chapters/BP_026_fr.md)
* :o: #027 [Fournir une CSS print](/chapters/BP_027_fr.md)
* :o: #028 [Utiliser les commentaires conditionnels](/chapters/BP_028_fr.md)
* :o: #029 [Favoriser les polices standards](/chapters/BP_029_fr.md)
* :o: #030 [Préférer les glyphs aux images](/chapters/BP_030_fr.md)
* :o: #031 [Valider les pages auprès du W3C](/chapters/BP_031_fr.md)
* :o: #032 [Externaliser les CSS et JavaScript](/chapters/BP_032_fr.md)
* :o: #033 [Supprimer les balises images dont l’attribut SRC est vide](/chapters/BP_033_fr.md)
* :o: #034 [Redimensionner les images en dehors du HTML](/chapters/BP_034_fr.md)
* :o: #035 [Eviter d'utiliser des images bitmap pour l'interface](/chapters/BP_035_fr.md)
* :o: #036 [Optimiser les images vectorielles](/chapters/BP_036_fr.md)
* :o: #037 [Utiliser le chargement paresseux des images](/chapters/BP_037_fr.md)
* :o: #038 [Utiliser Ajax pour certaines zones de contenu](/chapters/BP_038_fr.md)
* :o: #039 [Eviter les animations Javascript / CSS coûteuses](/chapters/BP_039_fr.md)
* :o: #040 [N'utilisez que les portions indispensables des librairies Javascript et frameworks CSS](/chapters/BP_040_fr.md)
* :o: #041 [Ne pas faire de modification du DOM lorsqu’on le traverse](/chapters/BP_041_fr.md)
* :o: #042 [Rendre les éléments du DOM invisibles lors de leur modification](/chapters/BP_042_fr.md)
* :o: #043 [Réduire au maximum le repaint (appearence) et le reflow (layout)](/chapters/BP_043_fr.md)
* :o: #044 [Utiliser la délégation d'évènements](/chapters/BP_044_fr.md)
* :o: #045 [Modifier plusieurs propriétés CSS en 1 seule fois](/chapters/BP_045_fr.md)
* :o: #046 [Valider votre code avec un Linter](/chapters/BP_046_fr.md)
* :o: #047 [Eviter d'utiliser try-catch-finally](/chapters/BP_047_fr.md)
* :o: #048 [Utiliser les opérations primitives](/chapters/BP_048_fr.md)
* :o: #049 [Mettre en cache les objets souvent accédés en JavaScript](/chapters/BP_049_fr.md)
* :o: #050 [Privilégier les variables locales](/chapters/BP_050_fr.md)
* :o: #051 [Priviliégier les fonctions anonymes](/chapters/BP_051_fr.md)
* :o: #052 [Donner des fonctions en paramètre à setTimeout() et setInterval() plutôt que des string](/chapters/BP_052_fr.md)
* :o: #053 [Utiliser une boucle au lieu de .forEach() (ou reduce())](/chapters/BP_053_fr.md)
* :o: #054 [Réduire les accès au DOM via JavaScript](/chapters/BP_054_fr.md)
* :o: #055 [Privilégier les changements visuels instantanés](/chapters/BP_055_fr.md)
* :o: #056 [Utiliser un système de templating (Smarty, Twig)](/chapters/BP_056_fr.md)
* :o: #057 [Utiliser tous les niveaux de cache du CMS](/chapters/BP_057_fr.md)
* :o: #058 [Générer les PDF en dehors du CMS](/chapters/BP_058_fr.md)
* :o: #059 [Redimensionner les images en dehors du CMS](/chapters/BP_059_fr.md)
* :o: #060 [Encoder les sons en dehors du CMS](/chapters/BP_060_fr.md)
* :o: #061 [Utiliser un thème léger](/chapters/BP_061_fr.md)
* :o: #062 [Eviter la ré-écriture des getter / setter natifs](/chapters/BP_062_fr.md)
* :o: #063 [Ne pas assigner inutilement de valeur aux variables](/chapters/BP_063_fr.md)
* :o: #064 [Mettre en cache les données calculées souvent utilisées](/chapters/BP_064_fr.md)
* :o: #065 [Mettre en cache le Bytecode code intermédiaire](/chapters/BP_065_fr.md)
* :beginner: #066 [Utiliser la simple côte (') au lieu du guillemet (")](/chapters/BP_066_fr.md)
* :beginner: #067 [Remplacer les $i++ par ++$i](/chapters/BP_067_fr.md)
* :o: #068 [Libérer de la mémoire les variables qui ne sont plus nécessaires](/chapters/BP_068_fr.md)
* :o: #069 [Ne pas appeler de fonction dans la déclaration d’une boucle de type for](/chapters/BP_069_fr.md)
* :o: #070 [Supprimer tous les warning et toutes les notices](/chapters/BP_070_fr.md)
* :o: #071 [Utiliser des variables statiques](/chapters/BP_071_fr.md)
* :o: #072 [Eviter d'effectuer des requêtes SQL à l’intérieur d’une boucle](/chapters/BP_072_fr.md)
* :o: #073 [Ne se connecter à une base de données que si nécessaire](/chapters/BP_073_fr.md)
* :o: #074 [Ne jamais faire de SELECT * FROM](/chapters/BP_074_fr.md)
* :o: #075 [Limiter le nombre de résultats (clause LIMIT)](/chapters/BP_075_fr.md)
* :o: #076 [Utiliser les procédures stockées](/chapters/BP_076_fr.md)
* :o: #077 [Minifier les fichiers CSS](/chapters/BP_077_fr.md)
* :o: #078 [Compresser les librairies CSS et Javascript](/chapters/BP_078_fr.md)
* :o: #079 [Combiner les fichiers CSS et JavaScript](/chapters/BP_079_fr.md)
* :o: #080 [Optimiser les images bitmap](/chapters/BP_080_fr.md)
* :o: #081 [Minifier les fichiers JavaScript](/chapters/BP_081_fr.md)
* :o: #082 [Optimiser la taille des cookies](/chapters/BP_082_fr.md)
* :o: #083 [Compresser la sortie HTML](/chapters/BP_083_fr.md)
* :o: #084 [Favoriser HSTS Preload list aux redirections 301](/chapters/BP_084_fr.md)
* :o: #085 [Mettre en place un plan de fin de vie du site](/chapters/BP_085_fr.md)
* :o: #086 [Choisir un hébergeur "vert"](/chapters/BP_086_fr.md)
* :o: #087 [Utiliser une électricité issue d'EnR (renouvelable)](/chapters/BP_087_fr.md)
* :o: #088 [Adapter la qualité de service et le niveau de disponibilité](/chapters/BP_088_fr.md)
* :o: #089 [Utiliser des serveurs virtualisés](/chapters/BP_089_fr.md)
* :o: #090 [Optimiser l'efficacité énergétique des serveurs](/chapters/BP_090_fr.md)
* :o: #091 [Installer le minimum requis sur le serveur](/chapters/BP_091_fr.md)
* :o: #092 [Mettre les caches entièrement en RAM (opcode et kvs)](/chapters/BP_092_fr.md)
* :o: #093 [Stocker les données dans le cloud](/chapters/BP_093_fr.md)
* :o: #094 [Héberger les ressources (CSS/JS) sur un domaine sans cookie](/chapters/BP_094_fr.md)
* :o: #095 [Eviter les redirections](/chapters/BP_095_fr.md)
* :o: #096 [Ne pas générer de page 404](/chapters/BP_096_fr.md)
* :o: #097 [Utiliser un serveur asynchrone](/chapters/BP_097_fr.md)
* :o: #098 [Utiliser un CDN](/chapters/BP_098_fr.md)
* :o: #099 [Utiliser un cache HTTP](/chapters/BP_099_fr.md)
* :o: #100 [Mettre en cache le favicon.ico](/chapters/BP_100_fr.md)
* :o: #101 [Ajouter des entêtes Expires ou Cache-Control](/chapters/BP_101_fr.md)
* :o: #102 [Mettre en cache les réponses Ajax](/chapters/BP_102_fr.md)
* :o: #103 [Désactiver certains logs d’accès du serveur web](/chapters/BP_103_fr.md)
* :o: #104 [Désactiver le DNS lookup d’Apache](/chapters/BP_104_fr.md)
* :o: #105 [Apache Vhost : désactiver le AllowOverride](/chapters/BP_105_fr.md)
* :o: #106 [Désactiver les logs binaires de MySQL / MariaDb](/chapters/BP_106_fr.md)
* :o: #107 [Compresser les documents](/chapters/BP_107_fr.md)
* :o: #108 [Optimiser les PDF](/chapters/BP_108_fr.md)
* :o: #109 [Dédoublonner systématiquement les fichiers avant envoi](/chapters/BP_109_fr.md)
* :o: #110 [N'utiliser que des fichiers double opt-in](/chapters/BP_110_fr.md)
* :beginner: #111 [Préférer le texte brut au HTML](/chapters/BP_111_fr.md)
* :o: #112 [Adapter les sons aux contextes d'écoute](/chapters/BP_112_fr.md)
* :o: #113 [Adapter les textes au web](/chapters/BP_113_fr.md)
* :o: #114 [Adapter les vidéos aux contextes de visualisation](/chapters/BP_114_fr.md)
* :beginner: #115 [Limiter l'utilisation du Flash](/chapters/BP_115_fr.md)

### Liste des bonnes pratiques ajoutées en v4.0.0
* ...

### Liste des bonnes pratiques supprimées en v4.0.0
* ...

## Licence

Les sources et contenus de ce projet sont [protégés](LICENCE.md)
