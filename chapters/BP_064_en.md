## Cache frequently used calculated data

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|   47    | 62  | 64  |      |

### Categories

| Life cycle |  Tiers  |         Responsible          |
|:----------:|:-------:|:----------------------------:|
| 2. Design  | Network | Software Architect/Developer |

### Indications

|      Priority      | Implementation difficulty | Ecological impact |
|:------------------:|:-------------------------:|:-----------------:|
|         4          |             3             |         4         |

|                      Saved resources                      |
|:---------------------------------------------------------:|
|                      Processor / RAM                      |

### Description

When values or data calculations are resources intensive, you should cache the results when the values remain unchanged, to avoid repeating these operations. 
Key-value type cache systems are designed to store this data. As they are generally stored entirely in RAM, they generate significant CPU cycles savings when the calculated data is used frequently..

### Examples

The number of contents (e.g., products) belonging to a category is calculated while it is not updated very frequently. Caching each category's number of contents saves CPU cycles.

OAuth2 access tokens have expiration time. Caching tokens and their expiration time avoids unnecessary calls to the authorization server to revalidate them.

### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
| non-volatile data that requires computation and accessed multiple times, but not stored in a cache system  |  0 |
