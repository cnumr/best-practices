## Utilice únicamente las partes necesarias de las bibliotecas Javascript y los marcos CSS

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 811 | 77 | 40 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:----------:|:-------:|:------------------------ ----:|
 | 2. Diseño | Red | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-------- ---------:|
 | 4 | 4 | 4 |

 | Recursos guardados |
 |:----------------------------------------------- ----------:|
 | Procesador/RAM/Red |

 ### Descripción

 bibliotecas de JavaScript como jQuery y marcos CSS listos para usar (Bootstrap esqueleto gumby fundación etc.)
 son excelentes herramientas que se utilizan para crear sitios web muy rápidamente ya que cumplen casi con todos los requisitos más comunes.
La desventaja es que generalmente solo se utiliza una pequeña parte de esas bibliotecas; y algunos de estos marcos y bibliotecas
 no dependen de una arquitectura modular lo que hace que los usuarios descarguen bibliotecas enteras solo para utilizar un pequeño porcentaje de sus funciones.

 Evite el uso de estas bibliotecas cuando sea posible (consulte https://youmightnotneedjquery.com)
 o conservar únicamente las piezas más utilizadas (consulte https://getbootstrap.com/customize).

Los paquetes como Webpack permiten la eliminación automática del código no utilizado. A esto se le llama sacudir los árboles.

 ### Ejemplo

 !img_1.png(img_1.png)

Algunos marcos (aquí Bootstrap) le permiten crear bibliotecas personalizadas que solo contienen las partes realmente utilizadas por el sitio.
 reduciendo así el tamaño de las bibliotecas y los recursos utilizados durante la ejecución.

 ### Regla de validación

 | El número de... | es igual o menor que |
 |----------------------------------|:------------ ------------:|
 | bibliotecas usadas con piezas no utilizadas | 1 |
