## Use all levels of CMS caching

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   60   | 57  | 57  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 4. Production | Datacenter | System Administrator |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Saved resources                                    |
|:----------------------------------------------------------:|
|  Processor / RAM  |

### Description

If the CMS (like Wordpress, Drupal, eZ Publish, etc.) offers a multi-level caching system, use these different levels as their granularity reduces consumed resources (CPU cycles, memory) and offers good performance to users.

### Example

A CMS like WordPress does not natively have a cache system, but there are several plugins that can fill this need, the most popular being:

- W3 Total Cache
- WP Super Cache
- WP-rocket

With one of these plugins, pages are cached on the server and are no longer generated for each user. Additionally, this kind of tool also provides other WebPerf-oriented optimizations following web eco-design principles.


### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
|  non-activared caches |  0 |
