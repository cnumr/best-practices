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
 |:------------------:|:--------------------------:|:--------------------:|
 | 3 | 4 | 2 |

 | Recursos ahorrados |
 |:---------------------------------------------------------:|
 | Procesador |

 ### Descripción

 Evite modificar las propiedades de CSS una por una para limitar el número de repintados/reflujos.

 En lugar de agregar/eliminar clases CSS que permiten modificar varias propiedades a la vez mientras solo se genera un único repaint/reﬂow (consulte [la buena práctica n.° 45](/chapters/BP_045_es.md)).

 ### Ejemplo

 Escribir:

```html
<styling>
     .in-error { color: red;
         font-weight: bold;
     }
</style>
<script>
     $el.bind('error', function () {
         $el.addClass('in-error');
     });
     $el.bind('running', function () {
         $el.removeClass('in-error');
     };
</script>
```


 #### Regla de validación

 | El número de... | es igual o menor que |
 |-------------------------------------------------------------------------------|:-------------------------:|
 | Declaraciones CSS que se pueden agrupar en una sola (margen, relleno,...) | 0 |
