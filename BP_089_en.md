## Using virtualized servers

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   70   | 87  | 89  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 4. Production | Datacenter | System Administrator |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 3 | 3 |

|Saved resources                                    |
|:----------------------------------------------------------:|
| Processor / RAM |

### Description


Virtualization allows creating and executing computer virtual representations on one or more physical machines. Virtualization responsible software allocates resources between different virtual environments based on their needs.

As a result, virtualization allows:

- hardware savings through mutualization
- optimal resources use (RAM, CPU, disk)
This method reduces the amount of electronic waste (WEEE) and energy consumption compared to using multiple physical servers.

Containerization is essential to virtualization: virtual machines can host a containerization service, enabling execution of multiple applications in an isolated way on the same operating system.

### Example

Use virtualization tools such as VMware, Xen, KVM, etc.

Use containerization tools such as Docker, Kubernetes, etc.

 It is more efficient to consolidate resources by implementing a hypervisor than using four dedicated servers for four projects, each running at maximum capacity of 20%. This way, a single physical machine can provide the same services as four dedicated servers.

### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
| non-mutually hosted applications |  0 |
