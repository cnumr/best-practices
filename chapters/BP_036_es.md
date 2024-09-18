## Optimizar las imágenes vectoriales

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|  1050   | 22  | 36  |     |     |

### Categorías

| Ciclo de vida |      Partes      | Responsable |
| :-----------: | :--------------: | :---------: |
|    5. Uso     | Usuario/Terminal |   Usuario   |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| :----------------: | :--------------------------------------: | :---------------: |
|         4          |                    4                     |         4         |

| Recursos ahorrados |
| :----------------: |
|        Red         |

### Descripción

Todos los navegadores modernos son compatibles con el formato de imagen vectorial SVG (Scalable Vector Graphics), basado en un conjunto de vectores descritos en XML. Las imágenes SVG tienen dos ventajas innegables: por un lado, pueden reducirse y ampliarse al infinito sin degradación de calidad; por otra parte, son, la mayoría de las veces, menos pesadas que las imágenes de mapa de bits.

Sin embargo, la mayoría de las imágenes SVG contienen muchos metadatos que fueron necesarios para su creación.
Es el caso, por ejemplo, de las informaciones de capa (layer), de los comentarios, etc., que son indispensables para editar la imagen, pero innecesarios para visualizarla. De ahí la idea de eliminarlos para reducir el peso de los archivos.
Están disponibles numerosas herramientas de minificación y optimización, como Compressor.io, SVG Cleaner o SVGO.

La tasa de compresión a través de gzip varía según la complejidad de la imagen. Pero siempre es alta, porque se trata de comprimir texto: en general, se alcanzan ratios del orden del 75 % al 80 %.

### Ejemplo

Ahorro potencial: hasta 75% menos de KB.

Hemos probado SVGO en un archivo SVG de 1 KB. Redujo su tamaño en un 36 %, de 1101 a 700 bytes. Al comprimir el archivo a través de gzip antes de su transferencia, el tamaño se redujo a 498 bytes, menos de la mitad (45%) del tamaño inicial, sin ninguna pérdida de calidad de visualización.

### Principio de validación

| El número ..               | es inferior o igual a |
| -------------------------- | :-------------------: |
| de imágenes no optimizadas |          0%           |
