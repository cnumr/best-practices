## Limitar el número de solicitudes HTTP
Traducido por: Murielle Timsit y Franklin Lecointre

###Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   180   | 9  | 9  | |

### Categorías

| Ciclo de vida | Partes | Responsable |
|:---------:|:----:|:----:|
| 3. Realización (fabricación/ desarrollo) | Red | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Recursos ahorrados |
|:----------------------------------------------------------:|
| Red/ Consultas   |

### Descripción

El tiempo de carga de una página del lado del navegador se correlaciona directamente con el número de archivos que el navegador debe descargar, y al peso unitario de cada fichero.

Para cada archivo, el navegador envía un GET HTTP al servidor.

Espera su respuesta, luego descarga el recurso tan pronto como esté disponible. Dependiendo del tipo de servidor web que utilice, cuanto mayor sea el número de consultas por página, menor será el número de páginas por servidor.
Reducir el número de consultas por página es crucial para reducir el número de servidores HTTP (o incluso servidores de aplicaciones y bases de datos) necesarios para el funcionamiento del sitio,
y por lo tanto los impactos ambientales asociados.

### Ejemplo

Para mostrar pequeñas banderas para la elección de un idioma, el uso de un spritesheet CSS permite agruparlas en una sola imagen de mayor tamaño.
Esto reduce el número de solicitudes HTTP.

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de peticiones HTTP  | 40  |


