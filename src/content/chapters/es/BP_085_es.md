---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Establecer un plan de fin de vida del sitio
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3 | V4  |
|:-------:|:----:|:----:|:----:|
|   1030   |   | 85  |  	|

### Categorías

| Ciclo de vida | Partes | Responsable |
|:---------:|:----:|:----:|
| 7. Fin de la vida útil | Centro de Datos | PO/ADO or ADP |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 2 | 3 |

|Recursos ahorrados |
|:----------------------------------------------------------:|
| Procesador/ Memoria/ Red/ Consultas/ Almacenamiento   |

### Descripción

La mayoría de los entornos (POC - proof of concept, tests, receta, ...) acaban cayendo en desuso y ya no son necesarios. Aproximadamente el 25 % de los servidores físicos y el 20 % de los servidores virtuales (VM) son zombis. Es decir, los servidores consumen electricidad esperando que los usemos. Son impactos ambientales y económicos evitables.

Realizar un análisis de fin de vida evita esta situación.

Un plan simple de fin de vida consiste en nombrar a la persona que decide la terminación del servicio. Su papel será entonces de monitorizar su actividad y luego de detenerla. Otro enfoque establece el escenario de fin de vida (fecha de caducidad...) y encarga el presupuesto adecuado desde la concepción. En lugar de interrumpir un servicio, una tercera pista consiste en prolongar su vida útil.

La interrupción de un servicio implica
- Liberar recursos: desactivar el servicio, sus dependencias, las herramientas utilizadas por el equipo de desarrollo (por ejemplo, Chanel Teams).
- Eliminar, archivar... los datos (incluyendo GED "Gestión Electrónica de Documentos" y sistema de seguimiento de errores).
- Reasignar las instalaciones, equipos y otros recursos del proyecto (incluido el código fuente).
- Valorizar las competencias adquiridas durante la vida del proyecto.

### Ejemplo

Durante una migración de datos o aplicaciones a un entorno en la nube, existen varios escenarios de fin de vida:
* copiar/pegar el existente al "cloud" con descomprimir el existente.
* reutilizacion (refactoring) con una modificación de la arquitectura y del código y por lo tanto un cuestionamiento de lo existente: por ejemplo, un cuestionamiento sobre las funcionalidades no utilizadas y que se retoma por si acaso...

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de sitio sin plan de fin de vida | 0  |


