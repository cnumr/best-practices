## Display Static Error Pages

### Identifiers

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   46    | 98  | 96  |     |     |

### Categories

| Life cycle |  Tiers  |         Responsible          |
| :--------: | :-----: | :--------------------------: |
| 2. Design  | Network | Software Architect/Developer |

### Indications

| Priority | Implementation difficulty | Ecological impact |
| :------: | :-----------------------: | :---------------: |
|    3     |             3             |         3         |

|           Saved resources           |
| :---------------------------------: |
| Processor / RAM / Network / Storage |

### Description

Error pages (40x, 50x) should be as light as possible, ideally non-existent. When browsers request non-existing resources (image, CSS style sheet, JavaScript file, etc.) or when servers return errors, the error pages that are sent can be heavier than the requested resource or page.

Furthermore, some CMSs execute their content search routine (in the database) to try to find requested resources. As a result, server code is executed, database server is solicited, and HTML page dynamic generation is executed. All of this process wastes CPU cycles, RAM, and bandwidth.

### Example

Avoid dynamic 404 pages, which are customized according URLs content. Static 404 pages are preferable.

### Validation rule

| The number of ...   | is equal to or less than |
| ------------------- | :----------------------: |
| dynamic error pages |            0             |
