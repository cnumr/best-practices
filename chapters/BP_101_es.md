## Agregar encabezados Expires o Cache-Control

 ### Identificadores

 | GreenIT | V2  | V3  | V4  |
 | :-----: | :-: | :-: | :-: |
 |    78   | 105 | 101 |     |

 ### Categorías

 | Ciclo de vida | Niveles |         Responsable       |
 | :-----------: | :-----: | :------------------------:|
 | 4. Producción |   Red   | Administrador del sistema |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 | :-------: | :--------------------------: | :---------------: |
 |     4     |              3               |          4        |

 |           Recursos ahorrados         |
 | :----------------------------------: |
 |  Procesador / Red / RAM / Consultas  |

 ### Descripción

 Los encabezados Expires y Cache-Control definen el tiempo durante el cual los navegadores deben mantener los recursos en su caché. Por lo tanto, es necesario agregarlos y configurarlos correctamente para hojas de estilo CSS, archivos JavaScript, e imágenes.

Lo ideal, es que la vida útil de estos elementos sea lo más larga posible para que los navegadores no tengan que volver a solicitarlos al servidor. Esto ahorra solicitudes HTTP, ancho de banda y ciclos de CPU desde el lado del servidor.

 ### Ejemplo

A continuación, se muestra un ejemplo de cómo configurar los encabezados Expires y Cache-Control para el servidor web Apache:

 ```apacheconf
 # BEGIN Encabezados de control de caché
<IfModule mod_headers.c>
    <FilesMatch "\\.(ico|jpe?g|png|gif|swf|css|gz)$">
        Header set Cache-Control"max-age=2592000, public"
    </FilesMatch>
    <FilesMatch "\\.(html|htm)$">
        Header set Cache-Control"max-age=7200, public"
    </FilesMatch>
</IfModule>
 # END Encabezados de control de caché
 ```

 ### Regla de validación

 | El número de...                            | es igual o menor que |
 | ------------------------------------------ | :------------------: |
 | faltan encabezados Expires o Cache-Control |            0         |
