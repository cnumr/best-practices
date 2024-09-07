---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Añadir encabezados Expires o Cache-Control
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   78   |  105 | 101  |  	|

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
| Procesador/ Red/ Memoria/ Consultas  |

### Descripción

Los encabezados Expires y Cache-Control definen el tiempo durante el cual un navegador debe mantener un recurso en su caché. Por lo tanto, debe preverse y configurarse correctamente para hojas de estilo CSS, scripts de JavaScript e imágenes.

Idealmente, la vida útil de estos elementos debe ser lo más larga posible, para que el navegador no vuelva a solicitarlos al servidor. Esto ahorra solicitudes HTTP, ancho de banda y ciclos de CPU en el servidor.

### Ejemplo

Aquí hay un ejemplo de configuración de los encabezados Expires y Cache-Control para el servidor web Apache:
```apacheconf
# BEGIN Cache-Control Headers
<IfModule mod_headers.c>
	<FilesMatch "\\.(ico|jpe?g|png|gif|swf|css|gz)$">
    	Header set Cache-Control"max-age=2592000, public"
	</FilesMatch>
	<FilesMatch "\\.(html|htm)$">
    	Header set Cache-Control"max-age=7200, public"
	</FilesMatch>
</IfModule>
# END Cache-Control Headers
```

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de cabeceras que faltan Expires o Cache-Control  | 0 |


