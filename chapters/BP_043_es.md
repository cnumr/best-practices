## Minimizar repintados (apariencia) y redistribuciones (diseño)

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 42 | 45 | 43 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:-----------:|:------------- ---------------:|
 | 3. Implementación | Usuario/Dispositivo | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------: |:-----------------:|
 | 4 | 4 | 4 |

 | Recursos guardados |
 |:----------------------------------------------- ----------:|
 | Procesador |

 ### Descripción

 Repintar se refiere al cambio de apariencia de los elementos DOM mientras que reflujo se refiere al cambio/nuevo cálculo de su posición.
Ambas operaciones consumen muchos recursos especialmente en términos de ciclos de CPU por lo que es
 necesario para evitar desencadenarlos cuando sea posible.

 ### Ejemplo

 No modifique las propiedades de estilo de los elementos (color de fondo estilo de borde color de texto tamaño etc.) para evitar repintados.

 Limite los cambios de propiedades como posición dimensión tipo de posicionamiento contenido (etc.) para evitar reflujos.
 Esto es particularmente relevante para algunos elementos HTML como tablas cuyos reflujos pueden requerir hasta tres veces más
 tiempo que otros elementos.

 Para más información :
 https://developers.google.com/speed/articles/reflow


 ### Regla de validación

 | El número de... | es igual o menor que |
 |------------------------------------------------ -------------------------------------------------- |:------------------------:|
 | modificaciones que no afectan el diseño y provocan un repintado (por ejemplo color fondo visibilidad) | 1 |
