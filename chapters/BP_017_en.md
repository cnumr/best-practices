## Choose an appropriate data format

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  113    | 54  | 17  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 3. Implementation | Datacenter | Software Architect/Developer |

### Indicators

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Saved resources                                    |
|:----------------------------------------------------------:|
|  Processor / RAM / Storage / Network  |

### Description

The data type used to manipulate and store data has a significant impact on memory consumption and processor cycles required for database manipulations, , at the application server level and even in the browser (manipulation via JavaScript), as well as on storage space required. Choosing the wrong data type can result in:
 - Memory waste (for example, if you store very small data in a column designed to store large amounts of data) ;
 - Performance issues (it is faster to search for a number than a string of characters).
   
Ideally, the choice of data type and its sizing should be based on the analysis of a representative sample of data.

### Examples

In the case of a training institution,  the size of the field used to store the number of students should be based on a statistical study.
This way, we can determine if it is possible to use a TINYINT (1 byte, up to 127) instead of a SMALLINT (2 bytes, up to 32,767).
In any case, the default choice of an INT (4 bytes, up to 2,147,483,647) or even a BIGINT (8 bytes) is an aberration (which we unfortunately encounter encounter every day during audits…).
Potential gain: up to 8 times less storage. Processor cycle consumption is reduced in the same proportions.

In the case of storing a UUID identifier, a textual storage will not be appropriate. A UUID is stored on 16 bytes whereas its textual form would require a minimum of 36 bytes. Database indexes would also not be as efficient than UUID/GUID/uniqueidentifier type.

### Validation rule

| The number of ...     | is inferior to or equals   |  
|-------------------|:-------------------------:|
| database fields whose format is innapropriate  | 15%  |
