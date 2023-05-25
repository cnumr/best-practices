## Using HTTP cache

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  72    | 103  | 99  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 4. Production | Network | System Administrator |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 5 |

|Saved resources                                    |
|:----------------------------------------------------------:|
|  Processor / RAM  |

### Description

Reverse proxies such as Varnish, Squid, or Nginx are optimized to quickly serve content (HTML pages, images, etc.) while consuming as few CPU cycles as possible. By avoiding unnecessary application server requests, reverse proxies enable the use of smaller infrastructures.

### Example

The use of a specialized reverse proxy like Varnish drastically reduces required time to serve dynamic pages while increasing the capacity of the CMS (Drupal, in this case) to deliver a large number of them at the same time. It is also observed that a general-purpose cache like APC is not appropriate (source: Asymptotix).

### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
|  HTTP headers without identified cache | 0  |
