## Avoid sending heavy and redundant emails

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   102   | 110  | 109  |      |

### Categories

| Life cycle |  Tiers  |  Responsible  |
|:---------:|:----:|:----:|
| 5. Use | User/Device | User |

### Indications

| Priority |      Implementation difficulty       |  Ecological impact    |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 3 | 3 |

|Saved resources                                    |
|:----------------------------------------------------------:|
|  Processor / Network / Queries  |

### Description

Emails are saved and duplicated on their service provider's disks. It is therefore important to limit the number of automatic emails (e.g. newsletters, customer management, order tracking) and reduce the number of recipients, attachments, and the overall volume.

### Example

Newsletters:

- Set the sending frequency to the bare minimum
- Only send newsletters to required people and suscribers (using an opt-in list, customer targeting, etc.)
- Send unsubscribe emails to customers who have not opened a certain number of previous newsletters
- Avoid attachments and use direct links instead
- Avoid images, reduce their size when they are required

Customer management:

- Reduce multiple emails to a single email for online orders (order, payment confirmation, shipment, satisfaction, reminder, delivery satisfaction, invoice, etc.)
- Only send attachments when necessary: for example, provide documents links on customer's account

### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
| emails with attachments  | 0  |
