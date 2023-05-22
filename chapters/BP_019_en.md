## Replace official social networks sharing buttons 

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   910   |   | 19  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 3. Implementation | User/Device | UX/UI Designer |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 4 | 4 |

|Saved resources                                    |
|:----------------------------------------------------------:|
|  Network / Queries  |

### Description

Important social networks such as Facebook, Twitter, Pinterest, etc. provide ready to install plugins for web pages
to display "Share" buttons and "Like" counters. These JavaScript plugins are very resource-intensive since they require numerous requests and heavy files downloads to work. Rather, direct links, such as HTML, are preferred.
These links can be generated manually or via tools such as https://www.sharelinkgenerator.com/.

### Example

All social networks share URLs that allow their members to share web pages:
  - Facebook Share: https://www.facebook.com/sharer/sharer.php?u=XXXXX
  - Facebook Like: https://www.facebook.com/plugins/like.php?href=XXXXX
  - Twitter: https://twitter.com/intent/tweet?url=XXXXX
Sharing pop-up buttons have the same functions as official controls but can be written with simpler code. An example of the code is as follows: 
 
```html
<button type = "button" onclick = "window.open('https://www.facebook.com/sharer/sharer.php?u=XXXXX', '', 'menubar=no, toolbar=no, resizable= yes, scrollbars=yes, height=500, width=700')">
     I share this page on Facebook
</button>
```
To go further :
https://www.nuweb.fr/736



### Validation rule

| The number of ...     | is equal to or less than   | 
|-------------------|:-------------------------:|
| external librairies  | 0  |
