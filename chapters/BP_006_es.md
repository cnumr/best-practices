## Utilice la estrategia «mobile first» y/o considere la carga adaptativa

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 6 | 7 | 6 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:----------:|:-------------:|:--------------:|
 | 2. Diseño | Usuario/Dispositivo | PO / Desarrollo frontal |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-------- ---------:|
 | 4 | 4 | 5 |

 | Recursos guardados |
 |:-------------------:|
 | Procesador/Red |

 ### Descripción


 La estrategia mobile first consiste en diseñar un sitio/servicio en línea para uso móvil con la pantalla limitada asociada.
 espacio y red y ampliarlo para una pantalla más grande si y sólo si el aporte funcional/ergonómico está justificado. En
En este caso utilice la carga adaptativa.

 El enfoque de carga adaptativa consiste en seleccionar los recursos incluidos archivos JS y CSS que sean los más adecuados.
 para el contexto de uso (tamaño de pantalla/ventana densidad de píxeles calidad de la red cantidad de RAM etc.).

Estas limitaciones empujan el diseño hacia una aplicación web más ligera y eficiente.

 ### Ejemplo

En el lado del servidor se pueden utilizar las _sugerencias del cliente_ o se puede reconocer el agente de usuario del navegador para ofrecer contenido adaptado.
 Atención: el agente de usuario no siempre es fiable y los actores de la web desaconsejan su uso. Prefiero el
 sugerencias del cliente o las opciones del lado del cliente.

 En el lado del cliente se pueden utilizar las _media queries_ así como los atributos `media` de la etiqueta `<link>` para la inclusión de CSS.
 el `srcset` y `sizes` de `<img>` y toda la etiqueta `<picture>` para crear imágenes responsivas y las apropiadas
 propiedades de `<video>` y `<audio>`.

La información proporcionada por las _sugerencias del cliente_ también se puede recuperar a través de JavaScript para elegir el contenido de forma dinámica.

 En cualquier caso prefiera un modo predeterminado minimalista que permita el acceso a su sitio incluso si no todas sus funciones son compatibles.
 por todos los navegadores (¡sin deteriorar demasiado la experiencia del usuario por supuesto!).

 ## Fuentes

 * https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/client-hints
 * https://developers.google.com/web/updates/2015/09/automating-resource-selection-with-client-hints
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent

 ### Principio de validación

 | El número de... | es igual o menor que |
 |------------------------------------------------ -|:------------------------:|
 | diseños que no utilizan la estrategia «mobile first» | 1 |
