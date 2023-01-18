## Eliminate non-essential features

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   109   | 1  | 1  |      |

### Categories

|    Life cycle    |    Tiers    | Responsible |
|:----------------:|:-----------:|:-----------:|
| 1. Specification | User/Device |     PO      |

### Indications

| Priority | Implementation difficulty | Ecological impact |
|:--------:|:-------------------------:|:-----------------:|
|    5     |             4             |         5         |

|                Resources saved                 |
|:----------------------------------------------:|
| Processor / RAM / Storage / Network / Queries  |

### Description

Several studies (Cast Software and Standish Group, in particular) show that 70% of the functionalities requested by 
the users are not essential and that 45% are never used. By reducing the functional width and depth of the 
application, we lower its initial development cost, its technical debt and the associated environmental impacts.

This reduces the infrastructure needed to run it. Moreover, for a given usability level, the poorer the 
application is functionally, the easier it will be to use. So it is interesting to reduce the functional width 
of the application as much as possible, by focusing on the essential need of the user.

Detecting a non-essential functionality is possible when analyzing the requirements specification. The MoSCoW method, workshops,
wireframes or prototypes with user tests make it possible to verify the usefulness of a feature prior to its development.

### Exemples

Several succesful products of the digital world – Google, Twitter, WhatsApp, Pinterest, Instagram, etc. – provide a 
single service and rely on great functional sobriety.

During the requirements analysis, ask yourself the question: "What happens if we don't have it?" ".

Respect the YAGNI (You Ain't Gonna Need It) principle of extreme programming: develop when you actually need a feature,
not when you imagine you need it.


### Validation rule


| The number of ...                                                                            | is equal to or below |  
|----------------------------------------------------------------------------------------------|:--------------------:|
| features whose usefulness has not been verified with a panel of users before development     |         0 %          |
