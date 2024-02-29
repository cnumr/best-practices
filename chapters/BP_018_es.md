## Reducir la cantidad de dominios que sirven recursos

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
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

 | Recursos ahorrados |
 |:------------------:|
 |     Consultas      |

 ### Descripción

Cuando un sitio web o servicio en línea aloja componentes de páginas web en múltiples dominios el navegador debe 
establecer una conexión HTTP con cada uno de estos dominios. Una vez recibida la página HTML
 el navegador busca recursos mientras recorre el DOM (modelo de objetos de documento).
Algunos recursos son esenciales para que la página web funcione. Si están alojados en dominios que no responden 
la página puede volverse más lenta. Cuando sea posible todos los recursos deben agruparse en un único dominio.

La única excepción a esta regla sería el alojamiento de recursos estáticos (hojas de estilo, imágenes, etc.) 
en un dominio dedicado para evitar la carga de una o más cookies por cada GET HTTP del navegador. El tiempo de respuesta disminuirá, así como el ancho de banda consumido innecesariamente.


 ### Ejemplo

Para un sitio web institucional con mucho tráfico, es preferible utilizar dos subdominios:
 - servidor de aplicaciones en www.dominio.tld
 - servidor de medios “sin cookies” en media.domain.tld

Esto reduce el número de dominios y evita transportar innecesariamente cookies con cada petición HTTP GET sobre recursos estáticos.

 ### Regla de validación

 | El número de... | es igual o menor que |
 |----------------------|:-------------------------:|
 | dominios que sirven recursos | 5 |
