## Choose the most appropriate technologies

### Identifiers

| GreenIT | V2  | V3  | V4  |
|:-------:|:---:|:---:|:---:|
|    1    | 11  | 15  |     |

### Categories

|   Life cycle   |   Tiers    |      Responsible      |
|:--------------:|:----------:|:---------------------:|
| 3. Development | Datacenter | Architect / Developer |

### Indications

| Priority | Implementation difficulty | Ecological impact |
|:--------:|:-------------------------:|:-----------------:|
|    4     |             4             |         5         |

|     Ressources saved      |
|:-------------------------:|
| Processor / RAM / Network |

### Description

The choice of the right technologies is very important to save resources : select the most efficient ones, depending on
the need and context.

For instance, using static pages for a site which content doesn't change much allow it to be cached, and will avoid
the deployment of application servers and databases.

In the case of a dynamic website, the custom developments allow more relevant technical optimisations, and allow to use
the strict minimum to answer the user's needs.

If you have a part of a web application that relies on a small number of pages and deliver a bounded functional service 
(purchase, estimate request, ...), using a SPA (Single Page Application) may be interesting. It avoids requests and makes
the user experience more fluid.

### Exemple

A seldomly updated display site about an enterprise with a contact form should rely on static web pages.

### Validation rule

| The number of ...          | is equal to or less than |  
|----------------------------|:------------------------:|
| poorly chosen technologies |            1             |
