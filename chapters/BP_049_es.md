## Almacenamiento en caché de objetos de acceso frecuente en Javascript

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 33 | 36 | 49 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:-------:|:----------------------------:|
 | 3. Implementación | Red | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------- :|:----------------------:|
 | 4 | 3 | 4 |

 | Recursos ahorrados |
 |:---------------------------------------------------------:|
 | Procesador |

 ### Descripción

Acceder al DOM (Document Object Model) consume muchos recursos del procesador (ciclos de CPU). 
Por lo tanto, cuando utilices el mismo elemento DOM varias veces en JavaScript, debes almacenar su referencia en una 
variable para no tener que volver a recorrer el DOM para ese mismo elemento.

 ### Ejemplos

 No escriba :
 ```javascript
 document.getElementById('menú').property1 = 'foo'; document.getElementById('menú').property2 = 'barra';
 ```

 Escribe en su lugar:
 ```javascript
 menú constante = document.getElementById('menú');
 menu.property1 = 'foo';
 menú.property2 = 'barra'
 ```

 ### Regla de validación

 | El número de... | es igual o inferior a |
 |---------------------------------------------------------------------------|:------------------------:|
 | datos constantes (o no volátiles) recuperados repetidamente sin ser almacenados en caché 0 | 0 |
