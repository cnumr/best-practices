## Modificar varias propiedades CSS a la vez

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 34 | 32 | 45 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:-----------:|:----------------------------:|
 | 3. Implementación | Usuario/Dispositivo | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------- :|:--------------------:|
 | 3 | 4 | 2 |

 | Recursos ahorrados |
 |:---------------------------------------------------------:|
 | Procesador |

 ### Descripción

Evitar modificar las propiedades CSS una a una para limitar el número de repintados/reﬂows.

En su lugar, añada/elimine clases CSS que permitan modificar varias propiedades a la vez y generar un único repintado/reﬂujo 
(véase la regla nº 45).

 ### Ejemplo

 Escribir:
 ```html
 <estilo>
 .en-error { color: rojo;
 peso de fuente: negrita;
 }
 </estilo>
 <guión>
 $el.bind('error' función () {
 $el.addClass('en error');
 });
 $el.bind('ejecutando' función () {
 $el.removeClass('en error');
 };
 </script>
 ```


 #### Regla de validación

 | El número de... | es igual o menor que |
 |-------------------------------------------------------------------------------|:-------------------------:|
 | Declaraciones CSS que pueden agruparse en una sola (margen, relleno, ...) | 0 |
