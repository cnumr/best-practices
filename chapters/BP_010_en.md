## Store static data locally

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|  205    | 10  | 10  |      |

### Catégories

|    Life cycle     |   Tiers    |      Responsible      |
|:-----------------:|:----------:|:---------------------:|
| 3. Implementation | Datacenter | Architect / Developer |

### Indications

| Priority | Implementation difficulty | Ecological impact |
|:--------:|:-------------------------:|:-----------------:|
|    4     |             3             |         4         |

|  Ressources saved  |
|:------------------:|
| Network / Requests |

### Description

With the support of key-value databases (IndexedDB, Web Storage) and of the Cache Storage API in all browsers, it is 
possible to store static data locally on the client side.

Using this approach allow to reduce the number of HTTP requests, which saves resources. This can lead to a reduction of 
the number of server side equipments necessary, and the reduction of the associated environnemental costs.

It is also good for the performance and responsiveness of the application : since the data is local, it is much faster 
to use it. So it also reduces the pressure to the obsolescence of the device on the client side, encouraging 
a longer life span of the device.

### Validation rule

| The number of ...             | is equal to or less than |  
|-------------------------------|:------------------------:|
| static data non saved locally |           25%            |
