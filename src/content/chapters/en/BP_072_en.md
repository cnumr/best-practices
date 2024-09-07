---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: en
published: false
---
## Avoid performing SQL queries inside a loop

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|   55    | 71  | 72  |      |

### Categories

|    Life cycle     |   Tiers    |         Responsible          |
|:-----------------:|:----------:|:----------------------------:|
| 3. Implementation | Datacenter | Software Architect/Developer |

### Indications

|      Priority      | Implementation difficulty | Ecological impact |
|:------------------:|:-------------------------:|:-----------------:|
|         3          |             3             |         3         |

|                      Saved resources                      |
|:---------------------------------------------------------:|
|                 Processor / RAM / Network                 |

### Description

Performing SQL queries inside a loop causes significative performance issues, especially if the SQL server is not on the local machine. 
These servers are optimized to handle multiple selections, insertions or modifications in a single query or a single transaction.

Improper use of these queries unnecessarily consumes CPU cycles, memory, and bandwidth.

### Examples

Do not write :
```php
foreach ($userList as $user) {
     $query = 'INSERT INTO users (ﬁrst_name,last_name) VALUES("'. $user['ﬁrst_name'] .'", "'. $user['last_name'] .'")';
     mysql_query($query);
}
```
rather write :
```php
$userData = array();
foreach ($userList as $user) {
     $userData[] = '("'. $user['ﬁrst_name'] .'", "'.
     $user['last_name'] .'")';
}
$query = 'INSERT INTO users (first_name,last_name) VALUES'. implode(',', $userData); mysql_query($query);
```

### Validation rule

| The number of ...         | is equal to or less than |  
|---------------------------|:------------------------:|
| SQL queries inside a loop |            0             |
