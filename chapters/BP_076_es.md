## Evite transferir grandes cantidades de datos para tareas de procesamiento

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 58 | 75 | 76 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:----------:|:-------:|:------------------------ ----:|
 | 2. Diseño | Red | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-------- ---------:|
 | 3 | 3 | 3 |

 | Recursos guardados |
 |:----------------------------------------------- ----------:|
 | Procesador/RAM/Red |

 ### Descripción

Los sistemas de gestión de bases de datos están diseñados y optimizados para ejecutar de manera eficiente grandes cantidades de procesamiento de datos.
 En el caso de tareas con una lógica compleja recuperar datos "sin procesar" y ejecutar todas las operaciones informáticas como
 no se recomienda la transformación o agregación en el lado del servidor backend o incluso frontend.

 Estos procesos deben realizarse lo más cerca posible de los datos para:

 - limitar el uso del ancho de banda debido a la transferencia de datos no procesados
 - aprovechar las optimizaciones de la base de datos con respecto a la manipulación de datos
 - reducir los ciclos de CPU en el servidor backend o incluso en el frontend

 ### Ejemplo

 En el caso de consultas complejas con grandes cantidades de datos cuando se utiliza un sistema de gestión de bases de datos relacionales (RDBMS)
 se deben utilizar procedimientos almacenados porque:

 - los procedimientos almacenados guardan la interpretación de las consultas en el lado del servidor ya que están precompilados;
 - Los procedimientos almacenados consumen menos ancho de banda ya que se transfiere menos información entre servidores y clientes.

Todos los RDBMS recientes (SQL Server MySQL PostgreSQL etc.) admiten procedimientos almacenados.

 ### Regla de validación

 | El número de... | es igual o menor que |
 |------------------------------------------------ -----------------|:---------------------- --:|
 | procesos con una gran cantidad de datos se ejecutaron fuera del servidor de la base de datos | 1 |
