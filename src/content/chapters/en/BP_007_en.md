---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: en
published: false
---
## Respect the Back/Forward cache

### Identifiers

| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|  28     | 5   |  7  |      |

### Categories

| Life cycle |     Tiers     |  Responsible   |
|:----------:|:-------------:|:--------------:|
| 2. Design  | User / Device | UX/UI Designer |

### Indications

| Priority | Implementation difficulty | Ecological impact |
|:--------:|:-------------------------:|:-----------------:|
|    3     |             4             |         3         |

|  Ressources saves   |
|:-------------------:|
| Processor / Network |

### Description

The browsers have a feature of fast navigation in the history (previous page and next page buttons), called 
_back-forward cache_ or _bfcache_.

Contrary to the HTTP cache which makes it possible to keep in memory the responses to the requests previously sent
and to speed up the re-loading of these pages, the _bfcache_ cache allows the browser to store an entire page in memory.
However, as the use of this feature requires additional machine resources on the user side, it's interesting to reduce 
the functionalities of the pages stored with the _bfcache_ as much as possible. Moreover, the use of _bfcache_ implies 
some caution, especially when the waiting time is exceeded (_setTimeout_).
Indeed, as browsers suspend the execution of pending timers and tasks in JavaScript queues, and resume it when the page 
is restored from the _bfcache_, there may be problematic situations. For example, if the browser suspends a task 
required as part of an IndexedDB transaction or API usage and other tabs (using the same IndexedDB database) are open at
that time, the browser will not cache individual pages.

Any element that would make the page ineligible for _bfcache_ and/or which would render the page unusable after leaving 
it should be avoided.

### Example

Avoid :
 - actions triggered when leaving the page (`unload` or `beforeunload` events, prefer `pagehide` if it is really necessary)
 - links that open new tabs / windows without `rel="noopener"` or `rel="noreferrer"`
 - leave connections (IndexedDB, `fetch()` ou XMLHttpRequest, Web Sockets, etc.) open when the user leaves the page

Use the `pageshow` and/or `pagehide` events to reset the elements that require it : e.g. re-enable form buttons that
deactivate upon submission, delete sensitive information (such as passwords), or to close/reopen persistent connections.

Source:
* https://web.dev/bfcache/ (content under CC BY 4.0 licence - _Back/forward cache_ from Philip Walton)


### Validation rule

| The number of ...             | is equal to or less than |  
|-------------------------------|:------------------------:|
| pages ineligible to _bfcache_ |            0%            |
