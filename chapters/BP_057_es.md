## Utilizar todos los niveles del caché CMS

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 60 | 57 | 57 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-------------:|:----------:|:--------------:|
 | 4. Producción | Centro de datos | Administrador del sistema |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------- :|:-----------------:|
 | 4 | 3 | 4 |

 | Recursos ahorrados |
 |:---------------------------------------------------------:|
 | Procesador/RAM |

 ### Descripción

Si el CMS (como Wordpress, Drupal, eZ Publish, etc.) ofrece un sistema de caché multinivel, 
el uso de estos diferentes niveles en su granularidad reduce los recursos utilizados (ciclos de CPU, memoria) y ofrece mejores prestaciones a los usuarios.

 ### Ejemplo

Un CMS como WordPress no dispone de forma nativa de un sistema de caché, pero existen varios plugins que pueden 
responder a esta necesidad. Los más populares son:

 - W3 Total Cache
 - WP Súper Caché
 - WP-rocket

Con uno de estos plugins, las páginas se almacenan en el caché del servidor y ya no se generan para cada usuario. Además,
este tipo de herramientas también proporcionan otras optimizaciones orientadas a WebPerf siguiendo los principios del ecodiseño web.

 ### Regla de validación

 | El número de... | es igual o menor que |
 |----------------------|:------------------------ :|
 | cachés no activados | 0 |
