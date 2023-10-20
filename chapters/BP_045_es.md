## Modificar varias propiedades CSS a la vez

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 34 | 32 | 45 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:-----------:|:------------- ---------------:|
 | 3. Implementación | Usuario/Dispositivo | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------- :|:--------------------:|
 | 3 | 4 | 2 |

 | Recursos guardados |
 |:----------------------------------------------- ----------:|
 | Procesador |

 ### Descripción

 Evite modificar las propiedades de CSS una por una para limitar el número de repintados/reflujos.

 En lugar de agregar/eliminar clases CSS que permiten modificar varias propiedades a la vez mientras solo se genera un único repintado/reflujo (consulte regla n.° 45(/chapters/best_practices_045_fr.md)).

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
 |------------------------------------------------ -------------------------------|:------------------ -------:|
 | Declaraciones CSS que se pueden agrupar en una sola (margen relleno...) | 0 |
