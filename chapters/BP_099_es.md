## Usar una caché HTTP

 ### Identificadores

 | GreenIT |  V2  | V3  |  V4  |
 |:-------:|:----:|:---:|:----:|
 |    72   |  103 | 99  |      |

 ### Categorías

 | Ciclo de vida | Niveles |       Responsable         |
 |:-------------:|:-------:|:-------------------------:|
 | 4. Producción |   Red   | Administrador del sistema |

 ### Indicaciones

 |      Prioridad     | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:----------------------------:|:-----------------:|
 |         4          |               3              |          5        |

 |                     Recursos ahorrados                    |
 |:---------------------------------------------------------:|
 |                      Procesador/RAM                       |

 ### Descripción

Los proxies inversos como Varnish, Squid, o NGINX están optimizados para ofrecer contenido rápidamente (páginas HTML, imágenes, etc.) mientras consumen la menor cantidad de ciclos de CPU posible. Al evitar solicitudes innecesarias del servidor de aplicaciones, los servidores proxy inversos permiten el uso de infraestructuras más pequeñas.

 ### Ejemplo

El uso de un proxy inverso especializado como Varnish reduce drásticamente el tiempo necesario para servir páginas dinámicas y al mismo tiempo aumenta la capacidad del CMS (Drupal, en este caso) para entregar una gran cantidad de ellas al mismo tiempo. También se observa que una caché de propósito general como APC no es apropiada (fuente: Asymptotix).

 ### Regla de validación

 | El número de...                         | es igual o menor que |
 |-----------------------------------------|:--------------------:|
 | Encabezados HTTP sin caché identificado |           0          |
