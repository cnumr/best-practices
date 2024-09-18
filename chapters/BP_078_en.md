## Compress CSS, Javascript, HTML and SVG files

### Identifiers

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   86    | 80  | 78  |     |     |

### Categories

|    Life cycle     |  Tiers  |         Responsible          |
| :---------------: | :-----: | :--------------------------: |
| 3. Implementation | Network | Software Architect/Developer |

### Indications

| Priority | Implementation difficulty | Ecological impact |
| :------: | :-----------------------: | :---------------: |
|    4     |             3             |         4         |

| Saved resources |
| :-------------: |
|     Network     |

### Description

Compress CSS stylesheets, JavaScript libraries, and HTML files to limit bandwidth use and improve loading time.
GZIP algorithm is a server-side compression standard, compressing resources on-the-fly before sending them to the clients.
More recently, BROTLI has gained popularity thanks to enhanced performance, and is currently being supported by all major web browsers.

### Example

To use BROTLI in Apache, simply add the following configuration:

```
# compress html, text, xml, css, javascript
AddOutputFilterByType BROTLI_COMPRESS text/html text/plain text/xml text/css text/javascript application/javascript

# Or, compress certain ﬁle types in a specific directory:
<Directory "/your-directory">
    AddOutputFilterByType BROTLI_COMPRESS text/html
</Directory>
```

The NGINX web server handles GZIP compression by default, but only for HTML files.
To enable it for images and other resources, you can refer to this page: https://www.digitalocean.com/community/tutorials/how-to-improve-website-performance-using-gzip-and-nginx-on-ubuntu-20-04

To install and configure BROTLI on NGINX, see https://github.com/google/ngx_brotli.

### Validation rule

| The number of ...                                 | is equal to or less than |
| ------------------------------------------------- | :----------------------: |
| uncompressed CSS, JavaScript, HTML, and SVG files |            0             |
