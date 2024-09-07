---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: en
published: false
---
## Use partial content reloading

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|   40    |  49 | 38  |      |

### Categories

|    Life cycle     |  Tiers  |  Responsible   |
|:-----------------:|:-------:|:--------------:|
| 3. Implementation | Network | UX/UI Designer |

### Indications

| Priority  | Implementation difficulty  | Ecological impact |
|:---------:|:--------------------------:|:-----------------:|
|     4     |             3              |         4         |

|                      Saved resources                      |
|:---------------------------------------------------------:|
|                 Processor / RAM / Network                 |

### Description

If your web page has one or more content zones with a high refresh rate, you should only reload these zones instead of the entire page.
To achieve this you can use several techniques, generally with Javascript : AJAX, Service Workers, Web Components, or custom developments.

It is even possible to not include these parts in the HTTP response and to add them later with the Javascript described above.
This architecture can be referred to as "component islands" or "islands architecture". 
On advantage is the ability to keep cache solutions for the "container" pages and to only reload the content parts that require it.

### Example

News sites very commonly use this technique, for clearly identifiable areas that require
quick updates (news flash, weather data, stock market prices, sports results, etc.).

### Validation rule

| The number of ...                                       | is equal to or less than  |  
|---------------------------------------------------------|:-------------------------:|
| Content zones that can be partially updated but are not |             0             |
