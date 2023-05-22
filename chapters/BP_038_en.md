## Use partial content reloading

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  40    |  49 | 38  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 3. Implementation | Network | UX/UI Designer |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Saved resources                                    |
|:----------------------------------------------------------:|
| Processor / RAM / Network   |

### Description

If your web page has one or more content zones that require high refresh rates, you should therefore only reload these instead of reloading the entire page.
To achieve this, you can use several techniques, generally Javascript techniques commonly called AJAX, that can also use Service Workers, Web Components, or custom developments.

It is even possible not to include these parts in the HTTP page request to hydrate it with these Javascript dynamic zones sometimes known as "component islands" or "islands architecture". The interest being the ability to keep cache solutions for "container" pages and to only reload the content parts that require it.

### Example

News sites very commonly use this process, which makes it possible to clearly identify areas that require
quick updates (news flash, weather data, stock market prices, sports results, etc.).

### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
| Content zones that can be partially updated but are not  | 0%  |
