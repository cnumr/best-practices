## Use event delegations

### Identifiers

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   41    | 46  | 44  |     |     |

### Categories

|    Life cycle     |    Tiers    |         Responsible          |
| :---------------: | :---------: | :--------------------------: |
| 3. Implementation | User/Device | Software Architect/Developer |

### Indications

| Priority | Implementation difficulty | Ecological impact |
| :------: | :-----------------------: | :---------------: |
|    3     |             3             |         4         |

| Saved resources |
| :-------------: |
| Processor / RAM |

### Description

Events delegation avoids overloading browser memory by instantiating a single listener for several DOM (Document Object Model) elements.

### Examples

The DOM element whose ID is "t" is declared as the delegate.

It intercepts the events of all of its children.

```html
<head>
     // ...
     <styletype="text/css">
      #t { border: 1px solid red } #t1 { background-color: pink; }
     </style>
     <script type="text/javascript">
         function modifyText(new_text) {
             let t2 = document.getElementById("t2");
             t2.ﬁrstChild.nodeValue = new_text;
         }
         function load() {
             var el = document.getElementById("t");
             el.addEventListener("click", function() {
               modifyText("four")
             }, false);
         }
     </script>
</head>
<body onload="load();">
     <table id="t">
         <tr><td id="t1"><button type="button">one</button></td></tr>
         <tr><td id="t2"><button type="button">two</button></td></tr>
     </table>
     <!-- ... -->
</body>
```

### Validation rule

| The number of ...                                                                                                  | is equal to or less than |
| ------------------------------------------------------------------------------------------------------------------ | :----------------------: |
| listeners of the same event on multiple HTML elements, belonging to the same group, without using event delegation |            0             |
