## Cache Ajax responses

### Identifiers

| GreenIT | V2  |  V3  |  V4  |
|:-------:|:---:|:----:|:----:|
|    91   | 107 | 102  |      |

### Categories

|  Life cycle   |     Tiers     |         Responsible          |
|:-------------:|:-------------:|:----------------------------:|
| 4. Production | User/Terminal | Software Architect/Developer |

### Indications

|      Priority      | Implementation difficulty | Ecological impact |
|:------------------:|:-------------------------:|:-----------------:|
|         3          |             2             |         4         |

|                      Saved resources                      |
|:---------------------------------------------------------:|
|                     Network / Queries                     |

### Description

Ajax responses that will remain unchanged in the near future should not be requested from the server again. Caching them can save bandwidth.

### Example

If an Ajax request returns a list of city names, contact names, or any non-computed element, these responses should be cached on the client side to avoid generating other requests to the server.

### Validation rule

| The number of ...         | is equal to or less than |  
|---------------------------|:------------------------:|
| non-cached Ajax responses |           10%            |
