## Optimize PDF files

### Identifiers

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   98    | 109 | 108 | 109 |     |

### Categories

| Life cycle |    Tiers    | Responsible |
| :--------: | :---------: | :---------: |
|   5. Use   | User/Device |    User     |

### Indications

| Priority | Implementation difficulty | Ecological impact |
| :------: | :-----------------------: | :---------------: |
|    3     |             3             |         3         |

|  Saved resources  |
| :---------------: |
| Network / Storage |

### Description

Make sure that PDF files are truly optimized for the web before uploading them: image sampling rate and compression, embedded fonts, resolution, etc.
If necessary, allow users to download PDF as individual chapters.

If you want to offer the users the ability to download a PDF reader, prefer lightweight software such as Sumatra (4.3 MB) over Adobe reader (48 MB), it will reduce bandwidth usage by a factor of 10 for each download and, most importantly, it will result in lower memory usage (which helps fight digital divide and planned obsolescence).

### Example

In the case of an annual report in PDF format:

- check that images are heavily compressed and have a maximum resolution of 72 dpi;
- only include main fonts;
- divide the report into chapters to limit unnecessary downloads.

### Validation rule

| The number of ...  | is equal to or less than |
| ------------------ | :----------------------: |
| non-optimized PDFs |            0             |
