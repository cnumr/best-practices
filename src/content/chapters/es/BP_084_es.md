---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Favorecer HSTS Preload list a las redirecciones 301
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  |
|:-------:|:----:|:----:|:----:|
|  1060	|   | 84  |  |

### Categorías

| Ciclo de vida | Partes | Responsable |
|:---------:|:----:|:----:|
| 4. Producción | Red | Administrador de sistemas |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

| Recursos ahorrados |
|:----------------------------------------------------------:|
| Red/ Consultas  |

### Descripción

El HSTS permite indicar a cualquier navegador, a través de un header de respuesta HTTP mantenido en caché, que el dominio debe ser contactado exclusivamente por HTTPS.

Esto permite que las consultas posteriores, realizadas en el mismo dominio, sean contactadas exclusivamente con el protocolo HTTPS, lo que evita una multitud de redirecciones 301.
Sin embargo, la primera llamada requiere una respuesta (potencialmente no segura) HTTP con un header STS (Strict-Transport-Security).
Para resolver este problema, y obligar a los navegadores a ponerse en contacto con todo el dominio en HTTPS, es posible, además de activar el HSTS, registrarse en una lista estática actualizada en todos los navegadores recientes: https:/hstspreload.org.

Es importante señalar que el registro de su dominio en htstpreload.org es rápido y afecta a todo el dominio (incluidos los subdominios). Antes de realizar este registro, que es relativamente lento de eliminar, asegúrese de que ninguno de sus subdominios sea afectado por la configuración de HTTPS

### Ejemplo

Ejemplo de configuración
```apacheconf
Strict-Transport-Security: máx-age = 63072000; includeSubDomains; preload
```

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de no activación de HSTS  | 0  |


