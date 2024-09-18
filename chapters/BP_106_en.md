## Disable binary logs

### Identifiers

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   83    | 93  | 106 |     |     |

### Categories

|        Life cycle        |   Tiers    |     Responsible      |
| :----------------------: | :--------: | :------------------: |
| 6. Support / maintenance | Datacenter | System administrator |

### Indications

| Priority | Implementation difficulty | Ecological impact |
| :------: | :-----------------------: | :---------------: |
|    2     |             2             |         2         |

|      Saved resources      |
| :-----------------------: |
| Processor / RAM / Storage |

### Description

MySQL or MariaDB servers binary logs can become very large, consuming CPU cycles while generating input-output (I/O) HDD operations since each modification/deletion request is recorded into the log file. Disabling these logs will save a lot of resources. Before disabling, make sure that there is no need for a database replication and that the last backup data loss is acceptable.

### Example

For MySQL, add the following configuration:

```
skip-log-bin
```

### Validation rule

| The number of ...                                                                                    | is equal to or less than |
| ---------------------------------------------------------------------------------------------------- | :----------------------: |
| options --skip-log-bin and --disable-log-bin not activated in cases where binary logs are not useful |            0             |
