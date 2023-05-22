## Provide print CSS 

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   16   | 30  | 27  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 3. Implementation | User/Device | UX/UI Designer |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 4 | 3 |

|Saved resources                                    |
|:----------------------------------------------------------:|
|  Network  |

### Description

In addition to the service provided for the Internet user, print CSS style sheets reduce the number of printed pages, indirectly reducing websites' ecological footprints. Designed as lean as possible, websites pages should display ink-saving font typefaces (Century Gothic, for example). Also remember to hide headers, footers, menus, sidebars, and remove all images except those in content. Etc.

### Example

This CSS print contributes in "cleaning" the displayed pages in order to provide a refined impression:
```css
bodysuit {
background-color:#ﬀf; font-family :Serif; font-size:15pt;
}
#page { margin:0;
border:none;
}
#banner, #menuright, #footer { display: none;
}
h1#top { margin:0;
padding:0;
text-indent:0; line height: 25pt; font-size:25pt;
} (...)
```

### Validation rule

| The number of ...     | is equal to or less than   | 
|-------------------|:-------------------------:|
| missing print CSS  |  1 |
