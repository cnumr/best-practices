---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Favorecer páginas estáticas
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  3   | 51  | 13  | |

### Categorías

| Ciclo de vida | Partes | Responsable  |
|:---------:|:----:|:----:|
| 2. Diseño | Usuario/Terminal | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 5 |

|Recursos ahorrados |
|:----------------------------------------------------------:|
| Procesador/ RAM  |

### Descripción

Si una página necesita ser modificada solo dos veces al año, preferir páginas estáticas, construidas fuera del CMS.
Esto ahorrará ciclos de CPU, ancho de banda, y reducirá el consumo de energía.

El uso de un sistema de gestión de contenidos dinámico requiere cargar las diferentes capas de software para servir el contenido solicitado por el internauta: el servidor HTTP, el servidor de aplicaciones, el sistema de almacenamiento del contenido (base de datos), quizás los sistemas de caché asociados, etc. En cambio, el servidor HTTP o el servidor de caché leen directamente un archivo estático y lo devuelven al internauta, sin solicitar el servidor de aplicaciones o la base de datos.

### Ejemplo

Dependiendo del servicio digital que se va a diseñar, es posible:
- para una página de destino o un simple sitio escaparate, crear un sitio estático en HTML, CSS y JS.
- para un blog con poca actividad o de pequeño tamaño, crear un sitio estático generado a través de un JAMstack (Jekyll, Hugo, Gatsby, Eleventy, etc.) administrado, si es necesario, a través de un CMS headless o un CMS headless flat-file (Strapi, Contenful, Flextype, etc.).
- para un sitio web o aplicación web más compleja hacer las páginas con bajas tasas de cambios (FAQ, About, Aviso legal, etc.) estáticas utilizando frameworks (Next, Nuxt, Svelte, etc.).

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de páginas dinámicas es   | 25% |


