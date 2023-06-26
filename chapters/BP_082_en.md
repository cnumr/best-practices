## Optimize cookies size

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|   65    | 82  |  82 |      |

### Categories

|    Life cycle     |  Tiers  |         Responsible          |
|:-----------------:|:-------:|:----------------------------:|
| 3. Implementation | Network | Software Architect/Developer |

### Indications

|      Priority      | Implementation difficulty | Ecological impact |
|:------------------:|:-------------------------:|:-----------------:|
|         3          |             4             |         3         |

|                      Saved resources                      |
|:---------------------------------------------------------:|
|                          Network                          |

### Description

Cookies allow to have a shared state between the user's browser and the remote web server thanks to shared data. 
This data is sent with each HTTP request. It is therefore necessary to optimize the cookie's size as much as possible 
and to delete it as soon as it is no longer necessary.

### Example

Deleting cookies no longer needed is possible by specifying a null or negative expiration duration, as follows:
```
Set-Cookie: user_mavariable=; Max-Age=0
```
See RFC 6265 from the IETF (Internet Engineering Task Force) for more cookies-related information:
https://datatracker.ietf.org/doc/html/rfc6265

### Validation rule

| The number of ...              | is equal to or less than |  
|--------------------------------|:------------------------:|
| useless or unoptimized cookies |            0             |
