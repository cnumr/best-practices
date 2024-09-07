---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Proporcionar una CSS para imprimir
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   16   | 30  | 27  | |

### Categorías

| Ciclo de vida | Partes | Responsable  |
|:---------:|:----:|:----:|
| 3. Realización (fabricación/ desarrollo) | Usuario/Terminal | UX/UI Diseñador |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 4 | 3 |

|Recursos ahorrados |
|:----------------------------------------------------------:|
| Red  |

### Descripción

Además del servicio al usuario, esta hoja de estilos reduce el número de páginas impresas, y, por lo tanto, indirectamente la huella ecológica del sitio web. Lo más despojado posible, debe proponer una fuente de caracteres ahorrativos en tinta (Century Gothic, por ejemplo). Piense también en ocultar el header, el footer, el menú, el sidebar, eliminar todas las imágenes excepto las del contenido, etc.

### Ejemplo

Esta CSS print «limpia» la página mostrada en la pantalla para ofrecer una impresión despejada:
```css
body {
background-color:#?f; font-family:Serif; font-size:15pt;
}
#page { margin:0;
border:none;
}
#banner, #menuright, #footer { display:none;
}
h1#top { margin:0;
padding:0
text-indent:0; line-height:25pt; font-size:25pt;
} (...)
```

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de CSS para imprimir faltante | 1 |


