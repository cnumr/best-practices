## Avoid redirects

### Identifiers

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   45    | 97  | 95  |     |     |

### Categories

|        Life cycle        |  Tiers  |         Responsible          |
| :----------------------: | :-----: | :--------------------------: |
| 6. Support / Maintenance | Network | Software Architect/Developer |

### Indications

| Priority | Implementation difficulty | Ecological impact |
| :------: | :-----------------------: | :---------------: |
|    3     |             3             |         4         |

|        Saved resources        |
| :---------------------------: |
| Processor / Network / Storage |

### Description

Redirects slow response time while using unnecessary resources. Therefore, they should be avoided as much as possible. Redirects can occur at different places: HTML code, JavaScript code, HTTP server, and application server (PHP, etc.).

### Example

On the HTTP server level (Apache, in this case), redirects involve activating systematic URL rewriting via the .htaccess file:

```apacheconf
<IfModule mod_alias.c>
    Redirect permanent http://old_address.com http://new.address.com/
</IfModule>
```

It is preferable to manually replace static addresses embedded in web pages.

### Validation rule

| The number of ... | is equal to or less than |
| ----------------- | :----------------------: |
| redirects         |            1             |
