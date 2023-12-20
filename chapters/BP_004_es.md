## Evite el autocompletado en favor de otras técnicas para facilitar la entrada del usuario

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:----:|:----:|:----:|
 | 204 | 4 | 4 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:----------------:|:-------------:|:-----------:|
 | 1. Especificación | Usuario/Dispositivo | PO |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-----------------:|
 | 3 | 3 | 3 |

 | Recursos ahorrados |
 |:----------------:|
 | Solicitudes |

 ### Descripción

 Autocompletar es una característica popular que consiste en sugerir al usuario los resultados relacionados a la consulta que esta escribiendo.
Por ejemplo, un sitio que permite buscar una ruta sugerirá "París", "Lyon Part-Dieu", y "Paray le Monial", cuando el usuario escriba "Par".

 La implementación del autocompletado suele consistir en enviar una solicitud al servidor por cada carácter ingresado para recibir los resultados correspondientes. Esto puede provocar que se envíen muchas solicitudes y consumir muchos recursos.

 Si es posible, esta funcionalidad debe reemplazarse por entrada asistida.
 Consiste en guiar al usuario a través de un conjunto de información y consejos:
 - Presentación del formato esperado en gris en el campo de entrada (`placeholder`)
 - Texto que explica el formato esperado.
 - Reacción de la interfaz con un mensaje de error o un cambio de color y ayuda textual cuando la entrada sea incorrecta
 - etc.

Las interacciones relacionadas con la entrada asistida se gestionan localmente, lo que reduce los intercambios con el servidor.

 Para el ejemplo de buscar una ruta y entrar ciudades, es posible, en caso de ambigüedad proponer diferentes resultados después de enviar el formulario. El usuario ingresa una cadena, por ejemplo "Lens", envía el formulario y se le ofrecen diferentes opciones: "Lens (Francia)", "Lens (Bélgica)", "Loison under Lens".

Si no se puede evitar el uso del autocompletado. es posible minimizar el número de solicitudes con optimizaciones simples:
 - Añadir un delay de unas décimas de segundo entre la adición de un carácter y la solicitud: esto permite no activar una consulta si el usuario no ha terminado de escribir.
 - Limitar el número de resultados mostrados, priorizando por su puntuación de relevancia
 - Establece un número mínimo de caracteres antes de intentar completar.
 - Si el tamaño de la base de datos lo permite inclúyalo en el código html o en el `local storage` y realice el autocompletado del lado del cliente.
 - Almacena en caché los resultados de la búsqueda con la cadena ingresada como clave para reducir la carga en la base de datos.
 - Contextualizar los resultados para limitar su número.

 ### Ejemplo

Beneficio potencial: el número de solicitudes podría reducirse en un factor de 10.

 ### Solución alternativa

 Si los datos ofrecidos al usuario son bastante pequeños en cantidad, puedes incluirlos directamente en tu código HTML y utilizar los
 elementos nativos [datalist](https://developer.mozilla.org/fr/docs/ Web/HTML/Element/datalist).

Este sistema ofrecerá un mecanismo de autocompletado nativo y del lado del cliente.

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

 ### Regla de validación

 | El número de... | es igual o menor que |
 |--------------------|:---------------------:|
 | campos con autocompletar | 20% |
