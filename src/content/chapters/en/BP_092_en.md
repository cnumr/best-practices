---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: en
published: false
---
## Put the whole caches in RAM (opcode and kvs)

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|   85    | 90  |  92 |      |

### Categories

|  Life cycle   |   Tiers    |     Responsible      |
|:-------------:|:----------:|:--------------------:|
| 4. Production | Datacenter | System Administrator |

### Indications

| Priority | Implementation difficulty | Ecological impact |
|:--------:|:-------------------------:|:-----------------:|
|    2     |             2             |         3         |

|                      Saved resources                      |
|:---------------------------------------------------------:|
|                    Processor / Storage                    |

### Description

Caching systems should entirely be set in random access memory (RAM) whenever possible. This method avoids input/output operations on hard disks and CPU cycles for managing them.

There are two reasons to do so: quickly serve responses to the client and limit the number of hardware and software components involved in the response returned by the server.

Resource use duration is particularly short, as random access memory being very fast in terms of read/write accesses. In addition, components lifespan will be expanded with this method, since there is no mechanical movement as when using a hard disk.

### Example

Examples of RAM cache integration in Drupal:

- integration of Memcache: https://drupal.org/project/memcache
- integration of Varnish: https://drupal.org/project/varnish

### Validation rule

| The number of ...                    | is equal to or less than |  
|--------------------------------------|:------------------------:|
| caches that are not fully set in RAM |            0             |
