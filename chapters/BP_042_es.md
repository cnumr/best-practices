## Ocultar elementos del DOM mientras se modifican

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 44 | 44 | 42 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:-----------:|:----------------------------:|
 | 3. Implementación | Usuario/Dispositivo | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-----------------:|
 | 3 | 4 | 4 |

 | Recursos ahorrados|
 |:---------------------------------------------------------:|
 | Procesador |

 ### Descripción

Cuando hay que modificar varias propiedades de un elemento DOM (Document Object Model), cada cambio de contenido 
o estilo provocará repintados y/o reflujos.

Suele ser preferible:
 - Ocultar estos elementos (establecer la propiedad display en ninguna) (1 reflujo);
 - Modificar todas las propiedades y hacer que los elementos vuelvan a ser visibles (1 reflujo).

 Es decir máximo 2 reflujos.

 ### Ejemplo

Proceda de la siguiente manera:
 ```javascript
 var elem = document.getElementById('foo'); elem. estilo. mostrar = 'ninguno'; // Genera 1 reflujo elem.style.width ='10em';
 elemento. estilo. altura = 'automático';
 // ... otros cambios ...
 elemento. estilo. mostrar = 'bloque'; // Genera 1 reflujo
 ```

Sólo se necesitan 2 reflujos (en lugar de los 6 o 7 potenciales).

 ### Regla de validación

 | El número de... | es igual o inferior a |
 |---------------------------------------------------------------|:------------------------:|
 | Manipulaciones de elementos DOM mientras el elemento aún está visible | 1 |
