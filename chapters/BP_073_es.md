## Evite abrir conexiones de bases de datos cuando no sea necesario

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 56 | 72 | 73 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------:|:----------:|:----------------------------:|
 | 2. Diseño | Centro de datos | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------: |:-----------------:|
 | 3 | 3 | 3 |

 | Recursos ahorrados |
 |:---------------------------------------------------------:|
 | Procesador/RAM/Red |

 ### Descripción
La apertura de una conexión es un proceso que consume muchos recursos, tanto para el cliente como para el servidor, independientemente del sistema de base de datos:
 * Asignación de memoria y E/S de disco para los búferes.
 * Viajes de ida y vuelta por la red para el protocolo de conexión.
 * Costo de CPU inducido.

Ejemplo: para Oracle, son necesarios varios viajes de ida y vuelta 
(validación de credenciales, información sobre controladores, negociación del tamaño óptimo de los paquetes, etc.). 
Abrir y cerrar la conexión requiere asignar y desasignar estos recursos, así como muchos intercambios de red, cada vez.


La mejor práctica habitual es crear un pool de conexiones. Optimiza la gestión de las conexiones, así como el rendimiento. 
Sin embargo, su configuración no es necesariamente una operación trivial (se requiere supervisión para encontrar la configuración adecuada).

Intente evitar en la medida de lo posible los accesos a la base de datos de la aplicación.

 ### Ejemplo

 HHikariCP es un pool de conexiones JDBC robusto y eficaz. Está integrado en SpringBoot.

Cuando no exista un pool de conexiones, reutilice una conexión y no abra/cierre una nueva conexión para cada petición.

 ### Regla de validación

 | El número de... | es igual o menor que |
 |---------------------------------------|:------------------------:|
 | conexiones de bases de datos innecesarias para consultar o almacenar los datos de servicio necesarios | 0 |
