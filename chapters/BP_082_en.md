## Optimizing cookies size

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   65   | 82  | 82  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 3. Implementation | Network | Software Architect/Developer |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 4 | 3 |

|Saved resources                                    |
|:----------------------------------------------------------:|
|  Network  |

### Description

Cookies link users browsers and remote web servers thanks to shared data. This data is shared through each HTTP request. It is therefore necessary to optimize their size as much as possible and to delete them as soon as their presence is no longer mandatory.

### Example

Deleting cookies we no longer need is possible by specifying a null or negative expiration duration, as follows:
```
Set-Cookie: user_mavariable=; Max-Age=0
```
See RFC 6265 from the IETF (Internet Engineering Task Force) for more cookies-related information:
https://datatracker.ietf.org/doc/html/rfc6265

### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
|  uncompressed CSS, JavaScript, HTML, and SVG files |  0 |
