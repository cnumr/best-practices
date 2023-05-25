## Use abreviated CSS notations

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   15   | 29  | 26  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 3. Implementation | Network | Software Architect/Developer |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 2 | 3 | 2 |

|Saved resources                                    |
|:----------------------------------------------------------:|
|  Network  |

### Description

Use abbreviated CSS notations to reduce stylesheets size.
### Examples

Do not write :
```css
margin-top:1em; margin-right:0; margin-bottom:2em; margin-left:0.5em;
```
write instead :
```css
margin:1em 0 2em 0.5em;
```

To go further :
  - https://www.w3.org/TR/CSS
  - https://www.456bereastreet.com/archive/200502/efficient_css_with_shorthand_properties/

### Validation rule

| The number of ...     | is equal to or less than   | 
|-------------------|:-------------------------:|
| non-abreviated CSS notations  |  0% |
