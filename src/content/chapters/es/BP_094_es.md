---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Hospedar recursos (CSS/JS) en un dominio sin cookies
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   73   | 96  | 94  |  	|

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
| Red |

### Descripción

Las imágenes, hojas de estilo CSS y archivos JavaScript deben estar alojados en un dominio sin cookies. Esto evita que el navegador envíe una cookie para cada recurso... cuando es inútil. Esto se debe a que, aunque se transfiere a cada solicitud HTTP, la cookie
es inútil para el contenido estático, ya que sirve para mantener un estado entre el navegador del internauta y el servidor de aplicaciones remoto gracias a los identificadores contenidos en el archivo de texto. Por lo tanto, es mejor almacenar este tipo de contenido en un nombre de dominio específico, por ejemplo static.mydomain.com.

### Ejemplo

Los líderes web utilizan un dominio separado para servir a los recursos estáticos que no requieren cookies. Yahoo! utiliza por ejemplo el dominio yimg.com, YouTube el dominio ytimg.com y Amazon el dominio images-amazon.com.

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de dominios que sirven recursos estáticos CON cookie  | 1  |


