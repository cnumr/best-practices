## Prefer glyphs over images

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  20    |  18 | 30  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 3. Implementation | Network | UX/UI Designer |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Saved resources                                    |
|:----------------------------------------------------------:|
| Storage / Network / Queries  |

### Description

Glyphs are specific typographic characters included in fonts such as those included in operating systems. They can be used to replace monochrome images like symbols or pictograms (chevron, triangle, point, square, astrological signs, etc.) up to illustrations allowing:
- Reducing bandwidth by reducing website total size
- Reducing the number of queries
- Reducing DOM complexity, notably through various SVG pictograms

### Example

To optimize a landing page visually including:

*Excerpt from a font created via Font Forge*
![to illustrate a landing page](https://github.com/florinesueur/images/blob/main/vue-font-forge.svg)


A 91% size saving was achieved by including pictograms and vector illustrations in an icon font via [Font Forge](https://fontforge.org/en-US/).

To go further: [https://coding.smashingmagazine.com/2011/03/19/styling-elements-with-glyphs-sprites-and-pseudo-elements](https://coding.smashingmagazine.com/2011/03/19/styling-elements-with-glyphs-sprites-and-pseudo-elements)

### Validation rule

| The number of ...     | is equal to or less than   | 
|-------------------|:-------------------------:|
| images that should have been replaced by glyphs (font symbol)  | 0  |
