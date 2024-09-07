---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Usar un servidor asíncrono
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  77	| 94  | 97  |  	|

### Categorías

| Ciclo de vida | Partes | Responsable |
|:---------:|:----:|:----:|
| 4. Producción | Centro de datos | Administrador de sistemas |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 3 | 4 |

| Recursos ahorrados |
|:----------------------------------------------------------:|
| Procesador/ RAM  |

### Descripción

Los servidores (web, aplicaciones, etc.) como NGINX, node.js o Gwan están diseñados para utilizar el mínimo de recursos posible. Gracias a su funcionamiento en modo asíncrono, no están obligados a crear un proceso o "thread" para cada consulta. De esta manera evitan el desperdicio de recursos.

Mientras que la mayoría de los servidores web aumentan el consumo de memoria RAM a medida que aumenta la demanda, los servidores asíncronos permanecen muy estables.

#### Ejemplo

NGINX tiene la reputación de ser más eficiente que Apache. Así, puede servir 2,1 veces más consultas por segundo que este servidor.

Para ir más lejos:
 - https:///nbonvin.wordpress.com/2011/03/14/apache-vs-nginx-vs-varnish-vs-gwan
 
### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de servidores de aplicaciones sincronizados  | 1  |


