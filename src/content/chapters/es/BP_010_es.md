---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Almacenar datos estáticos localmente
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
| 205 | 10 | 10 |   |

### Categorías

| Ciclo de vida | Partes | Responsable  |
|:---------:|:----:|:----:|
| 3. Realización (fabricación/ desarrollo) | Datacenter | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Recursos ahorrados |
|:----------------------------------------------------------:|
| Red/ Consultas   |

### Descripción

Con el soporte ahora generalizado en todos los navegadores de bases de datos clave-valor (IndexDB, Web Storage) y almacenamiento en caché en la Caché de almacenamiento de la API, es posible almacenar datos estructurados estáticos localmente.

El valor del almacenamiento local es doble. Por un lado, se evitan los idas y vueltas inútiles con el servidor, lo que ahorra recursos y tiempo de respuesta.
Por otra parte, como los datos son locales, es más fácil y más rápido manipularlos dentro de la interfaz.

El beneficio potencial es la reducción de la carga del servidor, por lo tanto del número de equipos necesarios (su huella ambiental y económica),
desde servidores HTTP hasta servidores de base de datos.

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de datos estáticos no almacenados localmente  | 25%  |


