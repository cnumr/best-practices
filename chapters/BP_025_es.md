## Agrupar declaraciones CSS similares

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:----:|:----:|:----:|
 | 14 | 28 | 25 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:---------:|:----:|:----:|
 | 3. Implementación | Red | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:-------------------:|:------------------------- :|:---------------------:|
 | 3 | 3 | 2 |

 |Recursos ahorrados |
 |:----------------------------------------------------------:|
 | Red |

 ### Descripción

 Cuando varios elementos DOM (Document Object Model) comparten algunas propiedades CSS , 
 escriba las declaraciones juntas en la misma hoja para reducir el tamaño de CSS.


 ### Ejemplo


 No escriba :
 ```css
 h1 {
 color de fondo: gris; color: azul marino;
 }

 h2 {
 color de fondo: gris; color: azul marino;
 }

 h3 {
 color de fondo: gris; color: azul marino;
 }
 ```

en lugar de escriba :
 ```css
 h1 h2 h3 {
 color de fondo: gris; color: azul marino;
 }
 ```

 Puede configurar el módulo stylelint(https://stylelint.io/)
 en su proyecto (`devDependencies`) y use la siguiente regla `shorthand-property-no-redundant-values` si desea asegurarse de que se siga esta regla.

Puede encontrar la lista completa de estas propiedades abreviadas en este sitio web MDN(https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)

 ### Regla de validación

 | El número de... | es igual o menor que |
 |------------------------------------|:-------------------------:|
 | declaraciones CSS similares no agrupadas | 1 |
