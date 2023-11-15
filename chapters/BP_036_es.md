## Optimizar imágenes vectoriales

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:--------:|:-----:|:-----:|:-----:|
 | 1050 | 22 | 36 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:----------:|:-----------:|:-------------:|
 | 5. Uso | Usuario/Dispositivo | Usuario |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:---------:|:--------------------------:|:-----------------:|
 | 4 | 4 | 4 |

 | Recursos ahorrados |
 |:---------------:|
 | Red |

 ### Descripción

Todos los navegadores modernos son compatibles con el formato de imagen SVG (Scalable Vector Graphics), basado en un 
conjunto de vectores descritos en XML. Las imágenes SVG tienen dos ventajas innegables: por un lado, pueden reducirse y
ampliarse infinitamente sin pérdida de calidad; por otro, suelen ser más ligeras que las imágenes de mapa de bits.

Sin embargo, la mayoría de las imágenes SVG contienen muchos metadatos que fueron necesarios para crearlas, 
como información sobre capas, comentarios, etc., que son esenciales en el proceso de edición de la imagen, 
pero inútiles para mostrarla. Si los elimina, reducirá el tamaño total de sus archivos. Existen muchas herramientas de
minificación y optimización, como Compressor.io, SVG Cleaner o SVGO.

La tasa de compresión Gzip depende de la complejidad de la imagen, pero sigue siendo importante, ya que se trata de 
comprimir texto: en general, se pueden alcanzar ratios del 75% al 80%.


 ### Ejemplos

Ganancia potencial: hasta un 75% menos de KB.

Hemos probado SVGO en un archivo SVG de 1 KB. Su tamaño se ha reducido en un 36%, pasando de 1101 a 700 bytes. 
El tamaño del archivo se redujo aún más, a 498 bytes, al comprimir este archivo mediante gzip antes de su transferencia, 
menos de la mitad (45%) de su tamaño inicial, sin pérdida de calidad de visualización.
 ### Regla de validación

 | El número de... | es igual o inferior a |
 |----------------------|:------------------:|
 | imágenes no optimizadas |         0%         |
