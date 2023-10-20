## Usar todos los niveles de la caché del CMS

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 60 | 57 | 57 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-------------:|:----------:|:------------ --:|
 | 4. Producción | Centro de datos | Administrador del sistema |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------- :|:-----------------:|
 | 4 | 3 | 4 |

 | Recursos guardados |
 |:----------------------------------------------- ----------:|
 | Procesador/RAM |

 ### Descripción

 Si el CMS (como Wordpress Drupal eZ Publish etc.) ofrece un sistema de caché de varios niveles utilice estos diferentes niveles como
 su granularidad reduce los recursos utilizados (ciclos de CPU memoria) y ofrece mejores rendimientos a los usuarios.

 ### Ejemplo

 Un CMS como WordPress no tiene de forma nativa un sistema de caché pero existen varios complementos que pueden responder a este requisito. Los más populares son:

 - Caché total W3
 - WP Súper Caché
 - cohete WP

 Con uno de estos complementos las páginas se almacenan en caché en el servidor y ya no se generan para cada usuario. Además este tipo de herramientas también proporciona otras optimizaciones orientadas a WebPerf siguiendo principios de ecodiseño web.


 ### Regla de validación

 | El número de... | es igual o menor que |
 |----------------------|:------------------------ :|
 | cachés no activados | 0 |
