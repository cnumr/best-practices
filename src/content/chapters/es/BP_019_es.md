---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Reemplazar los botones oficiales para compartir redes sociales
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
| 910   | | 19  | |

### Categorías

| Ciclo de vida | Partes | Responsable  |
|:---------:|:----:|:----:|
| 3. Realización (fabricación/ desarrollo) | Usuario/Terminal | Diseñador UX/UI |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 4 | 4 |

|Recursos ahorrados |
|:----------------------------------------------------------:|
| portadas  Red/ Consultas  |

### Descripción

Las principales redes sociales como Facebook, Twitter, Pinterest, etc. instalan plugins para mostrar un botón Compartir y un contador de Me gusta. Estos plugins JavaScript consumen muchos recursos: para funcionar, requieren una gran cantidad de consultas y la descarga de archivos pesados.
Es mejor utilizar enlaces directos, en HTML, para compartir páginas.
Estos enlaces pueden generarse manualmente (ver más abajo) o mediante una herramienta como https:/www.sharelinkgenerator.com/.

### Ejemplo

Todas las redes sociales tienen una URL que permite a sus miembros compartir una página web:
 - Facebook Share: https://www.facebook.com/sharer/sharer.php?u=XXXXX
 - Facebook Like: https://www.facebook.com/plugins/like.php?href=XXXXX
 - Twitter: https://twitter.com/intent/tweet?url=XXXXX
Por lo tanto, se puede añadir fácilmente un botón que abre una ventana emergente de compartir como lo hacen los botones oficiales, por ejemplo con el siguiente código:

```html
<button type = "button" onclick = "window. open('https://www.facebook.com/ Sharer/Sharer.php?u=XXXXX', ', 'menubar = no, toolbar = no, resizable = yes, scrollbars = yes, height = 500, width = 700')">
	Comparto esta página en Facebook
</button>
```
Para ir más lejos:
https://www.nuweb.es/736


### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de librerías externas  | 0  |


