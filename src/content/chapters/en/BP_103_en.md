---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: en
published: false
---
## Reduce server logs as much as possible

### Identifiers

| GreenIT | V2  | V3  | V4  |
| :-----: | :-: | :-: | :-: |
|   82    | 99  | 103 |     |

### Categories

|  Life cycle   |   Tiers    |         Responsible          |
| :-----------: | :--------: | :--------------------------: |
| 4. Production | Datacenter | Software Architect/Developer |

### Indications

| Priority | Implementation difficulty | Ecological impact |
| :------: | :-----------------------: | :---------------: |
|    2     |             2             |         3         |

|      Saved resources      |
| :-----------------------: |
| Processor / RAM / Storage |

### Description

Server logs (web, application, database) can become very large. It is recommended to configure them. By adjusting the application's log level at the highest possible level (e.g. only information/warning/error) and by logging only relevant information, disk writes are avoided, the number of CPU cycles is reduced as well as storage space use.

To avoid disk saturation, it is also recommended to set up a retention time and log rotation based on the service operational needs.

### Example

The access logs of an Apache server can be configured as follows to exclude static resources and RSS feeds:

```apacheconf
SetEnvIf Request_URI "\.(ico|pdf|ﬂv|jpg|jpeg|png|gif| js|css|gz|swf|txt)$" dontlog
SetEnvIf Request_URI "^/rss/" dontlog
CustomLog /var/log/apache/access.log combined env=!dontlog
```

### Validation rule

| The number of ...                             | is equal to or less than |
|-----------------------------------------------| :----------------------: |
| logs files without a maximum a retention time |            0             |
