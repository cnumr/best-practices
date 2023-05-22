## Reduce emails size

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   104   | 112  | 111  |      |

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
|  Network / Queries  |

### Description

Reduce the emails size when they are sent to users for notifications, alerts, or confirmation messages. Avoid attachments and embedded images. Shortened content is preferred. Optionally, use plain text instead of HTML.

### Example

Sending confirmation mails for a contact request does not justify adding HTML code and images. Basic HTML messages generally require:

- at least 2 images (logo and signature at the bottom of the page) = about 10 KB;
- 12 KB of HTML code for formatting (inline styles, tables, etc.);
- 4 KB of text (the message + 2 action links).

In the end:

- HTML email = 26 KB;
- plain text email = 4 KB.

This results in 22 KB of freed space for each email sent. In the case of a transactional website (including, for example, customer and internal alerts), potential gains become significant.


### Validation rule

| The number of ...     | is equal to or less than   |  
|-------------------|:-------------------------:|
| over 1mb sent emails |  0 |
