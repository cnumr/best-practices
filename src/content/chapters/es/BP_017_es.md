---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Elegir un formato de datos adecuado
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  113   | 54  | 17 |   |

### Categorías

| Ciclo de vida | Partes | Responsable  |
|:---------:|:----:|:----:|
| 3. Realización (fabricación/ desarrollo) | Centro de datos| Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad  | ejecución  | impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Recursos Economizados   |
|:----------------------------------------------------------:|
CPU/ RAM/ Almacenamiento/ Red  |

### Descripción

El tipo de datos utilizados para manipular y almacenar datos tiene un impacto significativo en el consumo de memoria y los ciclos de procesador necesarios durante la manipulación en base de datos, en el servidor de aplicaciones e incluso en el navegador (manipulación mediante JavaScript), así como en el espacio de almacenamiento necesario. Elegir un tipo de datos incorrecto provoca:
 - un derroche de memoria (por ejemplo, si se almacenan datos muy pequeños en una columna diseñada para almacenar grandes cantidades de datos);
 - problemas de rendimiento (será más rápido realizar una búsqueda en un número que en una cadena de caracteres).
   
Idealmente, la elección del tipo de datos y su dimensionamiento deben basarse en el análisis de una muestra representativa de datos.

### Ejemplos

En el caso de un centro de formación, el tamaño del campo para almacenar el número de alumnos debe basarse en un estudio estadístico.
Esto permite determinar si es posible utilizar un TINYINT (1 byte, hasta 127 bytes) en lugar de un SMALLINT (2 bytes, hasta 32 767).
En cualquier caso, la elección por defecto de un INT (4 bytes, hasta 2 147 483 647) o incluso un BIGINT (8 bytes) es una aberración (que lamentablemente nos encontramos todos los días en nuestras auditorías...).
Ganancia potencial: hasta 8 veces menos almacenamiento. El consumo en ciclo de procesador se reduce en las mismas proporciones.

En el caso del almacenamiento de un identificador UUID, un almacenamiento de texto no será adecuado. Un UUID se almacena en 16 bytes, mientras que en su forma textual necesitaría un mínimo de 36 bytes. Los índices de base de datos tampoco serían tan eficaces como con el tipo UUID/GUID/uniqueidentifier.

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de campos de la base cuyo formato es inadecuado es  | 15%  |


