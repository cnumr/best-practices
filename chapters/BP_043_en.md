## Minimize repaint (appearence) and reflow (layout)

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  42    | 45  | 43  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 3. Implementation| User/Device | Software Architect/Developer |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 4 | 4 |

|Saved resources                                    |
|:----------------------------------------------------------:|
| Processor   |

### Description

Repaint refers to DOM elements change of appearence, while reflow refers to the elements position change/recalculation inside the DOM. Both of these operations are resource-intensive, particularly in terms of CPU cycles, it is therefore necessary not to trigger them when possible.

### Example

Do not modify elements stylistic properties (background color, border style, text color, size, etc.) in order to avoid repaints.

Limit properties position, dimension, type of positioning, content, ( etc.) changes in order to avoid reflows. This is particularly relevant for certain HTML elements such as tables, whose reflow might require up to thrice more time than similar elements with display blocks.

For more information :
https://developers.google.com/speed/articles/reflow


### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
|  modifications that do not affect layout and cause repaints (e.g. color, background, visibility) | 1  |
