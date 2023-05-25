## Storing data in the cloud

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  71    |  92 |  93 |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 4. Production | Datacenter | System Administrator |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 2 | 3 | 2 |

|Saved resources                                    |
|:----------------------------------------------------------:|
| Storage   |

### Description

Cloud computing solutions might be useful in order to optimize required storage space for websites' or online services' resources. This way, while having an elastic solution, resources aren't unnecessarily monopolized. The other advantage is to host static resources on cookie-free domains. This way each resource transferred to the browser won't require cookie transportation (see rule #96).

This method is useful for images and other static resources. As we should not multiply domains (see best practice #55), the simplest way is to group all static resources on a single online storage service.

### Example

 it is more efficient to use Amazon's S3 storage service than to add new hard drives to existing servers in the case of a video testimonial-based contest realization.

### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
| resources, website data, that are not stored on a cloud computing solution  |  0 |
