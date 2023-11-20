## Elegir los formatos de datos adecuados

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
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

 |Recursos ahorrados |
 |:----------------------------------------------------------:|
 | Procesador/RAM/Almacenamiento/Red |

 ### Descripción

Los formatos de datos utilizados para manipular y almacenar datos tienen un impacto significativo en el consumo de memoria 
y los ciclos de procesador necesarios para las manipulaciones de bases de datos a nivel de servidores de aplicaciones e 
incluso en los navegadores (manipulación a través de JavaScript), así como en el espacio de almacenamiento necesario. 
La elección de formatos de datos inadecuados puede dar lugar a:

 - Desperdicio de memoria (si se almacenan datos muy pequeños en columnas diseñadas para almacenar grandes cantidades de datos, por ejemplo).
 - Problemas de rendimiento (es más rápido buscar un número que una cadena de caracteres).

Lo ideal es que la elección del formato de datos y el dimensionamiento adecuado se basen en una muestra representativa del análisis de datos.

 ### Ejemplos

En el caso de un centro de formación, el tamaño del campo utilizado para almacenar el número de los alumnos debe basarse 
en estudios estadísticos. Será más fácil determinar si es posible utilizar un TINYINT (1 byte, hasta 127)
en lugar de un SMALLINT (2 bytes, hasta 32.767). En cualquier caso, la elección por defecto de un INT (4 bytes, hasta 2.147.483.647) 
o incluso un BIGINT (8 bytes) no es apropiada (lo que eventualmente se encuentra comúnmente durante las auditorías). 
Puede utilizar potencialmente hasta 8 veces menos almacenamiento. El consumo de ciclos del procesador se reducirá proporcionalmente.

 En el caso del almacenamiento de identificadores UUID, el almacenamiento textual no será apropiado. 
 Los UUID requieren 16 bytes, mientras que los equivalentes textuales requerirían un mínimo de 36 bytes. Los índices de bases de datos tampoco serían tan eficientes como el tipo de formato UUID/GUID/identificador único.

 ### Regla de validación

 | El número de... | es inferior o igual |
 |----------------------------------------------|: -------------------------:|
 | campos de base de datos con un formato inadecuado | 15% |
