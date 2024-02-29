## Crear una arquitectura de aplicación modular

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:---:|
 | 114 | 52 | 14 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:----------:|:----------:|:--------------------- :|
 | 2. Diseño | Centro de datos | Arquitecto / Desarrollador |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-----------------:|
 | 3 | 3 | 3 |

 | Recursos ahorrados |
 |:----------------------------:|
 | Procesador/RAM/Espacio en disco |

 ### Descripción

La arquitectura modular (popularizada por el software de código abierto) suele aportar una mayor escalabilidad, reducir los costes de mantenimiento y un código más eficiente.

Si la cobertura funcional del sitio o servicio web puede evolucionar, es interesante implementar las características 
básicas en una aplicación central que pueda ampliarse con plugins. Estos plugins pueden desarrollarse de forma independiente y compartirse entre aplicaciones.

Este enfoque se puede utilizar en todos los niveles, para una solución medida, o para la elección de un servidor HTTP o un CMS.


 ### Ejemplo

Programas populares de código abierto, muy utilizados en la web como NGINX, Apache, MySQL o PHP, utilizan una arquitectura modular.

La arquitectura de microservicios permite cierto nivel de modularidad, pero hay que tener cuidado con cómo se
reparten las preocupaciones entre los componentes y cómo interactúan: la complejidad añadida, las llamadas a la red 
y otras consecuencias negativas no deseadas pueden aumentar el consumo de recursos.

 ### Regla de validación

 | El número de... | es igual o menor que |
 |---------------------------|:-----------------------:|
 | Arquitecturas no modulares | 0 |
