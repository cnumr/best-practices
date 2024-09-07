---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Usar una caché HTTP
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  72	| 103  | 99  |  	|

### Categorías

| Ciclo de vida | Partes | Responsable |
|:---------:|:----:|:----:|
| 4. Producción | Red | Administrador de sistemas |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 5 |

| Recursos ahorrados |
|:----------------------------------------------------------:|
| Procesador/ RAM  |

### Descripción

Los proxies reversos (Varnish, Squid o NGINX) están optimizados para servir contenido (páginas HTML, imágenes, etc.) de forma rápida, consumiendo el menor número posible de ciclos de CPU. Al evitar el uso inútil del servidor de aplicaciones, permiten utilizar una infraestructura más pequeña.

### Ejemplo

El uso de un proxy reverso especializado como Varnish reduce drásticamente el tiempo necesario para servir a las páginas dinámicas, al tiempo que aumenta la capacidad del CMS (Drupal, aquí) a entregar un gran número al mismo tiempo. También se constata que un caché generalista como APC no es adecuado (fuente: Asymptotix).

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| portadas no identificadas HTTP | 0  |


