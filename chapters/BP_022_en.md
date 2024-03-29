## Limit the number of CSS

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   10   | 25  | 22  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 3. Implementation | Network | Software Architect/Developer |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 4 | 4 |

|Saved resources                                    |
|:----------------------------------------------------------:|
|  Network / Queries  |

### Description

Limit the number of CSS in order to avoid HTTP requests and simplify the rendering in the browser. Use a common stylesheet for all common elements, regardless of display, and one file for each target screen size or media query.

Be cautious: import these files into the HTML code and NOT with @import directives in the CSS files themselves. By splitting this way, users devices will choose what is most appropriate and will defer the loading of the files that they do not need.

CSS files required for some components can be loaded depending on the context if necessary.

### Example

```
<link rel='stylesheet' id='css-css' href='commons.css' type='text/css' media='all' />
<link rel='stylesheet' id='css-xs-css' href='small-screens.css' type='text/css' media='(max-width: 959px)' />
<link rel='stylesheet' id='css-sm-css' href='tablets.css' type='text/css' media='(min-width: 768px)' />
<link rel='stylesheet' id='css-mdlg-css' href='large-screens.css' media='(min-width: 960px)' />
<link rel='stylesheet' id='css-print-css' href='print.css' type='text/css' media='print' />
```

### Validation rule

| The number of ...     | is equal to or less than   |   
|-------------------|:-------------------------:|
| CSS files  | 10  |
