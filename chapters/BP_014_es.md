## Crear una arquitectura de aplicación modular

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:---:|
 | 114 | 52 | 14 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:----------:|:----------:|:--------------------- :|
 | 2. Diseño | Centro de datos | Arquitecto / Desarrollador |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-------- ---------:|
 | 3 | 3 | 3 |

 | Recursos guardados |
 |:----------------------------:|
 | Procesador/RAM/Espacio en disco |

 ### Descripción

La arquitectura modular (popularizada por el software de código abierto) suele aportar una mayor escalabilidad reduce los costes de mantenimiento y un código más eficiente.

Si la cobertura funcional del sitio web o servicio web puede evolucionar es interesante implementar las características básicas en una aplicación central que pueda ampliarse con complementos. Esos complementos se pueden desarrollar de forma independiente y compartir entre aplicaciones.

Este enfoque se puede utilizar en todos los niveles para una solución personalizada o para la elección de un servidor HTTP o un CMS.


 ### Ejemplo

El software popular de código abierto ampliamente utilizado en la web como NGINX Apache MySQL o PHP utiliza una arquitectura modular.

 La arquitectura de microservicio permite cierto nivel de modularidad pero tenga cuidado con cómo se distribuyen las preocupaciones entre los
 componentes y cómo interactúan: complejidad adicional llamadas de red y otras consecuencias negativas no deseadas pueden
 aumentar el consumo de recursos.

 ### Regla de validación

 | El número de... | es igual o menor que |
 |---------------------------|:------------------ -----:|
 | Arquitecturas no modulares | 0 |
