## Reduce server logs as much as possible

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   82   | 99  | 103  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 4. Production | Datacenter | Software Architect/Developer |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 2 | 2 | 3 |

|Saved resources                                    |
|:----------------------------------------------------------:|
|  Processor / RAM / Storage  |

### Description

Server logs (web, application, database) can become very voluminous. It is recommended to configure them as a whole. By adjusting the application's log level as accurately as possible (e.g. only information/warning/error) and by tracing only relevant information, disk writes that might be massive are avoided, reducing CPU cycles consumption and limiting necessary storage space.

To avoid disk saturation, it is also recommended to set up retention periods and log rotation based on the service operational needs.

### Example

The access logs of an Apache server can be configured as follows to exclude static resources and RSS feeds:
```apacheconf
SetEnvIf Request_URI "\.(ico|pdf|ﬂv|jpg|jpeg|png|gif| js|css|gz|swf|txt)$" dontlog
SetEnvIf Request_URI "^/rss/" dontlog
CustomLog /var/log/apache/access.log combined env=!dontlog
```

### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
| logs without a maximum retention period    | 0  |
