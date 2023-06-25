## Create a modular application architecture

### Identifiers

| GreenIT | V2  | V3  | V4  |
|:-------:|:---:|:---:|:---:|
|   114   | 52  | 14  |     |

### Categories

| Life cycle |   Tiers    |      Responsible      |
|:----------:|:----------:|:---------------------:|
| 2. Design  | Datacenter | Architect / Developer |

### Indications

| Priority | Implementation difficulty | Ecological impact |
|:--------:|:-------------------------:|:-----------------:|
|    3     |             3             |         3         |

|       Ressources saved       |
|:----------------------------:|
| Processor / RAM / Disk space |

### Description

The modular architecture popularized by open source software often brings a greater scalability, reduce maintenance costs 
and a more efficient code.

If the functional coverage of the website or web service can evolve, it is interesting to implement the basic
features in a core application than can be extended with plugins. Those plugins can be developed independently and
shared between applications.

This approach can be use at all levels, for a custom solution, or for the choice of an HTTP server or a CMS.

### Example

Popular open source software, largely used on the web like NGINX, Apache, MySQL or PHP, use a modular architecture.

The microservice architecture allow some level of modularity, but be careful on how the concerns are spread among the 
components and how they interact : added complexity, network calls, and other unintended negative consequences can 
increase resources consumption.

### Validation rule

| The number of ...         | is equal to or less than |  
|---------------------------|:------------------------:|
| Non modular architectures |             0            |
