## Choose appropriate data formats

### Identifiers

| GreenIT |  V2   |  V3   |  V4   |
| :-----: | :---: | :---: | :---: |
|   113   |  54   |  17   |       |

### Categories

|    Life cycle     |   Tiers    |         Responsible          |
| :---------------: | :--------: | :--------------------------: |
| 3. Implementation | Datacenter | Software Architect/Developer |

### Indications

| Priority | Implementation difficulty | Ecological impact |
| :------: | :-----------------------: | :---------------: |
|    4     |             3             |         4         |

|           Saved resources           |
| :---------------------------------: |
| Processor / RAM / Storage / Network |

### Description

Data formats used to manipulate and store data have a significant impact on memory consumption and processor cycles required for database manipulations on application servers level and even in browsers (manipulation via JavaScript) as well as on required storage space. Choosing inappropriate data formats can result in:
 - memory waste (if you store very small data in columns designed to store large amounts of data for example) ;
 - performance issues (it is faster to search for a number than a string of characters).
   
Data format choice and appropriate sizing should ideally be based on a representative sample of data analysis.

### Examples

In the case of a training institution, the size of the field used to store the students number should be based on statistical studies.
It will be easier to determine if it is possible to use a TINYINT (1 byte, up to 127) instead of a SMALLINT (2 bytes, up to 32,767).
In any case, the default choice of an INT (4 bytes, up to 2,147,483,647) or even a BIGINT (8 bytes) isn't appropriate (which is eventually commonly encountered during audits).
You can potentially use up to 8 times less storage. Processor cycles consumption will be reduced correspondingly.

In the case of UUID identifiers storage, textual storage will not be appropriate. UUIDs require 16 bytes whereas textual equivalents would require a minimum of 36 bytes. Database indexes would also not be as efficient than UUID/GUID/uniqueidentifier format type.

### Validation rule

| The number of ...                            | is inferior to or equals |
| -------------------------------------------- | :----------------------: |
| database fields with an innapropriate format |           15%            |
