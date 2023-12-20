## Utilice sólo las partes necesarias de las bibliotecas Javascript y los frameworks CSS

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 811 | 77 | 40 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:----------:|:-------:|:----------------------------:|
 | 2. Diseño | Red | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-----------------:|
 | 4 | 4 | 4 |

 | Recursos ahorrados |
 |:---------------------------------------------------------:|
 | Procesador/RAM/Red |

 ### Descripción

Las librerías JavaScript como jQuery y los frameworks CSS listos para usar (Bootstrap, skeleton, gumby, foundation, etc.)
son excelentes herramientas para crear sitios web muy rápidamente, ya que casi cumplen todos los requisitos más comunes. 
El inconveniente es que generalmente sólo se utiliza una pequeña parte de esas librerías; y algunos de estos frameworks y 
librerías no se basan en una arquitectura modular, lo que hace que los usuarios descarguen librerías enteras sólo para 
utilizar un pequeño porcentaje de sus características.

Evite utilizar estas bibliotecas siempre que sea posible (consulte https://youmightnotneedjquery.com) o 
conserve únicamente sus partes más utilizadas (consulte https://getbootstrap.com/customize).

Bundlers como Webpack permiten la eliminación automática del código no utilizado. Esto se llama "tree shaking".
 ### Ejemplo

![img_1.png](img_1.png)

Algunos frameworks (aquí Bootstrap) permiten crear librerías personalizadas que sólo contienen las partes realmente 
utilizadas por el sitio, reduciendo así el tamaño de las librerías y los recursos utilizados durante la ejecución.
 ### Regla de validación

 | El número de... | es igual o inferior a |
 |----------------------------------|:------------------------:|
 | bibliotecas usadas con piezas sin usar | 1 |
