---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Preferir CSS a imágenes
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
| 11   | 26 | 23  |   |

### Categorías

| Ciclo de vida | Partes | Responsable  |
|:---------:|:----:|:----:|
| 3. Realización (fabricación/ desarrollo) | Red | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Recursos Economizados   |
|:----------------------------------------------------------:|
| Red/ Consultas  |

### Descripción

Utilizar las propiedades CSS en lugar de imágenes. De hecho, el peso de una hoja de estilos es mucho menor, especialmente si está comprimida. Además, la llamada a una hoja de estilos genera una única petición HTTP, en vez de muchas si se utilizan muchas imágenes (una petición HTTP para cada imagen).

### Ejemplo

Hay que gestionar con CSS las esquinas redondeadas de las casillas y no con imágenes.

Preferir la escritura:
```css
#frame {
	border-radius: 10px;
}
```

```html
<div id="marco">
	<p>
	Lorem ipsum Dolor sit Amet, consectetur adipiscing Elit.
	</p>
</div>
```


### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de imágenes que podrían haber sido sustituidas por CSS | 0 |


