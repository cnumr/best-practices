## Evite cambiar el tamaño de las imágenes en el navegador

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:----:|:----:|
 | 93 | 20 | 34 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:-----------:|:-----------:|
 | 3. Implementación | Usuario/Dispositivo | Usuario |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------------------:|:--------------------------:|:----------------------:|
 | 4 | 4 | 4 |

 | Recursos ahorrados |
 |:---------------------:|
 | Procesador/Red |

 ### Descripción

 No cambie el tamaño de las imágenes utilizando los atributos HEIGHT y WIDTH del código HTML, ya que esto requiere transferir esas imágenes en su tamaño original desperdiciando ancho de banda y ciclos de CPU.

 ### Ejemplo

Una imagen PNG 24 de 350 × 300 píxeles pesa 41 KB. La misma imagen sigue pesando 41 KB, aunque no debería superar los 3 KB, 
cuando se redimensiona en código HTML para mostrarse como miniatura con unas dimensiones de 70 × 60 píxeles. 
Esto significa que cada vez que se visualiza esta imagen se descargan innecesariamente 38 KB. También hay que tener en 
cuenta que el cambio de tamaño del navegador puede dar lugar a una representación más pixelada.

La mejor solución es generar imágenes con el tamaño deseado. Esto puede hacerse manualmente usando editores de imágenes o automáticamente usando rutinas CMS que generen imágenes al tamaño adecuado para la plantilla.

 ### Regla de validación

 | El número de... | es igual o menor que |
 |------------------------|:------------------------:|
 | imágenes del navegador redimensionadas | 0 |

