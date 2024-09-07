---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Evitar la transferencia de una gran cantidad de datos para realizar un tratamiento
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
| 58 | 75 | 76 |  |

### Categorías

| Ciclo de vida | Partes | Responsable |
|:---------:|:----:|:----:|
| 2. Diseño | Red | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 3 | 3 |

|Recursos ahorrados |
|:----------------------------------------------------------:|
| Procesador/ Memoria/ Red   |

### Descripción

Los sistemas de gestión de bases de datos están diseñados y optimizados para responder de manera efectiva al procesamiento de grandes cantidades de datos.
En el caso de tratamientos con una lógica compleja, se desaconseja recuperar los datos "brutos" y realizar todas las operaciones de cálculo, transformación o agregación del lado del servidor backend o incluso frontend.

Estos tratamientos deben realizarse más cerca de los datos para:

- limitar el ancho de banda debido a la transferencia de datos no procesados
- aprovechar las optimizaciones de la base de datos sobre la manipulación de datos
- aligerar el ciclo de CPU del lado del servidor backend o incluso frontend.

### Ejemplo

En el caso de consultas complejas con un gran número de datos y el uso de un sistema de gestión de bases de datos relacionales (DBMS), se recomienda utilizar procedimientos almacenados (VIEWS) porque:

 - un procedimiento almacenado ahorra al servidor la interpretación de la recuesta ya que está precompilada;
 - un procedimiento almacenado requiere menos ancho de banda, ya que se intercambia menos información entre el servidor y el cliente.

Todos los RDBMS (relational database management system) recientes (SQL Server, MySQL, PostgreSQL, etc.) admiten los procedimientos almacenados.

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de tratamientos con una gran cantidad de datos ejecutados fuera del servidor de base de datos |  1 |


