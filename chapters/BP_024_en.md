## Write efficient CSS selectors

### Identifiers

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   13    | 27  | 24  |     |     |

### Categories

|    Life cycle     |  Tiers  |         Responsible          |
| :---------------: | :-----: | :--------------------------: |
| 3. Implementation | Network | Software Architect/Developer |

### Indications

| Priority | Implementation difficulty | Ecological impact |
| :------: | :-----------------------: | :---------------: |
|    3     |             3             |         2         |

| Saved resources |
| :-------------: |
|    Processor    |

### Description

Use selectors based on IDs or classes as they will be filtered more quickly, thus saving CPU cycles on the associated device.

### Example

Do not write :

```css
treeitem[mailfolder="true"] > treerow > treecell {…}
```

instead write :

```css
.treecell-mailfolder {…}
```

Do not write :

```css
treehead > treerow > treecell {…}
```

instead write :

```css
.treecell-header {…}
```

### Validation rule

| The number of ...                                         | is equal to or less than |
| --------------------------------------------------------- | :----------------------: |
| CSS selectors that do not use IDs, classes, or attributes |            0             |
