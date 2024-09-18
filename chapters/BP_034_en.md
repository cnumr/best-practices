## Avoid resizing images in the browser

### Identifiers

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   93    | 20  | 34  |     |     |

### Categories

|    Life cycle     |    Tiers    | Responsible |
| :---------------: | :---------: | :---------: |
| 3. Implementation | User/Device |    User     |

### Indications

| Priority | Implementation difficulty | Ecological impact |
| :------: | :-----------------------: | :---------------: |
|    4     |             4             |         4         |

|   Saved resources   |
| :-----------------: |
| Processor / Network |

### Description

Do not resize images using HTML code's HEIGHT and WIDTH attributes as this requires transferring those images in their original size, wasting bandwidth and CPU cycles.

### Example

A 350 × 300 pixels PNG 24 image weighs 41 KB. The same image still weighs 41 KB, even though it should not exceed 3 KB, when resized in HTML code to be displayed as a thumbnail with dimensions of 70 × 60 pixels. This means that 38 KB are unnecessarily downloaded each time this image is viewed. Also note that browser resizing can lead to a more pixelated rendering.

The best solution is to generate images at the target size. This can be done manually using image editors or automatically using CMS routines that generate images at the right size for the template.

### Validation rule

| The number of ...      | is equal to or less than |
| ---------------------- | :----------------------: |
| resized browser images |            0             |
