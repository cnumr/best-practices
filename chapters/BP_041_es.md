## Evitar modificaciones durante el recorrido del DOM

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 43 | 43 | 41 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:-----------:|:----------------------------:|
 | 3. Implementación | Usuario/Dispositivo | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-----------------:|
 | 4 | 4 | 4 |

 | Recursos ahorrados |
 |:---------------------------------------------------------:|
 | Procesador |

 ### Descripción

Modificar elementos del DOM (Document Object Model) mientras se navega por él puede dar lugar a situaciones que 
provoquen un consumo abusivo de recursos, especialmente ciclos de CPU. Añadir elementos durante la navegación por el 
DOM puede acabar creando un bucle infinito que consumirá una gran cantidad de recursos. Este tipo de modificación debe 
evitarse siempre que sea posible.evitarse cuando sea posible.

 ### Ejemplo

 Evitar :
 ```html
 <guión>
 // notación jQuery
 $('a.extlink').cada(función(el) {
 $(el).attr('rel''nofollow externo');
 });
 </script>
 ```


 ### Regla de validación

 | El número de... | es igual o inferior a |
 |--------------------------------------------------------------------------------------------------|:------------------------:|
 | Modificaciones de elementos DOM realizadas cuando la misma parte del DOM es recorrida por código JavaScript | 0 |
