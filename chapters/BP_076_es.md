## Evite transferir grandes cantidades de datos para tareas de procesamiento

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 58 | 75 | 76 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:----------:|:-------:|:----------------------------:|
 | 2. Diseño | Red | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-----------------:|
 | 3 | 3 | 3 |

 | Recursos ahorrados |
 |:---------------------------------------------------------:|
 | Procesador/RAM/Red |

 ### Descripción

Los sistemas de gestión de bases de datos están diseñados y optimizados para ejecutar eficientemente grandes cantidades de procesamiento de datos. 
En el caso de tareas con una lógica compleja, no se recomienda recuperar los datos "en bruto" y ejecutar todas las operaciones informáticas, 
como la transformación o la agregación, en el servidor backend o incluso frontend.

 Estos procesos deben realizarse lo más cerca posible de los datos para:

 - Limitar el uso del ancho de banda debido a la transferencia de datos no procesados.
 - Aprovechar las optimizaciones de la base de datos para la manipulación de datos.
 - Reducir los ciclos de CPU en el servidor backend o incluso en el frontend.

 ### Ejemplo

En el caso de consultas complejas con grandes cantidades de datos, cuando se utiliza un sistema de gestión de bases de datos relacionales (RDBMS), 
se deben utilizar procedimientos almacenados porque:

 - Los procedimientos almacenados ahorran la interpretación de las consultas en el lado del servidor, ya que están precompilados.
 - Los procedimientos almacenados consumen menos ancho de banda, ya que se transfiere menos información entre servidores y clientes.

Todos los RDBMS recientes (SQL Server MySQL PostgreSQL etc.) admiten procedimientos almacenados.

 ### Regla de validación

 | El número de...                                                                    | es igual o menor que |
 |------------------------------------------------------------------------------------|:------------------------:|
 | Procesos con gran cantidad de datos ejecutados fuera del servidor de base de datos | 1 |
