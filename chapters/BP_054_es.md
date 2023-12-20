## Reducir el acceso al DOM mediante JavaScript

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 32 | 42 | 54 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:-----------:|:----------------------------:|
 | 3. Implementación | Usuario/Dispositivo | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-----------------:|
 | 3 | 3 | 3 |

 | Recursos ahorrados |
 |:---------------------------------------------------------:|
 | Procesador/RAM |

 ### Descripción

Acceder al DOM (Document Object Model) mediante JavaScript es una tarea pesada que consume muchos ciclos de CPU. Evite estos accesos en lo posible.

Para ello, puedes asignar el nodo a variables que reutilizarás durante el ciclo de vida de la aplicación. Así evitarás volver a recorrer el árbol cada vez que manipules el documento.

También es posible utilizar librerías del tipo "Shadow DOM", que optimizan las modificaciones del árbol con un sistema por lotes.


 ### Ejemplos

 Para saber más puedes consultar el proyecto W3C Shadow DOM:
 https://w3c.github.io/webcomponents/spec/shadow/
y las recomendaciones del W3C para reducir el acceso al DOM a través de JavaScript:
 https://www.w3.org/wiki/JavaScript_best_practices#Keep_DOM_access_to_a_minimum


 ### Regla de validación

 | El número de... | es igual o menor que |
 |------------------------------------------------------------------|:------------------------:|
 | accesos a elementos HTML sin pasar por una variable local | 0 |
