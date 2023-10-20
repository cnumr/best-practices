## Mostrar páginas de error estáticas

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 46 | 98 | 96 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:----------:|:-------:|:------------------------ ----:|
 | 2. Diseño | Red | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------: |:-----------------:|
 | 3 | 3 | 3 |

 | Recursos guardados |
 |:----------------------------------------------- ----------:|
 | Procesador/RAM/Red/Almacenamiento |

 ### Descripción

 Las páginas de error (40x 50x) deben ser lo más ligeras posible idealmente inexistentes. Cuando los navegadores solicitan recursos inexistentes (imagen hoja de estilo CSS archivo JavaScript etc.) o cuando los servidores devuelven errores las páginas de error que se envían pueden ser más pesadas que el recurso o la página solicitada.

Además algunos CMS ejecutan su rutina de búsqueda de contenidos (en la base de datos) para intentar encontrar los recursos solicitados. Como resultado se ejecuta el código del servidor se solicita el servidor de la base de datos y se ejecuta la generación dinámica de la página HTML. Todo este proceso desperdicia ciclos de CPU RAM y ancho de banda.

 ### Ejemplo

Evite las páginas 404 dinámicas que se personalizan según el contenido de las URL. Son preferibles las páginas 404 estáticas.

 ### Regla de validación

 | El número de... | es igual o menor que |
 |---------------------|:------------------------: |
 | páginas de error dinámicas | 0 |
