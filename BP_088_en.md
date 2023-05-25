## Adapting service quality and availability level

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  501    |  86 | 88  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 4. Production | Datacenter | System Administrator |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 2 | 4 |

|Saved resources                                    |
|:----------------------------------------------------------:|
| Power Consumption |

### Description

Quality of service (QoS) and srvice level agreement (SLA) must be determined with website or online service users. For example, it is unnecessary to host services in a very high availability data center (Tier IV) if users accept an availability rate lower or equal to 99% for a non-critical service. With equivalent energy efficiency, the higher the availability of the data center hosting the website or online service, the higher its overall environmental footprint. Notably because everything is redundant and active: two power supply chains, two cold production and distribution chains, etc.
It is essential to avoid overqualification.
It is recommended to apply a quality of service based on the necessary and sufficient resources and availability rate instead.

### Example

Despite having hundreds millions of users, Web giants do not offer very high availability level of Tier IV type. Data is redundant on at least one other server in another data center. If a server fails, users will automatically be routed to the backup server. This action may take a few seconds, which is acceptable and almost imperceptible for end-users.

### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
| increases in the availability level while the current level is sufficient  | 0  |
