---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: en
published: false
---
## Avoid opening database connections when not necessary

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|    56   |  72 | 73  |      |

### Categories

| Life -cycle |   Tiers    |         Responsible          |
|:-----------:|:----------:|:----------------------------:|
|  2. Design  | Datacenter | Software Architect/Developer |

### Indications

|      Priority      | Implementation difficulty | Ecological impact |
|:------------------:|:-------------------------:|:-----------------:|
|         3          |             3             |         3         |

|                      Saved resources                      |
|:---------------------------------------------------------:|
|                 Processor / RAM / Network                 |

### Description
Opening a connection is a resource-intensive process for both client and server, regardless of the database system:
* Memory and disk I/O allocation for buffers,
* Network round trips for the connection protocol,
* Induced CPU cost.

Example: for Oracle, several round trips are necessary (validation of credentials, driver information, optimal packet size negotiation, etc.).
Opening and closing connection requires allocating and deallocating these resources, as well as many network exchanges, each time.

The usual best practice is to set up a connection pool.
It optimizes connection management as well as performance. However, its configuration is not necessarily a trivial operation (supervision is required to find the right settings).

Try to avoid application database accesses as much as possible.

### Example

HikariCP is a robust and performant JDBC connection pool. It is integrated into SpringBoot.

When there is no connection pool, reuse a connection and do not open/close a new connection for each request.

### Validation rule

| The number of ...                                                               | is equal to or less than |  
|---------------------------------------------------------------------------------|:------------------------:|
| unnecessary database connections for querying or storing necessary service data |            0             |
