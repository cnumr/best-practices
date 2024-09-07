---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: en
published: false
---
## Adapt videos to watching contexts

### Identifiers

| GreenIT | V2  | V3  | V4  |
| :-----: | :-: | :-: | :-: |
|   92    | 115 | 114 |     |

### Categories

| Life cycle |    Tiers    | Responsible |
| :--------: | :---------: | :---------: |
|   5. Use   | User/Device |    User     |

### Indications

| Priority | Implementation difficulty | Ecological impact |
| :------: | :-----------------------: | :---------------: |
|    3     |             2             |         3         |

|   Saved resources   |
| :-----------------: |
| Processor / Network |

### Description

Provide several formats (size, frame rate, audio compression, etc.) depending on the video watching context (desktop, Wi-Fi tablet, EDGE smartphone).

Video optimization should be done out of the website, ideally during post-production. If not possible, use services like YouTube or Vimeo since they offer several optimized formats (SD, HD, etc.) by default.

### Example

A 15-second user guide shot in 1,680 x 1,050 resolution weighs:

- 49 MB when not optimized;
- 3 MB when optimized for a resolution equal to or greater than 1,024 x 720 in MPEG 4/H.264/AAC;
- 1.2 MB when optimized for a resolution equal to or greater than 480 x 320 in MPEG 4/H.264/AAC.

It can be estimated that there is at least a 50% size gain (and probably savings during decoding, as the encoding format takes targeted hardware into consideration) between "desktop" and "mobile" video versions.

Most cases should be covered with 3 different sizes x 3 different encodings, i.e., 9 versions of the same video. It is possible to serve the right file with simple rules such as screen resolution with a responsive design logic.

### Validation rule

| The number of ...                                                                                      | is equal to or less than |
| ------------------------------------------------------------------------------------------------------ | :----------------------: |
| videos with a definition of 1080p or higher displayed on the website when the device is a smartphone |            0             |
