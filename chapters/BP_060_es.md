## Codificar archivos de audio fuera del CMS

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 96 | 60 | 60 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:----------:|:-----------:|:-----------:|
 | 5. Uso | Usuario/Dispositivo | Usuario |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:---------------:|
 | 4 | 4 | 4 |
 
 |        Recursos ahorrados         |
 |:---------------------------------:|
 | Procesador/RAM/Red/Almacenamiento |

 ### Descripción

 Adaptar y optimizar archivos de audio fuera de los sitios web. Este método ahorra mucho ancho de banda y libera CPU y RAM ya que los servidores web no están optimizados para (re)codificar archivos de audio.

 ### Ejemplos

 Si un archivo de audio agregado directamente al CMS pesa 7 MB es posible ahorrar:
 - 7 MB de ancho de banda en el momento de la carga.
 - 100 KB al escuchar el archivo
 - 69 MB de almacenamiento en el disco duro del servidor.

 ### Regla de validación

 | El número de... | es igual o menor que |
 |-----------------------------------------|:------------------------:|
 | archivos de audio codificados directamente por el CMS | 0 |
