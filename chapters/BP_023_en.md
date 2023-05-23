## Use CSS instead of images

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  11    | 26  | 23  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 3. Implementation | Network | Software Architect/Developer |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Saved resources                                    |
|:----------------------------------------------------------:|
|  Network / Queries  |

### Description

Use CSS3 properties instead of images. Style sheets are much smaller, especially when compressed. Calling for a stylesheet only generates a single HTTP request while using many images generates numerous HTTP requests (one HTTP request for each image).

### Example

Boxes rounded corners should be handled through CSS3 rather than with images.

Prefer writing:
```css
#frame {
     border-radius: 10px;
}
```

```html
<div id="frame">
     <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     </p>
</div>
```


### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
|  images that could have been replaced by CSS |  0 |
