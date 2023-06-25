## Using asynchronous servers

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|   77    | 94  | 97  |      |

### Categories

|  Life cycle   |   Tiers    |     Responsible      |
|:-------------:|:----------:|:--------------------:|
| 4. Production | Datacenter | System Administrator |

### Indications

| Priority | Implementation difficulty | Ecological impact |
|:--------:|:-------------------------:|:-----------------:|
|    3     |             3             |         4         |

|                      Saved resources                      |
|:---------------------------------------------------------:|
|                      Processor / RAM                      |

### Description

Servers (web, application, etc.) such as NGINX, node.js, or Gwan are designed to use as few resources as possible. They do not have to create a process or a thread for each request thanks to their asynchronous mode of operation, avoiding resources use.

While most web servers RAM consumption increases RAM as requests are made, asynchronous servers remain very stable.

### Example

Nginx is known to be more performant than Apache. It can serve 2.1 times more requests per second than the latter.

To go further:

https://nbonvin.wordpress.com/2011/03/14/apache-vs-nginx-vs-varnish-vs-gwan
https://nbonvin.wordpress.com/2011/03/24/serving-small-static-files-which-server-to-use


### Validation rule

| The number of ...               | is equal to or less than |  
|---------------------------------|:------------------------:|
| synchronous application servers |            1             |
