## Use HSTS Preload list over 301 redirects

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  1060    |   | 84  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 4. Production | Network | System Administrator |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Saved resources                                    |
|:----------------------------------------------------------:|
|  Network / Queries  |

### Description

HSTS indicates browsers that domains must exclusively be contacted in HTTPS through a cached response header. 

This allows subsequent requests that have been made on the same domain to be exclusively contacted through HTTPS protocol avoiding numerous 301 redirects. However, first call requires an  HTTP response (potentially not safe) with an STS header. In addition to enabling HSTS, it is possible to register in a static list updated on all recent browsers (https://hstspreload.org) to fix this issue and force browsers to contact the whole HTTPS domain.

Note that it is quick to register domains on htstpreload.org and affects the whole domain (including subdomains). Ensure that none of your subdomains are disrupted by HTTPS implementation before making this registration, which removal can be relatively slow.

### Example

Configuration example 
```apacheconf
Strict-Transport-Security : max-age = 63072000 ; includeSubDomains ; preload
```

### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
| non-activated HSTS   | 0  |
