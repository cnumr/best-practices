## Reducing the number of domains serving resources

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   170   | 55  | 18  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 4. Production | Network | Software Architect/Developer |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 3 | 4 |

|Saved resources                                    |
|:----------------------------------------------------------:|
|  Queries  |

### Description

When a website or online service host web pages components on multiple domains,
an HTTP connection must be established with each of these domains by the browser. Once the HTML page is received,
browser will ask for resources as it goes through DOM (Document Object Model).
Some resources are essential to keep the web page working. Page loading can become slower if they are hosted on unresponsive domains. When possible, all resources should be grouped together in a single domain.

The only exception to this rule would be when hosting static resources (stylesheets, images, etc.) on a separate domain
to avoid transporting one or more cookies to each HTTP GET of the browser. Response time will decrease as well as unnecessarily consumed bandwidth.

### Example

For an institutional website with high traffic, two subdomains are preferred:
  - application server on www.domain.tld 
  - “cookie-less” media server on media.domain.tld

This reduces the number of domains while avoiding unnecessarily carrying cookies with each HTTP GET request on static resources.

### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
| resources serving domains   |  5 |
