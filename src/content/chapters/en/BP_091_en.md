---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: en
published: false
---
## Install the bare minimum on the servers

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|    74   | 89  | 91  |      |

### Categories

|  Life cycle   |   Tiers    |     Responsible      |
|:-------------:|:----------:|:--------------------:|
| 4. Production | Datacenter | System Administrator |

### Indications

|      Priority      | Implementation difficulty | Ecological impact |
|:------------------:|:-------------------------:|:-----------------:|
|         3          |             4             |         3         |

|                      Saved resources                      |
|:---------------------------------------------------------:|
|                 Processor / RAM / Storage                 |

### Description

Uninstall all non-essential services that are not required to run your website. This measure will necessarily remove daemons (agents and services running permanently in memory) which use resources, especially CPU cycles and RAM.

### Example

Prefer "manual" servers installation (LAMP + CMS, for example) rather than cPanel or Plesk overlay distributions. If administration overlay is necessary, lightweight solutions like Webmin are preferred.

### Validation rule

| The number of ...                                      | is equal to or less than |  
|--------------------------------------------------------|:------------------------:|
| non-essential services running on the operating system |            0             |
