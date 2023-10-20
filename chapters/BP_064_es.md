## Caché de datos calculados de uso frecuente

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 47 | 62 | 64 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:----------:|:-------:|:------------------------ ----:|
 | 2. Diseño | Red | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------: |:-----------------:|
 | 4 | 3 | 4 |

 | Recursos guardados |
 |:----------------------------------------------- ----------:|
 | Procesador/RAM |

 ### Descripción

 Cuando los valores o los cálculos de datos consumen muchos recursos debe almacenar en caché los resultados cuando los valores permanezcan sin cambios para evitar repetir estas operaciones.
Los sistemas de caché de tipo clave-valor están diseñados para almacenar estos datos. Como generalmente se almacenan íntegramente en la RAM generan importantes ahorros de ciclos de CPU cuando los datos calculados se utilizan con frecuencia.

 ### Ejemplos

 La cantidad de contenidos (por ejemplo productos) que pertenecen a una categoría se calcula aunque no se actualiza con mucha frecuencia. El almacenamiento en caché del número de contenidos de cada categoría ahorra ciclos de CPU.

 los tokens de acceso de OAuth2 tienen tiempo de vencimiento. El almacenamiento en caché de los tokens y su tiempo de vencimiento evita llamadas innecesarias al servidor de autorización para revalidarlos.

 ### Regla de validación

 | El número de... | es igual o menor que |
 |----------------------|:-------------------------:|
 | datos no volátiles que requieren cálculo y a los que se accede varias veces pero que no se almacenan en un sistema de caché | 0 |
