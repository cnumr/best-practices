## Prefer a simple, clean design, adapted to the web

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  5    | 6  | 5  |      |

### Categories

| Cycle de vie  |     Tiers     |  Responsable   |
|:-------------:|:-------------:|:--------------:|
| 2. Conception | User / device | UX/UI Designer |

### Indications

| Priority | Implementation difficulty | Ecological impact |
|:--------:|:-------------------------:|:-----------------:|
|    4     |            3              |        4          |

|     Ressources saved      |
|:-------------------------:|
| Processor / RAM / Network |

### Description

Tout design d'interface ou webdesign doit être réfléchi en amont, en prenant en compte :
- les besoins de l'utilisateur (voir la bonne pratique "Optimiser le parcours utilisateur")
- les heuristiques d'ergonomie (Bastien et Scapin, Nielsen, etc.)
- les contraintes techniques
- les bonnes pratiques d'écoconception
- et de préférence les bonnes pratiques d'accessibilité

Any interface design or web design must be thought out upstream, taking into account:
- the needs of the user (see the good practice "Optimize the user journey")
- ergonomic heuristics (Bastien and Scapin, Nielsen, etc.)
- technical constraints
- good eco-design practices
- and, preferably, good accessibility practices

**Prefer a simple, clean design, achievable with HTML5 and CSS3 only.**

### Exemple

**Description :** Some sites contain framed, non-contrasted and non-readable images (RGAA) and create an unnecessary
mental overload (2.2. Informational Density of Scapin and Bastien). Downloaded, they are however not visible on mobile
(eco-design). One can sometimes raise the inconsistency between signage and colorimetry (1.2.2. Grouping/Distinction 
by the Format of Scapin and Bastien).

**Recommandation :** Remove background images and add a glyph (Prefer glyphs to images, good eco-design practice) with
consistent colorimetry if grouping needed.

### Validation rule

| The number of ...                                | is equal to or below |  
|--------------------------------------------------|:--------------------:|
| pages whose design is more busy than necessary   |          0           |
