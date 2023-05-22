## Apache Vhost : disable AllowOverride

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  81    | 101  | 105  |      |

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
|  Processor  |

### Description

When AllowOverride directive is enabled, Apache HTTP server must go up the entire directory hierarchy to possibly find an .htaccess file containing override rules. Disabling this directive if possible in the Apache configuration is recommended.

### Example

In your Apache host configuration file, add: :
```apacheconf
AllowOverride none
```

To go further :
https://httpd.apache.org/docs/2.0/mod/core.html#allowoverride

### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
|   configuration files containing "AllowOverride" text with anything other than "AllowOverride None" | 0  |
