## Preferir la entrada asistida al autocompletado

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  |  V3  | V4  | V5  |
| :-----: | :-: | :--: | :-: | :-: |
|   204   |  4  | 4 EN |     |     |

### Categorías

|   Ciclo de vida   |     Terceros     | Responsable |
| :---------------: | :--------------: | ----------- |
| 1. Especificación | Usuario/Terminal | PO/AMOA     |

### Indicaciones

| Grado de prioridad | ejecución | impacto ecológico |
| :----------------: | :-------: | :---------------: |
|         3          |     3     |         3         |

| Recursos Economizados |
| :-------------------: |
|       Consultas       |

### Descripción

El autocompletar o complemento automático es una característica muy común que sugiere al usuario los resultados correspondientes a su búsqueda mientras escribe. Por ejemplo, página web que permite buscar una ruta propondrá «Madrid», «Madagascar» o «Madeira» cuando el usuario escriba «Mad».

La implementación del autocompletado consiste en enviar una consulta al servidor cada vez que se introduce un carácter para recuperar los resultados coincidentes. Por lo tanto, se pueden realizar muchas consultas y gastar muchos recursos.

Cuando sea posible, esta funcionalidad se sustituirá por la entrada asistida.
Ésta consiste en guiar al usuario mediante un conjunto de informaciones e índices:

- Presentación del formato esperado sombreado en el campo de entrada (`placeholder`)
- Texto que explica el formato esperado
- Reacción de la interfaz con un mensaje de error o un cambio de color y ayuda textual cuando la entrada es incorrecta
- etc.

Las interacciones de entrada asistida se gestionan localmente, lo que reduce la interacción con el servidor.

Para el ejemplo de la búsqueda de itinerario y de la terminación de las ciudades, es posible, en caso de ambigüedad, proponer los diferentes resultados tras la presentación del formulario. El usuario introduce una cadena de caracteres, por ejemplo «Mad», presenta el formulario y en ese momento se le proponen diferentes opciones: «Madrid (España)», «Madagascar (Madagascar)», «Madeira».

Si no se puede evitar el autocompletado, es posible minimizar el número de consultas con optimizaciones sencillas:

- Añadir un retraso de unas décimas de segundos entre la adición de un carácter y la consulta: esto permite no desencadenar una consulta si el usuario no ha terminado su entrada.
- Limitar el número de resultados mostrados por el autocompletado, priorizados por una nota de relevancia
- Establecer un número mínimo de caracteres antes de intentar completar.
- Si el tamaño de la base de datos lo permite, incluirla en el código html o en el `local storage` y realizar el autocompletado en el lado del cliente.
- Almacenar en caché los resultados de las búsquedas con la cadena introducida para solicitar menos la base de datos.
- Contextualizar los resultados para limitar su número.

### Ejemplo

Beneficio potencial: cada vez que se utiliza la entrada asistida para una funcionalidad, en lugar del autocompletado, se reduce el número de consultas asociadas por un factor de 10.

### Solución alternativa

Si el dato que se ofrece al usuario es bastante pequeño en cantidad, puede incluirlo directamente en su código HTML y utilizar el elemento nativo [datalist](https://developer.mozilla.org/fr/docs/Web/HTML/Element/datalist).

Este sistema ofrecerá de forma nativa un mecanismo de autocompletado, y sin tener que ir y venir con el servidor.

```html
<label for="ice-cream-choice">Choose a flavor:[1]</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
  <option value="Chocolate"></option>
  <option value="Coconut"></option>
  <option value="Mint"></option>
  <option value="Strawberry"></option>
  <option value="Vanilla"></option>
</datalist>
```

### Principio de validación

| El número ..               | es inferior o igual a |
| -------------------------- | :-------------------: |
| de campos de autocompletar |         20 %          |

A traduire ?
