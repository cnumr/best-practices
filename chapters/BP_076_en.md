## Avoir transferring a large amount of data for processing tasks

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  58    | 75  | 76  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 2. Design | Network | Software Architect/Developer |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 3 | 3 |

|Saved resources                                    |
|:----------------------------------------------------------:|
| Processor / RAM / Network   |

### Description

Database management systems are designed and optimized to efficiently run large amounts of data processes.
In the case of processing with a more or less complex logic, it is not recommended to retrieve "raw" data and run all computing operations, transformation or aggregation operations on the backend or even frontend server side.

These processes must rather be carried out as close as possible to  data in order to:

- limit bandwidth due to unprocessed data transfer
- profit database optimizations regarding data manipulation
- reduce CPU cycles on backend or even frontend server side

### Example

In the case of complex queries with large amounts of data and  relational database management system (RDBMS) use, stored procedures should be stored because:

- stored procedures save queries interpretation on server side since it is pre-compiled;
- stored procedure are less bandwidth-intensive as there is less information sent between servers and clients.

All recent RDBMS (SQL Server, MySQL, PostgreSQL, etc.) support stored procedures.

### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
| processes  with a large amount of data ran outside of the database server |  1 |
