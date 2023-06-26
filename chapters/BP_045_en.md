## Modif several CSS properties at once

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|   34    | 32  | 45  |      |

### Categories

|    Life cycle     |    Tiers    |         Responsible          |
|:-----------------:|:-----------:|:----------------------------:|
| 3. Implementation | User/Device | Software Architect/Developer |

### Indications

|      Priority      | Implementation difficulty  |  Ecological impact   |
|:------------------:|:--------------------------:|:--------------------:|
|         3          |             4              |          2           |

|                      Saved resources                      |
|:---------------------------------------------------------:|
|                         Processor                         |

### Description

Avoid modifying CSS properties one by one to limit the number of repaints/reﬂows.

Rather add/remove CSS classes, which allow several properties to be modified at once while only generating a single repaint/reﬂow (see [rule no. 45](/chapters/best_practices_045_fr.md )).

### Example

Write:
```html
<styling>
     .in-error { color: red;
         font-weight: bold;
     }
</style>
<script>
     $el.bind('error', function () {
         $el.addClass('in-error');
     });
     $el.bind('running', function () {
         $el.removeClass('in-error');
     };
</script>
```


#### Validation rule

| The number of ...                                                                                          | is equal to or less than |  
|------------------------------------------------------------------------------------------------------------|:------------------------:|
| CSS modifications that can be grouped into a single one (margin, padding, ...) |            0             |
