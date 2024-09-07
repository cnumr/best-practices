---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: en
published: false
---
## Minimize repaints (appearance) and reflows (layout)

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|    42   | 45  | 43  |      |

### Categories

|    Life cycle     |    Tiers    |         Responsible          |
|:-----------------:|:-----------:|:----------------------------:|
| 3. Implementation | User/Device | Software Architect/Developer |

### Indications

|      Priority      | Implementation difficulty | Ecological impact |
|:------------------:|:-------------------------:|:-----------------:|
|         4          |             4             |         4         |

|                      Saved resources                      |
|:---------------------------------------------------------:|
|                         Processor                         |

### Description

Repaint refers to DOM elements change of appearance, while reflow refers to change / recalculation of their position.
Both of these operations are resource-intensive, especially in terms of CPU cycles, it is therefore 
necessary to avoid triggering them when possible.

### Example

Do not modify elements style properties (background color, border style, text color, size, etc.) to avoid repaints.

Limit changes of properties like position, dimension, type of positioning, content, ( etc.) to avoid reflows. 
This is particularly relevant for some HTML elements like tables, whose reflows might require up to three times more 
time than other elements.

For more information :
https://developers.google.com/speed/articles/reflow


### Validation rule

| The number of ...                                                                                | is equal to or less than |  
|--------------------------------------------------------------------------------------------------|:------------------------:|
| modifications not affecting the layout and causing a repaint (ex: color, background, visibility) |             1            |
