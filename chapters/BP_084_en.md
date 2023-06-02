## Prefer HSTS Preload list over 301 redirects

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|  1060   |     | 84  |      |

### Categories

|  Life cycle   |  Tiers  |     Responsible      |
|:-------------:|:-------:|:--------------------:|
| 4. Production | Network | System Administrator |

### Indications

|      Priority      | Implementation difficulty | Ecological impact |
|:------------------:|:-------------------------:|:-----------------:|
|         4          |             3             |         4         |

|                      Saved resources                      |
|:---------------------------------------------------------:|
|                     Network / Queries                     |

### Description

HSTS allow to notify any browser, using a cached HTTP response header, that the domain must only be accessed via HTTPS.

This allows subsequent requests on the same domain to exclusively use the HTTPS protocol, avoiding numerous 301 redirects. 
However, the first call requires an HTTP response (potentially not safe) with an STS header. In addition to enabling HSTS, 
it is possible to register in a static list updated on all recent browsers (https://hstspreload.org) to fix this issue 
and force browsers to contact the whole domain with HTTPS.

Note that it is quick to register domains on htstpreload.org and affects the whole domain (including subdomains). 
Ensure that none of your subdomains would be negatively affected by HTTPS usage before making this registration, 
which can be relatively slow to cancel.

### Example

Configuration example 
```apacheconf
Strict-Transport-Security : max-age = 63072000 ; includeSubDomains ; preload
```

### Validation rule

| The number of ...      | is equal to or less than |  
|------------------------|:------------------------:|
| non activation of HSTS |             0            |
