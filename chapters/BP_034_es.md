## Evite cambiar el tamaño de las imágenes en el navegador

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:----:|:----:|
 | 93 | 20 | 34 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:-----------:|:-----------:|
 | 3. Implementación | Usuario/Dispositivo | Usuario |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------------------:|:------------------------ --:|:----------------------:|
 | 4 | 4 | 4 |

 | Recursos guardados |
 |:---------------------:|
 | Procesador/Red |

 ### Descripción

 No cambie el tamaño de las imágenes utilizando los atributos HEIGHT y WIDTH del código HTML ya que esto requiere transferir esas imágenes en su tamaño original desperdiciando ancho de banda y ciclos de CPU.

 ### Ejemplo

 Una imagen PNG 24 de 350 × 300 píxeles pesa 41 KB. La misma imagen todavía pesa 41 KB aunque no debe exceder los 3 KB cuando se cambia su tamaño en código HTML para mostrarla como una miniatura con dimensiones de 70 × 60 píxeles. Esto significa que se descargan innecesariamente 38 KB cada vez que se visualiza esta imagen. También tenga en cuenta que cambiar el tamaño del navegador puede provocar una representación más pixelada.

La mejor solución es generar imágenes con el tamaño objetivo. Esto se puede hacer manualmente usando editores de imágenes o automáticamente usando rutinas CMS que generan imágenes con el tamaño adecuado para la plantilla.

 ### Regla de validación

 | El número de... | es igual o menor que |
 |------------------------|:---------------------- --:|
 | imágenes del navegador redimensionadas | 0 |

