## Recursos de alojamiento (CSS/JS) en un dominio sin cookies

 ### Identificadores

 | GreenIT | V2  |  V3 |  V4  |
 |:-------:|:---:|:---:|:----:|
 |    73   |  96 |  94 |      |

 ### Categorías

 | Ciclo de vida |     Niveles     |       Responsable         |
 |:-------------:|:---------------:|:-------------------------:|
 | 4. Producción | Centro de datos | Administrador del sistema |

 ### Indicaciones

 |      Prioridad     | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:----------------------------:|:-----------------:|
 |         3          |              3               |          4        |

 |                     Recursos ahorrados                    |
 |:---------------------------------------------------------:|
 |                             Red                           |

 ### Descripción

Las imágenes, las hojas de estilo CSS y los archivos JavaScript deben alojarse en dominios libres de cookies.
Esto evita que los navegadores envíen cookies para cada recurso cuando no es necesario.
Aunque se transfieren con cada solicitud HTTP, las cookies son inútiles para contenido estático, ya que se utilizan como enlace entre navegadores de los usuarios y servidores de aplicaciones distantes a través de los identificadores contenidos en el archivo de texto.
Por lo tanto, es preferible almacenar este tipo de contenido en un nombre de dominio específico como static.mydomain.com.

 ### Ejemplo

 Los líderes web utilizan un dominio separado para ofrecer recursos estáticos que no requieren cookies. Yahoo!, por ejemplo, utiliza el dominio yimg.com, YouTube utiliza ytimg.com y Amazon utiliza imágenes-amazon.com.

 ### Regla de validación

 | El número de...                                       | es igual o menor que |
 |------------------------------------------------------ |:--------------------:|
 | dominios que sirven recursos estáticos CON una cookie |            1         |
