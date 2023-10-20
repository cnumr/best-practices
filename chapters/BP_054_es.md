## Reducir el acceso DOM a través de JavaScript

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 32 | 42 | 54 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:-----------:|:------------- ---------------:|
 | 3. Implementación | Usuario/Dispositivo | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-------- ---------:|
 | 3 | 3 | 3 |

 | Recursos guardados |
 |:----------------------------------------------- ----------:|
 | Procesador/RAM |

 ### Descripción

Acceder al DOM (modelo de objetos de documento) a través de JavaScript es una tarea pesada que utiliza muchos ciclos de CPU. Evite en la medida de lo posible estos accesos.

 Para hacer esto puede asignar el nodo a variables que reutilizará durante el ciclo de vida de la aplicación.
 Evita volver a recorrer el árbol cada vez que manipulas el documento.

También es posible utilizar bibliotecas de tipo “Shadow DOM” que optimizan las modificaciones de los árboles con un sistema por lotes.

 ### Ejemplos

 Para saber más puedes consultar el proyecto W3C Shadow DOM:
 https://w3c.github.io/webcomponents/spec/shadow/
y las recomendaciones del W3C para reducir el acceso al DOM a través de JavaScript:
 https://www.w3.org/wiki/JavaScript_best_practices#Keep_DOM_access_to_a_minimum


 ### Regla de validación

 | El número de... | es igual o menor que |
 |------------------------------------------------ ------------------|:------------------------:|
 | accesos a elementos HTML sin pasar por una variable local | 0 |
