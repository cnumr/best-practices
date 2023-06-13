## Use performance-oriented application forks

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|    4    | 5 3 | 1 6 |      |

### Categories

|    Life cycle     |   Tiers    |     Responsible      |
|:-----------------:|:----------:|:--------------------:|
| 3. Implementation | Datacenter | System administrator |

### Indications

| Priority | Implementation difficulty | Ecological impact |
|:--------:|:-------------------------:|:-----------------:|
|    3     |             3             |         3         |

|                      Saved resources                      |
|:---------------------------------------------------------:|
|                 Processor / RAM / Network                 |

### Description

Open source software projects are often forked to improve performance. Performance gains generally imply less resource use. Therefore if an optimized fork already exists and offers sufficient functional and technical features for your projects, you should use it.

### Example

 - Pressflow should be preferred over Drupal.
 - KeyDB should be rather preferred over Redis.


### Validation rule

| The number of ...                                      | is inferior or equals  |  
|--------------------------------------------------------|:----------------------:|
| performance-oriented forks is greater than or equal to |           1            |
