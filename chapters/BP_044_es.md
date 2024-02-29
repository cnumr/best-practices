## Utilizar delegaciones de eventos

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 41 | 46 | 44 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:-----------:|:----------------------------:|
 | 3. Implementación | Usuario/Dispositivo | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------- :|:-----------------:|
 | 3 | 3 | 4 |

 | Recursos ahorrados |
 |:---------------------------------------------------------:|
 | Procesador/RAM |

 ### Descripción

La delegación de eventos evita sobrecargar la memoria del navegador instanciando un único oyente para varios elementos DOM (Document Object Model).

 ### Ejemplos

El elemento DOM cuyo ID es "t" se declara como delegado.

Intercepta los eventos de todos sus hijos.

 ```html
 <cabeza>
 //...
 <tipo de estilo="texto/css">
 #t { borde: 1px rojo sólido } #t1 { color de fondo: rosa; }
 </estilo>
 <tipo de script="texto/javascript">
 función modificarTexto(nuevo_texto) {
 sea t2 = document.getElementById("t2");
 t2.primerChild.nodeValue = nuevo_texto;
 }
 carga de función() {
 var el = document.getElementById("t");
 el.addEventListener("hacer clic" función() {
 modificarTexto("cuatro")
              } FALSO);
 }
 </script>
 </cabeza>
 <cuerpo onload="carga();">
 <id de tabla="t">
 <tr><td id="t1"><button type="button">uno</button></td></tr>
 <tr><td id="t2"><button type="button">dos</button></td></tr>
 </tabla>
 <!-- ... -->
 </cuerpo>
 ```

 ### Regla de validación

 | El número de... | es igual o inferior a  |
 |--------------------------------------------------------------------------------------------------------------------|:------------------------:|
 | oyentes del mismo evento en múltiples elementos HTML pertenecientes al mismo grupo sin utilizar delegación de eventos | 0 |
