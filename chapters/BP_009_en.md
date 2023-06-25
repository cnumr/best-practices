## Limit the number of HTTP requests

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|   180   |  9  |  9  |      |

### Categories

|    Life cycle     |  Tiers  |      Responsible      |
|:-----------------:|:-------:|:---------------------:|
| 3. Implementation | Network | Architect / Developer |

### Indications

| Priority | Implementation difficulty | Ecological impact |
|:--------:|:-------------------------:|:-----------------:|
|   4      |             3             |         4         |

| Ressources saved  |
|:-----------------:|
| Réseau / Requêtes |

### Description

The loading time of a page in the browser is correlated to the number of files that must be downloaded and to the size 
of these files.

Depending on the server type, the number of requests can limit the number of pages that be served to the users.
Reducing the number of requests by page allow the reduction of the number of HTTP servers, and maybe of other components
of the architecture like databases and application servers.

Although the issue is much less potent with the use of HTTP 2, having a lot of requests can significantly impact the
performance of the application of the client side. In any case, having too many requests is a good sign that some improvements
can be performed on the application.

### Example

To display the small flags in a language picker, using a CSS spritesheet (ie grouping all the small images in one bigger 
picture, then selecting the displayed one on the client side with CSS), allow to reduce the number of requests associated to
this feature

### Validation rule

| the number ... | is equal to or less than |  
|----------------|:------------------------:|
| HTTP requests  |            40            |
