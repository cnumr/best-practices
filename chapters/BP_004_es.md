## Evite el autocompletado en favor de otras técnicas para facilitar la entrada del usuario

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:----:|:----:|:----:|
 | 204 | 4 | 4 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:----------------:|:-------------:|:-----------: |
 | 1. Especificación | Usuario/Dispositivo | PO |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-------- ---------:|
 | 3 | 3 | 3 |

 | Recursos guardados |
 |:----------------:|
 | Solicitudes |

 ### Descripción

 Autocompletar es una característica popular que sugiere resultados relacionados con la búsqueda cuando el usuario escribe.
Por ejemplo un sitio que permite buscar una ruta sugerirá "París" "Lyon Part-Dieu" y "Paray le Monial" cuando el usuario escriba "Par".

 La implementación del autocompletado suele consistir en enviar una solicitud al servidor por cada carácter ingresado para recuperar los resultados correspondientes.
Esto puede provocar que se envíen muchas solicitudes y consumir muchos recursos.

 Si es posible esta funcionalidad debe reemplazarse por entrada asistida.
 Consiste en guiar al usuario a través de un conjunto de información y consejos:
 - Presentación del formato esperado en gris en el campo de entrada ("marcador de posición")
 - Texto que explica el formato esperado.
 - Reacción de la interfaz con un mensaje de error o un cambio de color y ayuda textual cuando la entrada es incorrecta
 - etc.

Las interacciones relacionadas con la entrada asistida se gestionan localmente lo que reduce los intercambios con el servidor.

 Para el ejemplo de buscar una ruta y entrar en una ciudad es posible en caso de ambigüedad proponer
 los diferentes resultados después de enviar el formulario. El usuario ingresa una cadena por ejemplo "Lente"
 envía el formulario y se le ofrecen diferentes opciones: "Lens (Francia)" "Lens (Bélgica)"
 "Loison bajo lente".

Si no se puede evitar el uso del autocompletado es posible minimizar el número de solicitudes con optimizaciones simples:
 - Añadir un retraso de unas décimas de segundo entre la adición de un carácter y la solicitud: esto permite no activar una consulta si el usuario no ha terminado de escribir.
 - Limitar el número de resultados mostrados priorizados por una puntuación de relevancia
 - Establece un número mínimo de caracteres antes de intentar completar.
 - Si el tamaño de la base de datos lo permite inclúyalo en el código html o en el `almacenamiento local` y realice el autocompletado del lado del cliente.
 - Almacena en caché los resultados de la búsqueda con la cadena ingresada como clave para reducir la carga en la base de datos.
 - Contextualizar los resultados para limitar su número.

 ### Ejemplo

 Ganancia potencial: el número de solicitudes podría reducirse en un factor de 10.

 ### Solución alternativa

 Si los datos que se ofrecen al usuario son bastante pequeños puedes incluirlos directamente en tu código HTML y utilizarlos
 la lista de datos nativa (https://developer.mozilla.org/fr/docs/Web/HTML/Element/datalist).

Este sistema ofrecerá un mecanismo de autocompletado nativo y del lado del cliente.


 ```html
 <label for="ice-cream-choice">Elige un sabor:</label>
 <input list="sabores-helados" id="elección-helado" nombre="elección-helado" />

 <datalist id="sabores-de-helado">
 <opción valor="Chocolate">
 <opción valor="Coco">
 <opción valor="Menta">
 <opción valor="Fresa">
 <opción valor="vainilla">
 </lista de datos>
 ```

 ### Regla de validación

 | El número de... | es igual o menor que |
 |--------------------|:-------------------- -:|
 | campos con autocompletar | 20% |
