## Disable Apache DNS lookup

### Identifiers

| GreenIT | V2  |  V3  | V4  |
| :-----: | :-: | :--: | :-: |
|   84    | 100 | 1 04 |     |

### Categories

|  Life cycle   |   Tiers    |     Responsible      |
| :-----------: | :--------: | :------------------: |
| 4. Production | Datacenter | System Administrator |

### Indications

| Priority | Implementation difficulty | Ecological impact |
| :------: | :-----------------------: | :---------------: |
|    2     |             2             |         3         |

|   Saved resources   |
| :-----------------: |
| Processor / Network |

### Description

Web servers log information for all HTTP requests, usually translating users' IP addresses into domain names. This conversion (DNS Lookup) is one of Apache HTTP server's bottlenecks.

It should therefore be disabled.

### Example

In your Apache server configuration file, located at `/etc/apache/httpd.conf` or at `/etc/apache2/apache2.conf`, write :

```apacheconf
 HostnameLookups Off
```

### Validation rule

| The number of ...  | is equal to or less than |
| ------------------ | :----------------------: |
| active DNS lookups |            0             |
