## Optimize database queries

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|   59    |  74 | 75  |      |

### Categories

|    Life cycle     |   Tiers    |         Responsible          |
|:-----------------:|:----------:|:----------------------------:|
| 3. Implementation | Datacenter | Software Architect/Developer |

### Indications

|      Priority      | Implementation difficulty | Ecological impact |
|:------------------:|:-------------------------:|:-----------------:|
|         3          |             3             |         3         |

|                      Saved resources                      |
|:---------------------------------------------------------:|
|                 Processor / RAM / Network                 |

### Description

Databases are typically essential application components. As many queries are used to retrieve and store data, 
they end up having a significant impact on the solution's resource use when executed frequently.

With this in mind, it is important to pay attention for these queries and ensure, at least for the most expensive ones that they are well optimized.

The most common optimization tips are:

  - Use less data and limit it to the bare minimum. For example, the `LIMIT` clause limits the number of result rows in relational databases. When possible, using the 'LIMIT' clause reduces the amount of transferred data. Performance gains will be even more significant if records contain a large number of voluminous fields.
  - Only use necessary fields in the tables or documents in order to avoid needlessly transferring data that will not be used and to avoid using database server and application server resources to manipulate them.
  - Add indexes on fields used as keys in your model. Adding them can completely change queries performance. Be careful: adding indexes makes writing longer as it must be updated for each added, modified or deleted document. This must be done if there are more reads than writes or if reads are particularly expensive.
  - Use database management system tools to analyze queries in order to identify improvement areas, such as EXPLAIN for RDBMS.
  - Cache the most expensive queries results as well as data that changes little or never (reference data).
  - Optionally, modifying data models to be able to access information more easily without joins (denormalization)

### Example

Here is an example, with the `LIMIT` clause:

If you only want to display the first 25 records from a table containing people's last and first names, you should replace when selecting:
```sql
SELECT firstname, lastname FROM people
```
by :
```sql
SELECT firstname, lastname FROM people LIMIT 0, 25
```

Index creation example:

```sql
CREATE INDEX idx_people_lastname_firstname ON people(lastname, firstname)
```

Following this command, the database management system will be able to find the `persons` rows more quickly from the information (name, first name).


### Validation rule

| The number of ...                                           | is equal to or less than |  
|-------------------------------------------------------------|:------------------------:|
| identified poorly performing queries that are not optimized |            0             |
