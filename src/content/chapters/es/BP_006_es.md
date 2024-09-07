---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Privilegiar un enfoque "mobile first", en su defecto una carga adaptativa
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  6  | 7  | 6  | |

### Categorías

| Ciclo de vida | Partes | Responsable |
|:---------:|:----:|:----:|
| 2. Diseño | Usuario/Terminal | PO/AMOA |

### Indicaciones

| Grado de prioridad | ejecución | impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 4 | 5 |

|Recursos Economizados   |
|:----------------------------------------------------------:|
|Procesador/ Red  |

### Descripción

Cuando el contexto lo permita, privilegiar el enfoque «mobile first» que consiste en diseñar un sitio/servicio en línea para las terminales móviles, y ampliar su cobertura funcional para pantallas más grandes solo si se justifica la contribución funcional/ergonómica.
En este caso, optar por la carga adaptativa.
Este enfoque consiste en seleccionar los recursos, incluyendo JS y CSS, más adecuados para el contexto de uso (tamaño de pantalla/ ventana, densidad de píxeles, calidad de red, cantidad de memoria RAM, etc.), si es posible en el lado del servidor.
Esto garantiza que no se consume innecesariamente ancho de banda, ni de sobrecargar el procesador y la memoria del terminal para tratamientos innecesarios.

### Ejemplo

En el lado del servidor, se podrán utilizar los _client hints_, o en su defecto el identificador del navegador asociado a una matriz de capacidades de los navegadores (también llamado _user agent sniffing_, con sus limitaciones).

En el lado del cliente, los _media queries_  (en particular, en los atributos `media`<link>` para la selección de hojas de estilos CSS), los atributos `srcset` y `sizes`; de los `<img>`, los subelementos `<source>` de las `<picture>`, `<video>` y `<audio>` podrán ser útiles, y la misma información disponible en los _client hints_ también podrán ser recuperados por APIs JavaScript para eventualmente cargar dinámicamente código y/o contenido complementario .

En cualquier caso, priorice un modo por defecto minimalista que permite el acceso a su sitio aunque todas sus características no sean soportadas por todos los navegadores (¡sin dañar demasiado la experiencia del usuario, por supuesto!).

### Fuentes

* https://developers.google.com/web/fundamentals/performance/optimizCon-efficienciy/client-hints
* https://developers.google.com/web/updates/2015/09/automating-resource-selection-with-client-hints

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| De diseño no basado en un enfoque "mobile first" | 1 |


