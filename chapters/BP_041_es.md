## Evite modificaciones durante el recorrido DOM

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 43 | 43 | 41 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:-----------:|:------------- ---------------:|
 | 3. Implementación | Usuario/Dispositivo | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-------- ---------:|
 | 4 | 4 | 4 |

 | Recursos guardados |
 |:----------------------------------------------- ----------:|
 | Procesador |

 ### Descripción

 Modificar elementos DOM (Modelo de objetos de documento) mientras se navega por él puede dar lugar a situaciones que conduzcan a la codicia.
 consumo de recursos especialmente ciclos de CPU. Agregar elementos durante el recorrido DOM podría terminar creando un
 bucle infinito que consumirá una gran cantidad de recursos. Este tipo de modificación debe evitarse cuando sea posible.

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

 | El número de... | es igual o menor que |
 |------------------------------------------------ -------------------------------------------------- -|:------------------------:|
 | Modificaciones de elementos DOM realizadas cuando la misma parte del DOM es atravesada por código JavaScript | 0 |
