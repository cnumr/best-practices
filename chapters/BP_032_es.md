## Externalizar CSS y Javascript

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:----:|:----:|:----:|
 | 7 | 16 | 32 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:---------:|:----:|:----:|
 | 3. Implementación | Red | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:-------------------:|:------------------------- :|:---------------------:|
 | 4 | 4 | 4 |

 |Recursos ahorrados |
 |:----------------------------------------------------------:|
 | Red |

 ### Descripción

Garantizar que el código CSS y JavaScript no esté inline en el código HTML de la página, con la posible excepción 
de las variables de configuración de los objetos JavaScript.


Si el código CSS o JavaScript se incluye en el cuerpo del archivo HTML en varias páginas (o incluso en todo el sitio),
este código debe descargarse para cada página solicitada por los usuarios, lo que aumenta el volumen de datos descargados. 
Sin embargo, si los códigos CSS y JavaScript se escriben en archivos externos, los navegadores pueden almacenarlos en su sistema de caché local y no volver a descargarlos.

 ### Ejemplos
 En código HTML, no escriba:
 ```html
 <tipo de estilo="texto/css" media="pantalla">
 pag {color: #333; margen: 2px 0 }
 /* Todas las declaraciones CSS del sitio */
 </estilo>
 ```

 sino más bien:
 ```html
 <enlace href="css/styles.css" rel="hoja de estilo">
 ```



 ### Regla de validación

 | El número de... | es igual o menor que |
 |-----------------------------------------------------------------|:------------------------:|
 | URL con una cantidad significativa de código CSS/Javascript en línea | 2 |
