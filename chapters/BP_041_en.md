## Avoid modifications during DOM traversal

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  43    | 43  | 41  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 3. Implementation | User/Device | Software Architect/Developer |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 4 | 4 |

|Saved resources                                    |
|:----------------------------------------------------------:|
|  Processor  |

### Description

Modifying DOM elements (Document Object Model) while navigating through the DOM can result in situations leading to greedy resource consumption, in particular regarding CPU cycles. Adding elements during DOM traversal might end up generating an infinite loop which will consume a large amount of resources. This kind of modification should therefore be avoided when possible.

### Example

Avoid :
```html
<script>
     // jQuery notation
     $('a.extlink').each(function(el) {
         $(el).attr('rel','external nofollow');
     });
</script>
```


### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
| DOM element modifications performed when the same part of the DOM is traversed by JavaScript code  | 0  |
