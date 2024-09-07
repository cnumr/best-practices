---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## No modificar el DOM al recorrerlo
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3 | V4  |
|:-------:|:----:|:----:|:----:|
|  43   | 43  | 41   |  |

### Categorías

| Ciclo de vida | Partes | Responsable |
|:---------:|:----:|:----:|
| 3. Realización (fabricación/ desarrollo) | Usuario/Terminal | Arquitecto Software/ Desarrollador |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 4 | 4 |

|Recursos ahorrados |
|:----------------------------------------------------------:|
|  Procesador  |

### Descripción

Modificar el DOM (Document Object Model) al recorrerlo puede generar situaciones en las que el bucle se vuelve muy codicioso en recursos, en particular en ciclos de CPU. En efecto, si se añaden elementos recorriéndolo, es posible generar un bucle infinito que consumirá una gran cantidad de recursos. Por lo tanto, se desaconseja encarecidamente este tipo de modificación.

### Ejemplo

Evitar:
```html
<script>
	// Notación de jQuery
	$('a. extlink'). each(function(el) {
    	$(el). attr('rel','external nofollow');
	})
</script>
```
### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de inserciones en el DOM realizadas cuando esta misma parte del DOM es recorrida por código JavaScript  | 0  |


