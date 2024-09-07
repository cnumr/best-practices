---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: en
published: false
---
## Use the « mobile first» strategy and/or consider Adaptive loading

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|  6      |  7  |  6  |      |

### Categories

| Life cycle |     Tiers     |  Responsible   |
|:----------:|:-------------:|:--------------:|
| 2. Design  | User / Device | PO / Front dev |

### Indications

| Priority | Implementation difficulty | Ecological impact |
|:--------:|:-------------------------:|:-----------------:|
|     4    |             4             |         5         |

|  Ressources saved   |
|:-------------------:|
| Processor / Network |

### Description


The mobile first strategy consist in designing an online site/service for mobile use, with the associated limited screen 
space and network, and expand it for larger screen if and only if the functional/ergonomic contribution is justified. In
this case, use adaptive loading.

The adaptive loading approach consists in selecting the resources, including JS and CSS files, that are the most suitable
for the context of use (screen/window size, pixel density, network quality, amount of RAM, etc.).

These constraints push the design towards a lighter and more efficient web application.

### Example

On the server side, the _client hints_ can be used, or the browser's user agent can be recognized to serve adapted content.
Be careful : the user agent is not always reliable, and its use is discouraged by the actors of the web. Prefer the
client hints or the client side options.

On the client-side, the _media queries_ can be used, as well as, the `media` attributes of the `<link>` tag for the CSS inclusion,
the `srcset` et `sizes` of `<img>` and the whole `<picture>` tag the to make responsive images, and the appropriate
properties of `<video>` et `<audio>`. 

The informations provided by the _client hints_ can also be retrieved via JavaScript to choose content dynamically.

In any case, favor a minimalist default mode allowing access to your site even if all its features are not supported 
by all browsers (without deteriorating the user experience too much of course!).

---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: en
published: false
---
## Sources

* https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/client-hints
* https://developers.google.com/web/updates/2015/09/automating-resource-selection-with-client-hints
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent

### Principe de validation

| The number of ...                               | is equal to or less than |  
|-------------------------------------------------|:------------------------:|
| designs not using the « mobile first » strategy |            1             |
