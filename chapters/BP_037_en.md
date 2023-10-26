## Use lazy loading

### Identifiers

| GreenIT  |  V2   |  V3   |  V4   |
|:--------:|:-----:|:-----:|:-----:|
|   1010   |       |  37   |       |

### Categories

|    Life cycle     |  Tiers  |  Responsible   |
|:-----------------:|:-------:|:--------------:|
| 3. Implementation | Network | UX/UI Designer |

### Indications

| Priority  | Implementation difficulty | Ecological impact |
|:---------:|:-------------------------:|:-----------------:|
|     4     |             4             |         5         |

|                      Saved resources                      |
|:---------------------------------------------------------:|
|                    Processor / Network                    |

### Description

By default, all resources (images, videos, iframes, etc.) of a web page are downloaded, even when users do not display them, for instance if they are outside the viewport. To avoid this, the lazy loading technique can be used: elements with this attribute will be loaded only when they become visible on the screen.

It is possible to add a `loading` attribute to images and iframes in HTML so that the browser will only download images 
that are displayed on the screen. However, this attribute is very recent: it will not work on older browser versions. 
For the sake of improved compatibility, it is still possible to use very light Javascript mini-libraries which can handle 
images lazy-loading, such as:
     - [LOZAD](https://cdn.jsdelivr.net/npm/lozad) 1.9 KB (gzip)
     - [vanilla-lazyload](https://cdn.jsdelivr.net/npm/vanilla-lazyload/dist/lazyload.min.js) 3.5 KB (gzip)
     
### Example

In this example, the image and iframe will be automatically lazy-loaded by the browser. If an image must be displayed on
the screen, it will be downloaded and displayed. Otherwise, it will not be downloaded.

```html
<img src="image.jpg" alt="..." loading="lazy">
<iframe src="video-player.html" title="..." loading="lazy"></iframe>
```

See also :
  - https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading
  - https://web.dev/browser-level-image-lazy-loading/
  - https://web.dev/lazy-loading-video/

### Validation rule

| The number of ...                                                                                     | is equal to or less than |  
|-------------------------------------------------------------------------------------------------------|:------------------------:|
| images, iframes, and videos called without a lazy loading attribute and below the initial viewport is |            0             |
