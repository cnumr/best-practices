## Avoid transferring large amounts of data for processing tasks

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|   58    | 75  | 76  |      |

### Categories

| Life cycle |  Tiers  |         Responsible          |
|:----------:|:-------:|:----------------------------:|
| 2. Design  | Network | Software Architect/Developer |

### Indications

| Priority | Implementation difficulty | Ecological impact |
|:--------:|:-------------------------:|:-----------------:|
|    3     |             3             |         3         |

|                      Saved resources                      |
|:---------------------------------------------------------:|
|                 Processor / RAM / Network                 |

### Description

Database management systems are designed and optimized to efficiently run large amounts of data processing.
In the case of tasks with a complex logic, retrieving "raw" data and running all computing operations like
transformation or aggregation on the backend or even frontend server side isn't recommended.

These processes must rather be carried out as close as possible to the data in order to:

- limit bandwidth use due to unprocessed data transfer
- take advatnage of the database optimizations regarding data manipulation
- reduce CPU cycles on the backend server or even the frontend sides

### Example

In the case of complex queries with large amounts of data, whan a relational database management system (RDBMS) is used, 
stored procedures should be used because:

- stored procedures save queries interpretation on server side since they are pre-compiled;
- stored procedures are less bandwidth intensive as there is less information transfered between servers and clients.

All recent RDBMS (SQL Server, MySQL, PostgreSQL, etc.) support stored procedures.

### Validation rule

| The number of ...                                                        | is equal to or less than |  
|--------------------------------------------------------------------------|:------------------------:|
| processes with a large amount of data ran outside of the database server |             1            |
