## Store static data locally

### Identifiers

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   205   | 10  | 10  |     |     |

### Catégories

|    Life cycle     |   Tiers    |      Responsible      |
| :---------------: | :--------: | :-------------------: |
| 3. Implementation | Datacenter | Architect / Developer |

### Indications

| Priority | Implementation difficulty | Ecological impact |
| :------: | :-----------------------: | :---------------: |
|    4     |             3             |         4         |

|  Ressources saved  |
| :----------------: |
| Network / Requests |

### Description

It is possible to store static data locally on the client side with the support of key-value databases (IndexedDB, Web Storage) and of the Cache Storage API in all browsers.

Using this approach allows to reduce the number of HTTP requests, which saves resources. This can lead to reducing the number of necessary equipment on server side, thus reducing the associated environmental costs.

It is also better for the application performance and responsiveness: it is much faster to use it since the data is locally stored. It reduces devices’ obsolescence on the client side, expanding hardware’s life span.

### Validation rule

| The number of ...             | is equal to or less than |
| ----------------------------- | :----------------------: |
| static data non saved locally |           25%            |
