## Only use double opt-in files

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  103    | 111  | 110  |      |

### Categories

| Life cycle |    Tiers    | Responsible |
|:----------:|:-----------:|:-----------:|
| 2. Design  | User/Device |     PO      |

### Indications

|      Priority      | Implementation difficulty | Ecological impact |
|:------------------:|:-------------------------:|:-----------------:|
|         2          |             3             |         2         |

|                      Saved resources                      |
|:---------------------------------------------------------:|
|               Processor / Network / Queries               |

### Description

Double opt-in is a marketing practice of ensuring  prospects consent, usually via electronic agreement, by ticking a box; and then validating by sending confirmation mails to the indicated addresses. The address status becomes double opt-in when recipients have clicked on the provided link in the received message. This process validates adresses and verifies that the person who provided it is the owner. This double verification confirms prospects' commitment to receive the newsletters, suscribption, etc.

It is therefore recommended to use the double opt-in practice to significantly reduce:
- the number of emails without real impact (and therefore bandwidth use);
- SMTP server load when sending the email campaign;
- server load when processing unsubscriptions.

### Example

In the case of a telephone operator or a bank: give customers a choice among a catalog of products or services for which they agree to be solicited for.

### Validation rule

| The number of ...     | is equal to or less than |  
|-----------------------|:------------------------:|
| opt-out contact files |             0            |
