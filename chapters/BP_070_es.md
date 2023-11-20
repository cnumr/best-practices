## Eliminar todas las advertencias y avisos

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 51 | 65 | 70 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-------------:|:----------:|:--------------:|
 | 4. Producción | Centro de datos | Administrador del sistema |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------: |:-----------------:|
 | 2 | 3 | 2 |

 | Recursos ahorrados |
 |:---------------------------------------------------------:|
 | Procesador/Almacenamiento |

 ### Descripción

Las advertencias y avisos ralentizan los servidores de aplicaciones como PHP, ya que tienen que rastrear 
los orígenes de los errores y registrar mensajes que explican los problemas asociados en varios sistemas de registros.

 ### Ejemplo

 Evitar :
 ```html
 <html>
 <cuerpo>
 <formulario método="post" aceptar-charset="utf-8">
 <etiqueta>
                  Nombre de pila
 <tipo de entrada="texto" nombre="primer_nombre" valor="<?php print $_POST'primer_nombre' ?>" marcador de posición="">
 </etiqueta>
 <etiqueta>
                   Apellido
 <tipo de entrada="texto" nombre="apellido" valor="<?php print $_POST'apellido' ?>" marcador de posición="">
 </etiqueta>
 </formulario>
 </cuerpo>
 </html>
 ```
 `$_POST'primer_nombre'` y `$_POST'apellido'` generan avisos porque no están necesariamente definidos.


 ### Regla de validación

 | El número de... | es igual o menor que |
 |----------------------|:------------------------ :|
 | advertencias y avisos | 0 |
