## Host resources (CSS/JS) on a cookie-free domain

### Identifiers

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   73    | 96  | 94  |     |     |

### Categories

|  Life cycle   |   Tiers    |     Responsible      |
| :-----------: | :--------: | :------------------: |
| 4. Production | Datacenter | System Administrator |

### Indications

| Priority | Implementation difficulty | Ecological impact |
| :------: | :-----------------------: | :---------------: |
|    3     |             3             |         4         |

| Saved resources |
| :-------------: |
|     Network     |

### Description

Images, CSS stylesheets, and JavaScript files should be hosted on cookie-free domains.
This prevents browsers from sending cookies for each resource when it's not needed.
Although transferred with each HTTP request, cookies are useless for static content, as they are used as a link between
user browsers and distant application server through the identifiers contained in the text file.
It is therefore preferable to store this type of content on a specific domain name such as static.mydomain.com.

### Example

Web leaders use a separate domain to serve static resources that do not require cookies. Yahoo!, for example, uses the yimg.com domain, YouTube uses ytimg.com, and Amazon uses images-amazon.com.

### Validation rule

| The number of ...                              | is equal to or less than |
| ---------------------------------------------- | :----------------------: |
| domains serving static resources WITH a cookie |            1             |
