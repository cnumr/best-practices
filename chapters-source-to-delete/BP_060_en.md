## Encode audio files outside the CMS

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|   96    | 60  | 60  |      |

### Categories

| Life cycle |    Tiers    | Responsible |
|:----------:|:-----------:|:-----------:|
|   5. Use   | User/Device |    User     |

### Indications

| Priority | Implementation difficulty | Ecological impact |
|:--------:|:-------------------------:|:-----------------:|
|    4     |             4             |         4         |

|                      Saved resources                      |
|:---------------------------------------------------------:|
|            Processor / RAM / Network / Storage            |

### Description

Adapt and optimize audio files outside the websites. This method saves a lot of bandwidth and relieves CPU and RAM as web servers are not optimized for (re)encoding audio files.

### Examples

If an audio file added directly to the CMS weighs 7 MB, it is possible to save:
  - 7 MB of bandwidth at the upload;
  - 100 KB when listening to the result file;
  - 6.9 MB of server hard disk storage.

### Validation rule

| The number of ...                       | is equal to or less than |  
|-----------------------------------------|:------------------------:|
| audio files encoded directly by the CMS |             0            |
