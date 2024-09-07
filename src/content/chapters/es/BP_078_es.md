---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Comprimir archivos CSS, JavaScript, HTML y SVG
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3 | V4  |
|:-------:|:----:|:----:|:----:|
|  86   | 80 | 78  | |

### Categorías

| Ciclo de vida | Partes | Responsable |
|:---------:|:----:|:----:|
| 3. Realización (fabricación/ desarrollo) | Red | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

| Recursos ahorrados |
|:----------------------------------------------------------:|
| Red  |

### Descripción

Comprime hojas de estilo CSS, bibliotecas de JavaScript y archivos HTML para limitar el uso de ancho de banda y mejorar los tiempos de carga.
El algoritmo GZIP es un estándar de compresión del lado del servidor, que permite comprimir los recursos sobre la marcha antes de enviarlos a los clientes.
Más recientemente, BROTLI ha sido popularizado con un mayor rendimiento, es compatible con todos los navegadores más comunes.

### Ejemplo

Para utilizar `BROTLI` en Apache, basta con añadir la siguiente configuración:

```
# compress html, text, xml, css, javascript
AddOutputFilterByType BROTLI_COMPRESS text/html text/plain text/xml text/css text/javascript application/javascript

# Or, compress certain ?le types in a specific directory:
<Directory "/your-directory">
	AddOutputFilterByType BROTLI_COMPRESS text/html
</Directory>
```

El servidor web NGINX administra por defecto la compresión GZIP, pero solo para archivos HTML.
Para activarlo en las imágenes y otros recursos consulte esta página: https://www.digitalocean.com/community/tutorials/how-improve-website-performance-using-gzip-and-nginx-on-ubuntu-20-04

Para instalar y configurar Brotli en NGINX, consulte https://github.com/google/ngx_brotli

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de archivos CSS, JavaScript,  HTML y SVG sin comprimir  |  0 |


