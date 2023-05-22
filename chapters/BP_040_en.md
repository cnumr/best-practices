## Only use essential parts of Javascript libraries and CSS frameworks

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   811   | 77  | 40  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 2. Design | Network |Software Architect/Developer |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 4 | 4 |

|Saved resources                                    |
|:----------------------------------------------------------:|
|  Processor / RAM / Network |

### Description

JavaScript libraries such as jQuery and ready-to-use CSS frameworks (Bootstrap, skeleton, gumby, foundation, etc.)
are excellent tools used to create websites very fast, as they almost meet all of the most common needs.
The downside is that only a small part of those libraries is generally used; however, there are frameworks and libraries that do not rely on modular architecture,
forcing users to download entire libraries only to use a small percentage of their features.

Avoid using these libraries when possible (see https://youmightnotneedjquery.com)
or only keep their most used parts (see https://getbootstrap.com/customize).

Tree shaking (i.e. to eliminate "dead", and therefore unused code) is easy when using bundlers (ex; Webpack).

### Example

![img_1.png](img_1.png)

Some frameworks (here Bootstrap) allow you to create custom libraries that only have the actually used parts of the site, thus reducing libraries size and resources consumed during execution.

### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
| used libraries with dispensable parts  | 1  |
