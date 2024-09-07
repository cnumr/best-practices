---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: en
published: false
---
## Reduce DOM access via JavaScript

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|    32   | 42  |  54 |      |

### Categories

|    Life cycle     |    Tiers    |         Responsible          |
|:-----------------:|:-----------:|:----------------------------:|
| 3. Implementation | User/Device | Software Architect/Developer |

### Indications

| Priority | Implementation difficulty | Ecological impact |
|:--------:|:-------------------------:|:-----------------:|
|    3     |             3             |         3         |

|                      Saved resources                      |
|:---------------------------------------------------------:|
|                      Processor / RAM                      |

### Description

Accessing the DOM (Document Object Model) via JavaScript is a heavy task that uses a lot of CPU cycles. Avoid these accesses as much as possible.

To do this, you can assign the node to variables that you will reuse during the application's life cycle. 
It avoids re-traversing the tree again each time you manipulate the document.

It is also possible to use “Shadow DOM” type libraries, which optimize tree modifications with a batch system.

### Examples

To learn more, you can consult the W3C Shadow DOM project:
https://w3c.github.io/webcomponents/spec/shadow/
and the W3C recommendations to reduce access to the DOM via JavaScript:
https://www.w3.org/wiki/JavaScript_best_practices#Keep_DOM_access_to_a_minimum


### Validation rule

| The number of ...                                                | is equal to or less than |  
|------------------------------------------------------------------|:------------------------:|
| accesses to HTML elements without going through a local variable |            0             |
