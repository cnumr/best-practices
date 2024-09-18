## Reduce the number of domains serving resources

### Identifiers

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   170   | 55  | 18  |     |     |

### Categories

|  Life cycle   |  Tiers  |         Responsible          |
| :-----------: | :-----: | :--------------------------: |
| 4. Production | Network | Software Architect/Developer |

### Indications

| Priority | Implementation difficulty | Ecological impact |
| :------: | :-----------------------: | :---------------: |
|    3     |             3             |         4         |

| Saved resources |
| :-------------: |
|     Queries     |

### Description

When a website or online service hosts web pages components on multiple domains, HTTP connection must be established with each of these domains by the browser. Once the HTML page is received,
the browser fetch resources while going through the DOM (Document Object Model).
Some resources are essential for the web page to work. If they are hosted on unresponsive domains, the page can become slower. When possible, all resources should be grouped together on a single domain.

The only exception to this rule would be the hosting of static resources (stylesheets, images, etc.) on a dedicated domain
to avoid the upload of one or more cookies for each HTTP GET by the browser. Response time will decrease as well as unnecessarily consumed bandwidth.

### Example

For an institutional website with high traffic, two subdomains should be preferred:

- application server on www.domain.tld
- “cookie-less” media server on media.domain.tld

This reduces the number of domains and avoids needlessly transporting cookies with each HTTP GET request on static resources.

### Validation rule

| The number of ...         | is equal to or less than |
| ------------------------- | :----------------------: |
| domains serving resources |            5             |
