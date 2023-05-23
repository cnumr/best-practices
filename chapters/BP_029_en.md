## Prefer standard fonts

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   19   | 17  | 29  |      |

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
|  Storage / Network / Queries  |

### Description

Use standard fonts that are already installed on the user's computer and do not need any additional downloads to save bandwidth and accelerate web pages loading. You can find a list of standard fonts at [https://systemfontstack.com/](https://systemfontstack.com/).

If however you need a specific font for your digital service, even if it is an API font (Google font, Adobe font, etc.), you must:
- Host the font by yourself
- Use faux-bold via the ```-webkit-text-stroke``` CSS property when possible
- Prefer the use of variable fonts if you need more than one variant (ex: regular, bold, etc.)
- Optimize the font by removing unnecessary characters (example: French sites only require latin characters, cyrillic alphabet can therefore be deleted)

You should incorporate new glyphs directly into fonts if you have monochrome pictograms or illustrations (see rule 30: Prefer glyphs to images) and font usage rights allow it.

### Example

Here is a comparison chart of Oswald typeface font sizes:

|        | Regular | Regular + Bold | Variable | Regular Latin | Latin Regular + Latin Bold | Variable Latin |
|:------:|:-------:|:--------------:|:--------:|:-------------:|:--------------------------:|:--------------:|
| Weight | 37.6kb  |     76.9kb     |   66kb   |     16kb      |           32.5kb           |       ?        

### Alternative solution

Users can choose, through browser settings, to ask websites they visit to optimize the network requests. You can detect it with the `prefers-reduced-data` media query.

In the example below, `Montserrat` font will only be downloaded if users didn't set any personal settings. Otherwise, the `Arial` font will be used and `Montserrat` will not be downloaded.

```css
@media (prefers-reduced-data: no-preference) {
     @font-face {
         font-family: Montserrat;
         font-style: normal;
         font-weight: 400;
         src: url('fonts/montserrat-latin-regular.woff2');
     }
}

bodysuit {
   font-family: Montserrat, Arial;
}
```

For more information on the `prefers-reduced-data` media query: [https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data)

### Validation rule

| The number of ...     | is equal to or less than   | 
|-------------------|:-------------------------:|
| downloaded fonts  | 2  |
