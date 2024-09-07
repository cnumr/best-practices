---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: en
published: false
---
## Add Expires or Cache-Control headers

### Identifiers

| GreenIT | V2  | V3  | V4  |
| :-----: | :-: | :-: | :-: |
|   78    | 105 | 101 |     |

### Categories

|  Life cycle   |  Tiers  |     Responsible      |
| :-----------: | :-----: | :------------------: |
| 4. Production | Network | System Administrator |

### Indications

| Priority | Implementation difficulty | Ecological impact |
| :------: | :-----------------------: | :---------------: |
|    4     |             3             |         4         |

|           Saved resources           |
| :---------------------------------: |
| Processor / Network / RAM / Queries |

### Description

The Expires and Cache-Control headers define the time during which browsers should keep resources in their cache. Therefore, it is necessary to add and configure them correctly for CSS stylesheets, JavaScript files, and images.

Ideally, these elements lifespan should be as long as possible so that browsers do not have to request them from the server again. This saves HTTP requests, bandwidth, and CPU cycles from server side.

### Example

Here is an example of how to configure Expires and Cache-Control headers for the Apache web server:

```apacheconf
# BEGIN Cache-Control Headers
<IfModule mod_headers.c>
    <FilesMatch "\\.(ico|jpe?g|png|gif|swf|css|gz)$">
        Header set Cache-Control"max-age=2592000, public"
    </FilesMatch>
    <FilesMatch "\\.(html|htm)$">
        Header set Cache-Control"max-age=7200, public"
    </FilesMatch>
</IfModule>
# END Cache-Control Headers
```

### Validation rule

| The number of ...                        | is equal to or less than |
| ---------------------------------------- | :----------------------: |
| missing Expires or Cache-Control headers |            0             |
