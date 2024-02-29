## Escribe selectores CSS eficientes

 ### Identificadores

 | GreenIT  | V2 | V3 | V4 |
 |:-------:|:----:|:----:|:----:|
 | 13 | 27 | 24 | |

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
 | Procesador |

 ### Descripción

 Utilice selectores basados en ID o clases, ya que se filtrarán más rápidamente, ahorrando así ciclos de CPU en el dispositivo asociado.

 ### Ejemplo

 No escriba :
 ```css
 elemento de árbolcarpeta de correo="true" > fila de árbol > celda de árbol {…}
 ```

Escriba en su lugar:

 ```css
 .treecell-carpeta de correo {…}
 ```

 No escriba :
 ```css
 cabeza de árbol > fila de árbol > celda de árbol {…}
 ```
Escriba en su lugar:
 ```css
 .treecell-encabezado {…}
 ```

 ### Regla de validación

 | El número de...                                       | es igual o menor que |
 |-------------------------------------------------------|:-------------------------:|
 | Selectores CSS que no utilizan ID, clases o atributos | 0 |
