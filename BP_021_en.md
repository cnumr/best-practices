## Dividing CSS

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   9   | 24  | 21  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 3. Implementation | Network | UX/UI Designer |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 4 | 4 |

|Saved resources                                    |
|:----------------------------------------------------------:|
|  Processor / Network  |

### Description

Use a set of CSS instead of a single one, and only call the necessary CSS according to context. This method helps limit page size during its initial download, therefore saving bandwidth and reducing CPU load.

### Examples

Divide CSS according to rheir functions :
  - layout;
  - content ;
  - module x;
  - module y;
  - etc...

This will exclude all CSS from unused modules in the case of a feature-rich website.
The number of CSS files must remain reasonable, more for maintainability purposes than performance issues,
as general CSS (“layout” and “content” in our example) will be concatenated into a single file.
Complementary CSS files (here "module x" and "module y") will be downloaded depending on the context (page, functionalities...).


### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
| CSS libraries is superior or equal to  | 2  |
