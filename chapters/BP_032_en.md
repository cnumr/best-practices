## Externalize CSS and Javascript

### Identifiers

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|    7    | 16  | 32  |     |     |

### Categories

|    Life cycle     |  Tiers  |         Responsible          |
| :---------------: | :-----: | :--------------------------: |
| 3. Implementation | Network | Software Architect/Developer |

### Indications

| Priority | Implementation difficulty | Ecological impact |
| :------: | :-----------------------: | :---------------: |
|    4     |             4             |         4         |

| Saved resources |
| :-------------: |
|     Network     |

### Description

Ensure that CSS and JavaScript code is not inlined in the HTML code of the page, with the possible exception of
configuration variables for JavaScript objects.

If CSS or JavaScript code is included in HTML file's body in several pages (or even in the entire site),
then this code must be downloaded for each page requested by the users, increasing downloaded data volume.
However, if CSS and JavaScript codes is written in external files,
browsers can store them in their local cache system and not download them again.

### Examples

In HTML code, do not write:

```html
<style type="text/css" media="screen">
  p {
    color: #333;
    margin: 2px 0;
  }
  /* All CSS declarations of the site */
</style>
```

but rather :

```html
<link href="css/styles.css" rel="stylesheet" />
```

### Validation rule

| The number of ...                                             | is equal to or less than |
| ------------------------------------------------------------- | :----------------------: |
| URL with a significant quantity of inline CSS/Javascript code |            2             |
