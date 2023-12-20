## Proporcionar un CSS impreso

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:----:|:----:|:----:|
 | 16 | 30 | 27 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:---------:|:----:|:----:|
 | 3. Implementación | Usuario/Dispositivo | Diseñador UX/UI |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:-------------------:|:------------------------- :|:---------------------:|
 | 3 | 4 | 3 |

 |Recursos ahorrados |
 |:----------------------------------------------------------:|
 | Red |

 ### Descripción

Además del servicio prestado al usuario de Internet la impresión de hojas de estilo CSS reduce el número de páginas impresas lo que indirectamente reduce la huella ecológica del sitio web. El diseño debe ser lo más sencillo posible con fuentes que ahorren tinta (Century Gothic por ejemplo). Recuerde también ocultar encabezados pies de página menús barras laterales e imágenes que no sean contenido real. Etc.

 ### Ejemplo

 Este CSS de impresión "limpia" las páginas mostradas para proporcionar un diseño de impresión refinado:
 ```css
 mono {
 color de fondo: #ff; familia de fuentes: Serif; tamaño de fuente: 15 puntos;
 }
 #página { margen:0;
 borde: ninguno;
 }
 #banner #menuright #footer { display: none;
 }
 h1#arriba { margen:0;
 relleno:0;
 sangría de texto:0; altura de línea: 25 puntos; tamaño de fuente: 25 puntos;
 } (...)
 ```

 ### Regla de validación

 | El número de... | es igual o menor que |
 |----------------------|:-------------------------:|
 | falta imprimir CSS | 1 |
