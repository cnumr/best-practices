## Remove all warnings and notices

### Identifiers

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   51    | 65  | 70  |     |     |

### Categories

|  Life cycle   |   Tiers    |     Responsible      |
| :-----------: | :--------: | :------------------: |
| 4. Production | Datacenter | System Administrator |

### Indications

| Priority | Implementation difficulty | Ecological impact |
| :------: | :-----------------------: | :---------------: |
|    2     |             3             |         2         |

|   Saved resources   |
| :-----------------: |
| Processor / Storage |

### Description

Warnings and notices slow down application servers such as PHP as they have to trace the errors origins and record messages explaining the associated problems in various logs systems.

### Example

Avoid :

```html
<html>
  <body>
    <form method="post" accept-charset="utf-8">
      <label>
        First Name
        <input
          type="text"
          name="ﬁrst_name"
          value="<?php print $_POST['ﬁrst_name'] ?>"
          placeholder=""
        />
      </label>
      <label>
        Last Name
        <input
          type="text"
          name="last_name"
          value="<?php print $_POST['last_name'] ?>"
          placeholder=""
        />
      </label>
    </form>
  </body>
</html>
```

`$_POST['ﬁrst_name']` and `$_POST['last_name']` generate notices because they are not necessarily defined.

### Validation rule

| The number of ...    | is equal to or less than |
| -------------------- | :----------------------: |
| warnings and notices |            0             |
