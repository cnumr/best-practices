## Avoid JavaScript / CSS animations

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   810   | 48  | 39  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 2. Design | User/Device | UX/UI Designer |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 5 |

|Saved resources                                    |
|:----------------------------------------------------------:|
| Processor / RAM |

### Description

JavaScript/CSS animations can request a lot of CPU cycles and memory consumption.
They all trigger resource-intensive (re)paint/(re)ﬂow type actions. Animations must be avoided as much as possible, and only used when required.

If some animations are essential, stick to the CSS3 `opacity` and `transform` properties, and to the `translate`, `rotate`, `scale` related functions of `transform`. These two properties are automatically browser optimized, and the animations can be supported by the graphics processing unit (GPU). The following website [www.csstriggers.com](https://csstriggers.com/) features a list of animation triggered DOMs actions.

Browsers can be informed that an animation is going to take place with a `will-change` statement in order for the browser to reduce animation-related resource consumption.

To know more :
https://web.dev/animations-guide/

### Example

```css
.box {
     will-change: transform, opacity;
}
```
### Alternative solution

You can also let users choose whether or not to play animations via browser preferences and through `prefers-reduced-motion` media queries. Animations will only be played if no preferences have been set by the user.

```css
@media (prefers-reduced-motion: no-preference ) {
   .animation {
     animation: fadeIn 4s ease;
   }
}
```

### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
| JS / CSS animations per page  |  2 |
