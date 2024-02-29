## Contar con una estrategia de fin de vida para el sitio web

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:-----:|:---:|:----:|
 | 1030 | | 85 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:--------------:|:----------:|:-----------:|
 | 7. Fin de vida | Centro de datos | PO |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------: |:-----------------:|
 | 3 | 2 | 3 |

 | Recursos ahorrados |
 |:---------------------------------------------------------:|
 | Procesador / RAM / Red / Consultas / Almacenamiento |

 ### Descripción

La mayoría de los entornos (POC - prueba de concepto, pruebas, aceptación, etc.) acaban siendo obsoletos y ya no se necesitan.
Alrededor del 25% de los servidores físicos y el 20% de los servidores virtuales (VM) se convierten en zombis, 
lo que significa que utilizan recursos a la espera de ser utilizados. Esto supone un impacto medioambiental y económico evitable.

Aplicar un plan de fin de vida útil puede evitar este tipo de situaciones.

Un plan de fin de vida sencillo consiste en responsabilizar a alguien para que decida cuándo detener el servicio. 
Su papel consistiría en supervisar la actividad de este servicio hasta que decida detenerlo. Otro método consiste en 
redactar un escenario de fin de vida (fecha de caducidad, etc.) y asignar el presupuesto adecuado desde el principio. 
Una tercera opción sería prolongar la vida útil del servicio.

Poner fin a un servicio implica:

 - Liberar recursos: desmantelar el servicio, sus dependencias, las herramientas utilizadas por el equipo de desarrollo (por ejemplo, el canal Teams).
 - Borrar, archivar o gestionar de otro modo los datos (incluidos los sistemas de gestión de documentos y de seguimiento de errores).
 - Reasignar instalaciones, equipos y otros recursos del proyecto (incluido el código fuente).
 - Valorar las habilidades adquiridas durante la vida del proyecto.

 ### Ejemplo

Cuando se migran datos o aplicaciones a un entorno de nube pueden darse varios escenarios de fin de vida útil:

 - Copiar y pegar los datos o aplicaciones existentes en la nube mediante el desmantelamiento del entorno anterior.
 - Refactorización con cambios en la arquitectura y el código, que pueden cuestionar el entorno existente. 
Por ejemplo, cuestionar las funcionalidades no utilizadas guardadas para un hipotético uso posterior...

 ### Regla de validación

 | El número de... | es igual o menor que |
 |-------------------------------------------------|:------------------------:|
 | sitios web sin plan de fin de vida | 0 |
