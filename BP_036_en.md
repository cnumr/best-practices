## Vector images optimization

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   1050   | 22  | 36  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 5. Use | User/Device | User |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 4 | 4 |

|Saved resources                                    |
|:----------------------------------------------------------:|
|  Network  |

### Description

Modern browsers are all compatible with SVG (Scalable Vector Graphics) vector image format, which is based on a set of vectors described in XML. 
SVG images have two undeniable advantages: on the one hand,
they can be reduced and enlarged infinitely without quality loss; on the other hand, they are usually lighter than bitmap images.

However, most SVG images contain a lot of metadata that was needed to create them such as layer information, comments, etc., which are essential in the image editing process,
but useless for displaying it. Deleting them would result in reducing the total size of your files.
There are many minification and optimization tools available, such as Compressor.io, SVG Cleaner, or SVGO.

Gzip compression rate depends on image complexity, but remains important as it is about compressing text:
in general, 75% to 80% ratios can be reached.


### Examples

Potential gain: up to 75% less KB.

We tested SVGO on a 1KB SVG file. Its size has been reduced by 36%, dropping from 1101 to 700 bytes. File size decreased to 498 bytes by compressing this file via gzip before its transfer, less than half (45%) of its initial size, without any displaying quality loss.


### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
| non-optimized images   |  0% |
