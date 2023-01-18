## Avoid autocomplete in favor of other techniques to facilitate user input

### Identifiers

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  204    | 4  | 4  |      |

### Categories

|    Life cycle    |     Tiers     | Responsible |
|:----------------:|:-------------:|:-----------:|
| 1. Specification | User / Device |     PO      |

### Indications

| Priority | Implementation difficulty | Ecological impact |
|:--------:|:-------------------------:|:-----------------:|
|   3      |            3              |        3          |

| Ressources saved |
|:----------------:|
|     Requests     |

### Description

Autocompletion, or automatic completion, is a very widespread feature consisting in suggesting to the user
results related to his research during his typing. For example, a site to find a route
will suggest "Paris", "Lyon Part-Dieu", and "Paray le Monial" when the user types "Par".

The implementation of autocompletion usually consists in sending a request to the server for each character entered to retrieve the
corresponding results. We can therefore have a lot of requests made and a lot of resources spent.

As far as possible, this functionality should be replaced by assisted input.
This consists of guiding the user through a set of information and clues:
- Presentation of the expected format in gray in the input field (`placeholder`)
- Text explaining the expected format
- Reaction of the interface with an error message or a change of color and textual help when the entry is incorrect
- etc.

Interactions related to assisted input are managed locally, which reduces exchanges with the server.

For the example of the route search and the completion of cities, it is possible, in case of ambiguity, to suggest
the different results after the submission of the form. The user enters a string, for example "Lens",
submits the form, and is then offered different options: "Lens (France)", "Lens (Belgium)",
"Loison under Lens".

If the use of autocompletion cannot be avoided, it is possible to minimize the number of requests with simple optimizations:
- Add a delay of a few tenths of a second between the addition of a character and the request: this makes it possible not to trigger a request if the user has not finished typing.
- Limit the number of results displayed, prioritized by a score of relevance
- Set a minimum number of characters before trying to complete.
- If the size of the database allows it, include it in the html code or in the `local storage` and perform client-side autocompletion.
- Cache search results with the string entered as the key to reduce the load on the database.
- Contextualize the results to limit their number.

### Exemple

Potential gain: the number of requests might be reduced by a factor of 10.

### Alternative solution

If the data that is offered to the user is quite small, you can include it directly in your HTML code and use 
the native [datalist](https://developer.mozilla.org/fr/docs/ Web/HTML/Element/datalist).

This system will offer native and client side autocompletion mechanism.


```html
<label for="ice-cream-choice">Choose a flavor:</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
    <option value="Chocolate">
    <option value="Coconut">
    <option value="Mint">
    <option value="Strawberry">
    <option value="Vanilla">
</datalist>
```

### Validation rule

| The number of ...        | is equal to or less than |  
|--------------------------|:---------------------:|
| fields with autocomplete |          20%          |
