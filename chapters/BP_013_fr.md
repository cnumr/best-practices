## Favoriser les pages statiques

### Identifiants

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|    3    | 51  | 13  |     |     |

### Catégories

| Cycle de vie  |        Tiers         |           Responsable           |
| :-----------: | :------------------: | :-----------------------------: |
| 2. Conception | Utilisateur/Terminal | Architecte Logiciel/Développeur |

### Indications

| Degré de priorité | Mise en oeuvre | Impact écologique |
| :---------------: | :------------: | :---------------: |
|         4         |       3        |         5         |

|  Ressources Economisées   |
| :-----------------------: |
| Processeur / Mémoire vive |

### Description

Si une page ne doit être modifiée que deux fois par an, préférer des pages statiques, construites en dehors du CMS.
Cela permettra d’économiser des cycles CPU, de la bande passante, et réduira la consommation électrique.

L’utilisation d’un système de gestion de contenu dynamique requiert en effet de charger les différentes couches logicielles
pour servir le contenu demandé par l’internaute : le serveur HTTP, le serveur d’applications, le système de stockage du contenu (base de données),
éventuellement les systèmes de cache associés, etc. En revanche, un fichier statique est directement lu et renvoyé à l’internaute par le serveur HTTP ou le serveur de cache, sans solliciter le serveur d’applications ou la base de données.

### Exemple

En fonction du service numérique à concevoir, il est envisageable :

- pour une landing page ou simple site vitrine de créer un site statique en HTML, CSS et JS.
- pour un blog avec peu d'activité, ou de petite taille, de créer un site statique généré via un JAMstack (Jekyll, Hugo, Gasby, Eleventy, etc.) administré, si nécessaire, via un headless CMS ou un headless flat-file CMS (Strapi, Contenful, Flextype, etc.).
- pour un site ou une application web plus complexe de rendre les pages à faible taux de modifications (FAQ, About, mentions légales, etc.) statiques en utilisant des frameworks (Next, Nuxt, Svelte, etc.).

### Principe de validation

| Le nombre ...           | est inférieur ou égal à |
| ----------------------- | :---------------------: |
| de pages dynamiques est |           25%           |
