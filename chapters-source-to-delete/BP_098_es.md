## Usar una CDN
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  75	| 102  | 98  |  	|

### Categorías

| Ciclo de vida | Partes | Responsable |
|:---------:|:----:|:----:|
| 4. Producción | Centro de datos | Administrador de sistemas |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

| Recursos ahorrados |
|:----------------------------------------------------------:|
| Procesador/ RAM  |

### Descripción

Algunos archivos, como las bibliotecas JavaScript, las hojas de estilo CSS, las imágenes, etc., son intensivos en recursos de red, ya que suelen ser numerosos y pequeños. Por eso es recomendable utilizar las CDN (Content Delivery Network), que acercan físicamente estos ficheros a los internautas, generando así un ahorro importante de ancho de banda y un mejor tiempo de respuesta.

Sin embargo, hay que reconocer que puede haber casos en los que el uso de una CDN no sea realmente pertinente. Por ejemplo, en el caso de los servicios con un objetivo muy localizado (por ejemplo, regional), es más oportuno favorecer un alojamiento local de calidad. Por otra parte, un sitio web con muy poco tráfico podría hacer contraproducente el uso de una CDN basada en el modelo "pull" ya que las extracciones de archivos del servidor original podrían ser demasiado frecuentes.

### Ejemplo

Utilizar las CDN proporcionadas por Google que alojan las diferentes bibliotecas JavaScript comúnmente utilizadas.

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de recursos servidos (ficheros) sin utilizar una CDN | 25%  |


