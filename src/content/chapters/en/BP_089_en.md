---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: en
published: false
---
## Use virtualized servers

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|   70    |  87 | 89  |      |

### Categories

|  Life cycle   |   Tiers    |     Responsible      |
|:-------------:|:----------:|:--------------------:|
| 4. Production | Datacenter | System Administrator |

### Indications

|      Priority      | Implementation difficulty | Ecological impact |
|:------------------:|:-------------------------:|:-----------------:|
|         3          |             3             |         3         |

|                      Saved resources                      |
|:---------------------------------------------------------:|
|                      Processor / RAM                      |

### Description

Virtualization allows creating and executing virtual representations of a computer on one or more physical machines. 
The virtualization software allocates resources between different virtual environments based on their needs.

As a result, virtualization allows:

- hardware savings through mutualisation
- optimal resources use (RAM, CPU, disk)

This method reduces the amount of electronic waste (WEEE) and energy use compared to multiple physical servers.

Containerization is another level of virtualization: virtual machines can host a container orchestration service, 
enabling execution of multiple applications in an isolated way on the same operating system.

### Example

Use virtualization tools such as VMware, Xen, KVM, etc.

Use containerization tools such as Docker, Kubernetes, etc.

It is more efficient to mutualise resources by using a hypervisor than using four dedicated servers for four projects, each running at maximum capacity of 20%. This way, a single physical machine can provide the same services as four dedicated servers.

### Validation rule

| The number of ...                                            | is equal to or less than |  
|--------------------------------------------------------------|:------------------------:|
| applications not using virtualization to mutualize resources |            0             |
