## Use a CDN

### Identifiers

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   75    | 102 | 98  |     |     |

### Categories

|  Life cycle   |   Tiers    |     Responsible      |
| :-----------: | :--------: | :------------------: |
| 4. Production | Datacenter | System Administrator |

### Indications

| Priority | Implementation difficulty | Ecological impact |
| :------: | :-----------------------: | :---------------: |
|    4     |             3             |         4         |

| Saved resources |
| :-------------: |
| Processor / RAM |

### Description

Some files, such as JavaScript libraries, CSS stylesheets, images, etc., are network intensive because they are usually numerous and small.
This is why Content Delivery Networks (CDN) should be used, physically bringing these files closer to end-users, generating significant bandwidth savings and shorter response times.

Note that there may be cases when using CDN is not really relevant. For example, for very localized (regional) audiences
it is more appropriate to prioritize local and quality hosting solutions. On the other hand, websites with very little
traffic could make pull-based CDNs counterproductive as files extraction from the original server could be too recurrent.

### Example

Using CDNs provided by Google that host commonly used JavaScript libraries.

### Validation rule

| The number of ...                | is equal to or less than |
| -------------------------------- | :----------------------: |
| non-CDN-served resources (files) |           25%            |
