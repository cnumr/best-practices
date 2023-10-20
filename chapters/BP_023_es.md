## Usa CSS en lugar de imágenes

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:----:|:----:|:----:|
 | 11 | 26 | 23 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:---------:|:----:|:----:|
 | 3. Implementación | Red | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:-------------------:|:------------------------- :|:---------------------:|
 | 4 | 3 | 4 |

 |Recursos guardados |
 |:----------------------------------------------- -----------:|
 | Red / Consultas |

 ### Descripción

 Utilice propiedades CSS en lugar de imágenes. Las hojas de estilo son mucho más pequeñas especialmente cuando están comprimidas. Solicitar una hoja de estilo solo genera una única solicitud HTTP mientras que el uso de muchas imágenes genera muchas solicitudes HTTP (una solicitud HTTP para cada imagen).

 ### Ejemplo

Las esquinas redondeadas de los elementos deben implementarse con CSS en lugar de imágenes.

 Prefiero escribir:
 ```css
 #marco {
 radio de borde: 10px;
 }
 ```

 ```html
 <div id="marco">
 <p>
 Lorem ipsum dolor sit amet consectetur adipiscing elit.
 </p>
 </div>
 ```


 ### Regla de validación

 | El número de... | es igual o menor que |
 |----------------------|:-------------------------:|
 | imágenes que podrían haber sido reemplazadas por CSS | 0 |
