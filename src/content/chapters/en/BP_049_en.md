---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: en
published: false
---
## Cache frequently accessed objects in Javascript

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|   33    | 36  | 49  |      |

### Categories

|    Life cycle     |  Tiers  |         Responsible          |
|:-----------------:|:-------:|:----------------------------:|
| 3. Implementation | Network | Software Architect/Developer |

### Indications

|      Priority      | Implementation difficulty  |   Ecological impact    |
|:------------------:|:--------------------------:|:----------------------:|
|         4          |             3              |           4            |

|                      Saved resources                      |
|:---------------------------------------------------------:|
|                         Processor                         |

### Description

Accessing the DOM (Document Object Model) uses a lot of processor resources (CPU cycles). 
Therefore, when using the same DOM element several times in JavaScript, you should store its reference in a variable so that you don't need to go through the DOM again for that same element.

### Examples

Do not write :
```javascript
document.getElementById('menu').property1 = 'foo'; document.getElementById('menu').property2 = 'bar';
```

write instead :
```javascript
const menu = document.getElementById('menu');
menu.property1 = 'foo';
menu.property2 = 'bar'
```

### Validation rule

| The number of ...                                                         | is equal to or less than |  
|---------------------------------------------------------------------------|:------------------------:|
| constant (or non-volatile) data retrieved repeatedly without being cached |             0            |
