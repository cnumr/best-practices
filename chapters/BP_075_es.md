## Optimizar consultas de bases de datos

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 59 | 74 | 75 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:----------:|:----------------------------:|
 | 3. Implementación | Centro de datos | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------: |:-----------------:|
 | 3 | 3 | 3 |

 | Recursos ahorrados |
 |:---------------------------------------------------------:|
 | Procesador/RAM/Red |

 ### Descripción

Las bases de datos suelen ser componentes esenciales de las aplicaciones. Como se utilizan muchas consultas para recuperar y
almacenar datos, acaban teniendo un impacto significativo en el uso de recursos de la solución cuando se ejecutan con frecuencia.

Teniendo esto en cuenta, es importante prestar atención a estas consultas y asegurarse, al menos para las más costosas, de que están bien optimizadas.


 Los consejos de optimización más comunes son:

 - Utilizar menos datos y limitarlos al mínimo. Por ejemplo, la cláusula LIMIT limita el número de filas de resultados en las bases de datos relacionales. Cuando sea posible, utilizar la cláusula LIMIT reduce la cantidad de datos transferidos. El aumento del rendimiento será aún más significativo si los registros contienen un gran número de campos voluminosos.
 - Utilice sólo los campos necesarios en las tablas o documentos para evitar transferir innecesariamente datos que no se utilizarán y para evitar utilizar recursos del servidor de bases de datos y del servidor de aplicaciones para manipularlos.
 - Agregue índices en los campos utilizados como claves en su modelo. Agregarlos puede cambiar completamente el rendimiento de las consultas. Cuidado: agregar índices alarga la escritura ya que debe actualizarse para cada documento agregado, modificado o eliminado. Esto debe hacerse si hay más lecturas que escrituras o si las lecturas son particularmente costosas.
 - Utilizar herramientas del sistema de gestión de bases de datos para analizar las consultas con el fin de identificar las áreas de mejora, como EXPLAIN para RDBMS.
 - Almacenar en caché los resultados de las consultas más costosas, así como los datos que cambian poco o nunca (datos de referencia).
 - Opcionalmente, modificar los modelos de datos para poder acceder más fácilmente a la información sin joins (desnormalización).

 ### Ejemplo

Aquí hay un ejemplo, con la cláusula `LIMIT`:

 Si solo desea mostrar los primeros 25 registros de una tabla que contiene los apellidos y nombres de las personas debe reemplazar al seleccionar:
 ```sql
 SELECCIONE nombre apellido DE personas
 ```
 por :
 ```sql
 SELECCIONE nombre apellido DE personas LÍMITE 0 25
 ```

 Ejemplo de creación de índice:

 ```sql
 CREAR ÍNDICE idx_people_lastname_firstname EN personas (apellido nombre)
 ```

 Siguiendo este comando el sistema de gestión de bases de datos podrá encontrar las filas de "personas" más rápidamente a partir de la información (nombre nombre).


 ### Regla de validación

 | El número de... | es igual o menor que |
 |-------------------------------------------------------------|:------------------------:|
 | identificó consultas de bajo rendimiento que no están optimizadas | 0 |
