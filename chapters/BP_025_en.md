## Group similar CSS declarations

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   14   | 28  | 25  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 3. Implementation | Network | Software Architect/Developer |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 3 | 2 |

|Saved resources                                    |
|:----------------------------------------------------------:|
|  Network  |

### Description

When several DOM (Document Object Model) elements share some CSS properties, write the declarations together in the same sheet to reduce de CSS size.

### Example


Do not write :
```css
h1 {
background-color: gray; color: navy;
}

h2 {
background-color: gray; color: navy;
}

h3 {
background-color: gray; color: navy;
}
```

rather write :
```css
h1, h2, h3 {
background-color: gray; color: navy;
}
```

You can set up the [stylelint](https://stylelint.io/) module
in your project (`devDependencies`) and use the following rule `shorthand-property-no-redundant-values` if you want to make sure that this rule is followed.

You can find the complete list of these shortened properties on this website [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)

### Validation rule

| The number of ...                  | is equal to or less than   | 
|------------------------------------|:-------------------------:|
| similar CSS declarations not grouped together | 1  |
