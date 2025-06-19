## Reducir al máximo el repaint (appearence) y el reflow (layout)
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2 | V3 | V4 |
|:-------:|:----:|:----:|:----:|
|  42   | 45  | 43   | |

### Categorías

| Ciclo de vida | Partes | Responsable  |
|:---------:|:----:|:----:|
| 3. Realización (fabricación/ desarrollo) | Usuario/Terminal | Arquitecto Software/ Desarrollador |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 4 | 4 |

|Recursos ahorrados |
|:----------------------------------------------------------:|
| Procesador   |

### Descripción

El repaint es el cambio de apariencia de un elemento del DOM (Document Object Model), mientras que el re?ow es el proceso de cambiar o recalcular la posición de los elementos en el DOM. Ambas operaciones son costosas en recursos, sobre todo en ciclos de CPU: por lo tanto, hay que evitar activarlas.

### Ejemplo

Para evitar los repaint, no cambie las propiedades estilísticas de un elemento (color de fondo, estilo de borde, color del texto, tamaño, etc.).

Para evitar el re?ow, hay que limitar los cambios en las propiedades de posición, tamaño, tipo de posicionamiento, contenido, etc. Esta sugerencia es válida para determinados elementos HTML como tablas, cuyo re?ow puede requerir hasta tres veces más tiempo que un elemento equivalente con un block display.

Para ir más lejos:
https://developers.google.com/speed/articles/reflow


### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de modificaciones que no afectan a la maquetación y dan lugar a un repaint (ej.: color, fondo, visibilidad) | 1  |


