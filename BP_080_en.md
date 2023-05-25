## Images optimization

### Identifiers
| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  21     | 76   |  80  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 3. Implementation | User/Device | User |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|     Resources saved      |
|:----------------------------------------------------------:|
| Network / Requests /  Storage |

### Description
Images often represent the major part from the downloaded bytes total, right after videos and just before CSS and JavaScript libraries.
Optimizing images is important to reduce consumed bandwidth. The first step is to choose the ideal format for your
display needs.

Raster images should first be restrained for photos and interface elements that cannot be supported by icons or CSS styles.

Choosing the appropriate format depends on the image properties : choosing between black & white or color, color palette, need for transparency...
Among these properties, the ability to definitively alter images (lossy) tends to favor formats such as JPEG, JPEG XL,
AVIF, or WebP, while needing transparency and/or the impossibility of altering the image (lossless) will tend to favor
PNG or WebP lossless format (which supports transparency).

Format importantly impacts images size: on average, .webp images will be 30% lighter than .jpeg
images or .png images. .avif images can be up to 20% lighter than .webp image and 50% lighter than .jepg images.

Don't forget to pay attention to these images formats browser support. .webp images will not be recognized by
old browsers and thus will not be displayed. It is possible to provide browsers with several formats for the same image to overcome this issue. Some server-side modules (such as Google's modPageSpeed, also available for Apache
and Nginx) even allow you to provide the appropriate image in relation to the browser that is calling the server.

Numerous tools will help you minimize images size:

- SQUOOSH
- CLOUDINARY
- ImageMagick
- PngCrush
- JpegTran

### Example
In this example, the DOM <picture> element informs the browser that there are two images: a .webp image and a
.jpg image, which is set by default. The browser will decide which image will be downloaded. If the .webp format is supported, the image.webp image will be downloaded; otherwise, image.jpg image will be downloaded.

```html
<picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="..." loading="lazy">
</picture>
```

To go further :
 - https://web.dev/choose-the-right-image-format/
 - https://www.fasterize.com/fr/blog/webp-avif-compresser-images/

### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
| non-optimized images  | 0  |
