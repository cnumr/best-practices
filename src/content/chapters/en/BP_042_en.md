---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: en
published: false
---
## Hide DOM elements while they are being modified

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|    44   |  44 | 42  |      |

### Categories

|    Life cycle     |    Tiers    |         Responsible          |
|:-----------------:|:-----------:|:----------------------------:|
| 3. Implementation | User/Device | Software Architect/Developer |

### Indications

| Priority | Implementation difficulty | Ecological impact |
|:--------:|:-------------------------:|:-----------------:|
|    3     |             4             |         4         |

|                      Saved resources                      |
|:---------------------------------------------------------:|
|                         Processor                         |

### Description

When several properties of a DOM (Document Object Model) element need to be modified, each content or style change will trigger repaints and / or reflows. 

It is usually preferable to:
  - Hide these elements (set display property to none) (1 reﬂow);
  - Modify all properties and make the elements visible again (1 reﬂow).

That is, maximum 2 reﬂows.

### Example

Proceed as follows:
```javascript
var elem = document.getElementById('foo'); elem. style. display = 'none'; // Generate 1 reﬂow elem.style.width ='10em';
elem. style. height = 'auto';
// ... other changes ...
elem. style. display = 'block'; // Generate 1 reﬂow
```

Only 2 reflows are required (instead of potentially 6 or 7).

### Validation rule

| The number of ...                                             | is equal to or less than |  
|---------------------------------------------------------------|:------------------------:|
| DOM elements manipulations while the element is still visible |             1            |
