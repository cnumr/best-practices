## Elija formatos de datos apropiados

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:----:|:----:|:----:|
 | 113 | 54 | 17 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:---------:|:----:|:----:|
 | 3. Implementación | Centro de datos | Arquitecto/Desarrollador de Software |

 ### Indicadores

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:-------------------:|:------------------------- :|:---------------------:|
 | 4 | 3 | 4 |

 |Recursos guardados |
 |:----------------------------------------------- -----------:|
 | Procesador/RAM/Almacenamiento/Red |

 ### Descripción

 Los formatos de datos utilizados para manipular y almacenar datos tienen un impacto significativo en el consumo de memoria y los ciclos de procesador necesarios para las manipulaciones de bases de datos a nivel de servidores de aplicaciones e incluso en los navegadores (manipulación a través de JavaScript) así como en el espacio de almacenamiento requerido. La elección de formatos de datos inadecuados puede provocar:
 - desperdicio de memoria (si almacena datos muy pequeños en columnas diseñadas para almacenar grandes cantidades de datos por ejemplo);
 - problemas de rendimiento (es más rápido buscar un número que una cadena de caracteres).

Lo ideal es que la elección del formato de datos y el tamaño adecuado se basen en una muestra representativa de análisis de datos.

 ### Ejemplos

 En el caso de una institución de formación el tamaño del campo utilizado para almacenar el número de estudiantes debe basarse en estudios estadísticos.
 Será más fácil determinar si es posible utilizar un TINYINT (1 byte hasta 127) en lugar de un SMALLINT (2 bytes hasta 32767).
 En cualquier caso la elección predeterminada de un INT (4 bytes hasta 2147483647) o incluso un BIGINT (8 bytes) no es apropiada (lo que eventualmente se encuentra comúnmente durante las auditorías).
 Puede utilizar potencialmente hasta 8 veces menos almacenamiento. El consumo de ciclos de procesador se reducirá en consecuencia.

 En el caso del almacenamiento de identificadores UUID el almacenamiento textual no será apropiado. Los UUID requieren 16 bytes mientras que los equivalentes textuales requerirían un mínimo de 36 bytes. Los índices de bases de datos tampoco serían tan eficientes como el tipo de formato UUID/GUID/identificador único.

 ### Regla de validación

 | El número de... | es inferior o igual |
 |----------------------------------------------|: -------------------------:|
 | campos de base de datos con un formato inadecuado | 15% |
