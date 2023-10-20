## Evite el uso de imágenes rasterizadas para la interfaz

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 161 | 21 | 35 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:----------:|:-----------:|:-----------:|
 | 5. Uso | Usuario/Dispositivo | Usuario |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-------- ---------:|
 | 4 | 4 | 4 |

 | Recursos guardados |
 |:---------------:|
 | Red |

 ### Descripción

Elegir el formato de imagen más adecuado es fundamental para ahorrar ancho de banda.

Además con el creciente número de dispositivos y tamaños de pantalla y el aumento de las resoluciones de pantalla se deberían preferir los enfoques basados ​​en vectores a las imágenes rasterizadas.
Con este enfoque la interfaz se desacoplará de la resolución de la pantalla lo que limitará la deuda técnica.
 La primera regla es reemplazar las imágenes rasterizadas (GIF PNG JPEG WebP etc.) con estilos (CSS) pictogramas glifos o íconos proporcionados por fuentes web o fuentes estándar (ya instaladas en los dispositivos de los usuarios).
 Esto no requiere ningún recurso adicional para descargar. Si no es posible utilizar CSS o fuentes estándar también puedes:

 - utilizar fuentes web
 - utilice una imagen vectorial en formato SVG estándar


 ### Ejemplo


 !img.png(img.png)

 Este tamaño de imagen de 198 × 198 píxeles es:
 - 118 KB en formato rasterizado sin comprimir;
 - 65 KB en JPEG (90% de compresión);
 - 38 KB en formato PNG;
 - 07 KB en SVG minimizado.

 En este caso particular el formato vectorial es de 5 a 10 veces más ligero que el formato ráster y al mismo tiempo puede cambiar su tamaño infinitamente.

 ### Regla de validación

 | El número de... | es igual o menor que |
 |----------------------------------|:------------ ------------:|
 | imágenes rasterizadas para la URL probada | 5 |
