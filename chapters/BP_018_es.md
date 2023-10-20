## Reducir la cantidad de dominios que sirven recursos

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:----:|:----:|:----:|
 | 170 | 55 | 18 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:---------:|:----:|:----:|
 | 4. Producción | Red | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:-------------------:|:------------------------- :|:---------------------:|
 | 3 | 3 | 4 |

 |Recursos guardados |
 |:----------------------------------------------- -----------:|
 | Consultas |

 ### Descripción

Cuando un sitio web o servicio en línea aloja componentes de páginas web en múltiples dominios el navegador debe establecer una conexión HTTP con cada uno de estos dominios. Una vez recibida la página HTML
 el navegador busca recursos mientras recorre el DOM (modelo de objetos de documento).
Algunos recursos son esenciales para que la página web funcione. Si están alojados en dominios que no responden la página puede volverse más lenta. Cuando sea posible todos los recursos deben agruparse en un único dominio.

 La única excepción a esta regla sería el alojamiento de recursos estáticos (hojas de estilo imágenes etc.) en un dominio dedicado.
 para evitar la carga de una o más cookies por cada GET HTTP por parte del navegador. El tiempo de respuesta disminuirá y el ancho de banda consumido innecesariamente.

 ### Ejemplo

 Para un sitio web institucional con mucho tráfico se deben preferir dos subdominios:
 - servidor de aplicaciones en www.dominio.tld
 - servidor de medios “sin cookies” en media.domain.tld

 Esto reduce la cantidad de dominios y evita el transporte innecesario de cookies con cada solicitud HTTP GET en recursos estáticos.

 ### Regla de validación

 | El número de... | es igual o menor que |
 |----------------------|:-------------------------:|
 | dominios que sirven recursos | 5 |
