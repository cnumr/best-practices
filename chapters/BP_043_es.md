## Minimizar los repintados (aspecto) y reflujos (diseño)

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 42 | 45 | 43 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:-----------:|:----------------------------:|
 | 3. Implementación | Usuario/Dispositivo | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------: |:-----------------:|
 | 4 | 4 | 4 |

 | Recursos ahorrados |
 |:---------------------------------------------------------:|
 | Procesador |

 ### Descripción

El repintado se refiere al cambio de apariencia de los elementos DOM, mientras que el reflujo se refiere al 
cambio / recálculo de su posición. Ambas operaciones consumen muchos recursos, especialmente ciclos de CPU, por lo que 
es necesario evitar activarlas siempre que sea posible.

 ### Ejemplo

No modifique las propiedades de estilo de los elementos (color de fondo, estilo de borde, color de texto, tamaño, etc.) para evitar repintados.

Limite los cambios de propiedades como posición, dimensión, tipo de posicionamiento, contenido, ( etc.) para evitar repintados. 
Esto es especialmente importante en el caso de algunos elementos HTML como las tablas, cuyos reflujos pueden requerir hasta tres veces más tiempo que otros elementos.

 Para más información :
 https://developers.google.com/speed/articles/reflow


 ### Regla de validación

 | El número de... | es igual o inferior a |
 |-------------------------------------------------------------------------------------------------- |:------------------------:|
 | modificaciones que no afectan a la maquetación y provocan un repintado (por ejemplo: color, fondo, visibilidad) | 1 |
