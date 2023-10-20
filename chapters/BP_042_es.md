## Ocultar elementos DOM mientras se modifican

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 44 | 44 | 42 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:-----------:|:------------- ---------------:|
 | 3. Implementación | Usuario/Dispositivo | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-------- ---------:|
 | 3 | 4 | 4 |

 | Recursos guardados |
 |:----------------------------------------------- ----------:|
 | Procesador |

 ### Descripción

Cuando es necesario modificar varias propiedades de un elemento DOM (Modelo de objetos de documento) cada cambio de contenido o estilo desencadenará repintados y/o reflujos.

 Suele ser preferible a:
 - Ocultar estos elementos (establecer la propiedad de visualización en ninguna) (1 reflujo);
 - Modificar todas las propiedades y volver a hacer visibles los elementos (1 reflujo).

 Es decir máximo 2 reflujos.

 ### Ejemplo

 Proceder de la siguiente:
 ```javascript
 var elem = document.getElementById('foo'); elem. estilo. mostrar = 'ninguno'; // Genera 1 reflujo elem.style.width ='10em';
 elemento. estilo. altura = 'automático';
 // ... otros cambios ...
 elemento. estilo. mostrar = 'bloque'; // Genera 1 reflujo
 ```

 Sólo se requieren 2 reflujos (en lugar de potencialmente 6 o 7).

 ### Regla de validación

 | El número de... | es igual o menor que |
 |------------------------------------------------ ---------------|:------------------------:|
 | Manipulaciones de elementos DOM mientras el elemento aún está visible | 1 |
