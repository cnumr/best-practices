## Prefer static web pages

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|    3    | 51  | 13  |      |

### Categories

| Life cycle |     Tiers     |      Responsible      |
|:----------:|:-------------:|:---------------------:|
| 2. Design  | User / Device | Architect / Developer |

### Indications

| Priority | Implementation difficulty | Ecological impact |
|:--------:|:-------------------------:|:-----------------:|
|     4    |             3             |         5         |

| Ressources saved |
|:----------------:|
| Processor / RAM  |

### Description

If a page is only modified twice a year, there's no use for a CMS : static pages are fine. Using it will permit
to save CPU, bandwidth, power, etc.

A CMS typically requires several software layers to display content : the HTTP server, the application server (the CMS itself),
and the database, with optional cache systems. A static page is directly served to the user by the HTTP server from the 
file system. There's no need for an application server or database.


### Example

Depending on the digital service, the following solutions can be applied :
- for a landing page or a simple display site, a static page, written directly in HTML, CSS (and optionally JS) can be created
- for a blog with low activity, a JAMstack architecture, with a content generator like Jekyll, Hugo,
Gasby or Eleventy can be used. If necessary, a  headless CMS or a headless flat-file CMS (Strapi, Contenful, Flextype, etc.) can be added.
- for more complex web applications, some pages with low edit rate (FAQ, About, legal terms, ...) can be made static.

### Validation rule

| The number of ... | is equal to or less than |  
|-------------------|:------------------------:|
| dynamic pages is  |           25%            |
