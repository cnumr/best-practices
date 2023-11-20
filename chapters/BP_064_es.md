## Caché de datos calculados de uso frecuente

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 |   47    | 62 | 64 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:----------:|:-------:|:----------------------------:|
 | 2. Diseño | Red | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------: |:-----------------:|
 | 4 | 3 | 4 |

 | Recursos ahorrados |
 |:------------------:|
 |   Procesador/RAM   |

 ### Descripción

Cuando los cálculos de valores o datos consumen muchos recursos, conviene almacenar en caché los resultados cuando los valores no cambian, 
para evitar repetir estas operaciones. Los sistemas de caché de tipo clave-valor están diseñados para almacenar estos datos. 
Al almacenarse generalmente en su totalidad en memoria RAM, generan un importante ahorro de ciclos de CPU cuando los datos calculados 
se utilizan con frecuencia.

 ### Ejemplos

El número de contenidos (por ejemplno, productos) pertenecientes a una categoría se calcula cuando no se actualiza con mucha frecuencia. 
El almacenamiento en caché del número de contenidos de cada categoría ahorra ciclos de CPU.


Los tokens de acceso OAuth2 tienen caducidad. El almacenamiento en caché de los tokens y su tiempo de caducidad evita llamadas innecesarias al servidor de autorización para revalidarlos.

 ### Regla de validación

 | El número de... | es igual o menor que |
 |----------------------|:-------------------------:|
 | datos no volátiles que requieren cálculo y a los que se accede varias veces pero que no se almacenan en un sistema de caché | 0 |
