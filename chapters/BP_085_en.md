## Setting website end-of-life plan

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   1030   |   | 85  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 7. End-of-life | Datacenter | PO |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 2 | 3 |

|Saved resources                                    |
|:----------------------------------------------------------:|
| Processor / RAM / Network / Queries / Storage   |

### Description
Most environments (POC - proof of concept, testing, acceptance, etc.) eventually end up being obsolete and no longer needed. About 25% of physical servers and 20% of virtual servers (VMs) become zombies, meaning they consume resources while waiting to be used. This represents avoidable environmental and economic impacts.

Implementing an end-of-life plan can prevent this kind of situation.

Simple end-of-life plans involve naming someone who will be responsible to decide when to stop the service. Their role would be to monitor this service's activity until they decide to stop it. Another method is to set an end-of-life scenario (expiration date, etc.) and allocate the appropriate budget from start. A third option would be to extend its lifespan instead of stopping the service.

Stopping a service involves:

- Releasing resources: decommissioning the service, its dependencies, tools used by the development team (e.g., Teams channel).
- Deleting, archiving, or otherwise managing data (including document management and bug tracking systems).
- Reallocating installations, equipment, and other project resources (including source code).
- Valuing skills acquired during the project's lifetime.

### Example

Several end-of-life scenarios are possible when migrating data or applications to a cloud environment:

- Copying and pasting the existing data or application to the cloud through decommissioning the old environment.
- Refactoring with architecture and code changes, which may question the existing environment. For example, questioning the unused functionalities conserved for ulterior hypothetical use...

### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
|  websites with no end-of-life plan | 0  |
