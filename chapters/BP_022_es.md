## Limitar el número de CSS

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:----:|:----:|:----:|
 | 10 | 25 | 22 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:---------:|:----:|:----:|
 | 3. Implementación | Red | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:-------------------:|:------------------------- :|:---------------------:|
 | 4 | 4 | 4 |

 |Recursos guardados |
 |:----------------------------------------------- -----------:|
 | Red / Consultas |

 ### Descripción

 Limite la cantidad de CSS para evitar solicitudes HTTP y simplificar la representación en el navegador. Utilice una hoja de estilo común para todos los elementos comunes independientemente de la visualización y un archivo para cada tamaño de pantalla de destino o consulta de medios.

Tenga cuidado: importe estos archivos en el código HTML y NO con directivas @import en los propios archivos CSS. Al dividirse de esta forma los dispositivos de los usuarios elegirán cuál es el más adecuado y aplazarán la carga de los archivos que no necesiten.

 Los archivos CSS necesarios para algunos componentes se pueden cargar según el contexto si es necesario.

 ### Ejemplo

 ```
 <link rel='stylesheet' id='css-css' href='commons.css' type='text/css' media='all' />
 <link rel='stylesheet' id='css-xs-css' href='small-screens.css' type='text/css' media='(max-width: 959px)' />
 <link rel='stylesheet' id='css-sm-css' href='tablets.css' type='text/css' media='(min-width: 768px)' />
 <link rel='stylesheet' id='css-mdlg-css' href='large-screens.css' media='(min-width: 960px)' />
 <link rel='stylesheet' id='css-print-css' href='print.css' type='text/css' media='print' />
 ```

 ### Regla de validación

 | El número de... | es igual o menor que |
 |----------------------|:-------------------------:|
 | Archivos CSS | 10 |
