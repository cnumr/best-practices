## Reduce Apache's DNS lookup

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  84    | 100  | 104  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 4. Production | Datacenter | System Administrator |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 2 | 2 | 3 |

|Saved resources                                    |
|:----------------------------------------------------------:|
|  Processor / Network  |

### Description

Web servers record HTTP requests information in logs each time they receive one, usually by translating users' IP addresses into domain names. This conversion (DNS Lookup) is one of Apache HTTP server  bottlenecks.
It should therefore be disabled.

### Example

In your Apache server configuration file located at  `/etc/apache/httpd.conf` or at `/etc/apache2/apache2.conf`, write :
```apacheconf
 HostnameLookups Off
```

### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
|  active DNS lookups  |  0 |
