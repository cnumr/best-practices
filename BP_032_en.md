## Externalise CSS and Javascript

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  7    | 16  | 32  |      |

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
|  Network  |

### Description

Ensure that CSS and JavaScript codes are not embedded into an HTML web page code, with the exception of possible
configuration variables for JavaScript objects.

If CSS or JavaScript code is included in HTML files' body while the latter is used by several pages
(or even by the entire site), then this code must be transferred for each page requested by users, thus increasing transmitted data volume.
However, if CSS and JavaScript codes are included in their own files,
browsers can store them in their local cache system so as not to request them again.

### Examples
In HTML code, do not write:
```html
<style type="text/css" media="screen">
     p { color: #333; margin: 2px 0 }
     /* All CSS declarations of the site */
</style>
```

but rather :
```html
<link href="css/styles.css" rel="stylesheet">
```



### Validation rule

| The number of ...     | is equal to or less than   | 
|-------------------|:-------------------------:|
| URLs integrating a significant quantity and/or number of CSS/Javascript code (inline)   | 2  |
