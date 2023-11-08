## Usar una CDN

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 75 | 102 | 98 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-------------:|:----------:|:--------------:|
 | 4. Producción | Centro de datos | Administrador del sistema |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-----------------:|
 | 4 | 3 | 4 |

 | Recursos guardados |
 |:---------------------------------------------------------:|
 | Procesador/RAM |

 ### Descripción

Algunos archivos como bibliotecas de JavaScript, hojas de estilo CSS, imágenes, etc. consumen mucha red porque suelen ser numerosos y pequeños.
Es por esto que se deben utilizar Content Delivery Networks (CDN) acercando físicamente estos archivos a los usuarios finales generando importantes ahorros de ancho de banda y tiempos de respuesta más cortos.

Tenga en cuenta que puede haber casos en los que el uso de CDN no sea realmente relevante. Por ejemplo para audiencias muy localizadas (regionales)  es más apropiado priorizar soluciones de hosting locales y de calidad. Por otro lado los sitios web con muy poco  el tráfico podría hacer que las CDN basadas en extracción sean contraproducentes ya que la extracción de archivos del servidor original podría ser demasiado recurrente.

 ### Ejemplo

 Utilizando CDN proporcionadas por Google que alojan bibliotecas de JavaScript de uso común.


 ### Regla de validación

 | El número de... | es igual o menor que |
 |----------------------------------|:------------------------:|
 | recursos (archivos) no servidos por CDN | 25% |