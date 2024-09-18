## Accurately quantify the dimensions of features and components

### Identifiers

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   110   |  2  |  2  |     |     |

### Categories

|    Life cycle    |    Tiers    | Responsible |
| :--------------: | :---------: | :---------: |
| 1. Specification | User/Device |     PO      |

### Indications

| Priority | Implementation difficulty | Ecological impact |
| :------: | :-----------------------: | :---------------: |
|    5     |             4             |         5         |

|                Resources saved                |
| :-------------------------------------------: |
| Processor / RAM / Storage / Network / Queries |

### Description

The "dimensions" of each functionality must be defined precisely and as a whole. It could be
a compression rate for the images of the graphical interface, the maximum response time for an HTTP request,
the number of items displayed in a list, etc.

The more the "dimensions" and requirements associated with each feature stick to the business, the more we avoid over-quality.
The logic must therefore be reversed in relation to current habits. If any information is not specified,
it is the minimum level of quality or the minimum quantity that is offered. For example, if not specified,
the number of items in a list is limited to 5 items or to the maximum number that can be displayed on the smallest
target screen of the application.

Default values, rarely changed by the user, should be chosen to meet the need with minimal impact.

### Example

Potential gain: by adjusting the number of items displayed on the results page of its Bing search engine,
Microsoft Research has demonstrated that it is possible to reduce the underlying physical infrastructure
(number of servers) by up to 80%.

Another example: by defaulting to an acceptable video resolution (480p) rather than maximum, we reduce the bandwidth
used for most users (who will not change the default value), while leaving the possibility for others to increase the
resolution if they need to.

### Validation rule

| The number of ...                           | is equal to |
| ------------------------------------------- | :---------: |
| features with larger dimensions than needed |      0      |
