---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Hacer invisibles los elementos del DOM al modificarlos
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3 | V4  |
|:-------:|:----:|:----:|:----:|
|   44   | 44  | 42   | |

### Categorías

| Ciclo de vida | Partes | Responsable  |
|:---------:|:----:|:----:|
| 3. Realización (fabricación/ desarrollo) | Usuario/Terminal | Arquitecto Software/ Desarrollador |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 4 | 4 |

|Recursos ahorrados |
|:----------------------------------------------------------:|
|  Procesador  |

### Descripción

Cuando un elemento del DOM (Document Object Model) necesita ser modificado por varias propiedades, cada cambio de estilo o de contenido generará un repaint o un re?ow. Por lo tanto, suele ser más económico:
 - hacer invisible el elemento (pasar la propiedad display a none) (1 re?ow);
 - modificar todas las propiedades del elemento y hacerlo visible de nuevo (1 re?ow).

Dos re?ow como máximo.

### Ejemplo

Proceder de la siguiente manera:
```javascript
var elem = document.getElementById('foo'); elem.style.display ='none'; // Genera 1 re?ow elem.style.width = '10em';
elem.style.height ='auto';
// ... otros cambios ...
elem.style.display ='block'; // Genera 1 re?ow
```

Al final, se necesitan 2 re?ow en lugar de 6 o 7 potencialmente.

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de manipulaciones de un elemento del DOM sin que se vuelva invisible durante su modificación | 1 |


