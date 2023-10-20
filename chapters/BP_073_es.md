## Evite abrir conexiones de bases de datos cuando no sea necesario

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 56 | 72 | 73 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------:|:----------:|:-------------------- --------:|
 | 2. Diseño | Centro de datos | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------: |:-----------------:|
 | 3 | 3 | 3 |

 | Recursos guardados |
 |:----------------------------------------------- ----------:|
 | Procesador/RAM/Red |

 ### Descripción
 Abrir una conexión es un proceso que consume muchos recursos tanto para el cliente como para el servidor independientemente del sistema de base de datos:
 * Asignación de memoria y E/S de disco para buffers
 * Viajes de ida y vuelta de red para el protocolo de conexión
 * Costo de CPU inducido.

Ejemplo: para Oracle son necesarios varios viajes de ida y vuelta (validación de credenciales información del conductor negociación del tamaño óptimo de paquete etc.).
Abrir y cerrar una conexión requiere asignar y desasignar estos recursos así como muchos intercambios de red cada vez.

La mejor práctica habitual es configurar un grupo de conexiones.
Optimiza la gestión de la conexión y el rendimiento. Sin embargo su configuración no es necesariamente una operación trivial (se requiere supervisión para encontrar la configuración correcta).

 Intente evitar el acceso a la base de datos de la aplicación tanto como sea posible.

 ### Ejemplo

 HikariCP es un grupo de conexiones JDBC robusto y de alto rendimiento. Está integrado en SpringBoot.

 Cuando no hay un grupo de conexiones reutilice una conexión y no abra ni cierre una nueva conexión para cada solicitud.

 ### Regla de validación

 | El número de... | es igual o menor que |
 |------------------------------------------------ ---------------------------------|:--------------- ---------:|
 | conexiones de bases de datos innecesarias para consultar o almacenar los datos de servicio necesarios | 0 |
