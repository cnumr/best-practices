---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: en
published: false
---
## Use an asynchronous process when possible

### Identifiers

| GreenIT | V2  | V3  | V4  |
|:-------:|:---:|:---:|:---:|
|   112   |  8  | 8   |     |

### Categories

| Life cycle |  Tiers  |      Responsible       |
|:----------:|:-------:|:----------------------:|
| 2. Design  | Network | Architect / Developper |

### Indications

| Priority | Implementation difficulty | Ecological impact |
|:--------:|:-------------------------:|:-----------------:|
|     4    |             3             |         4         |

|     Ressources saved     |
|:------------------------:|
| RAM / Network / Requests |

### Description

If the user's actions imply a long running process, make it asynchronous if possible.

This way, the user can launch it and check back later if it's finished and ok, without waiting for the completion on his device. 
This user can be notified by an email with a link, or a dashboard of ongoing and finished processes can be provided.

This approach makes the user experience more agreeable and allow several backend optimizations: 

* if the architecture is divided this way, it makes it possible to free the presentation servers, allowing then serve more
  requests and improve perceived performance.
* it becomes possible to group the processes in batches, often more efficient in resources than synchronous processing on the fly.
* it makes it easier to smooth the load of the servers responsible for the processing, which allows better pooling of servers
  and consequently fewer of them.

### Example

In the case of an online office document conversion service, the user can upload his files all at once and then 
be notified by e-mail when the processing is complete. To optimize the process, all the files can be grouped and 
compressed in an archive.

### Validation rule

| The number of ...                            | is equal to or less than |  
|----------------------------------------------|:------------------------:|
| synchronous processes longer than one minute |            0             |
