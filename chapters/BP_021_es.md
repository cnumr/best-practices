## Dividir CSS

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:----:|:----:|:----:|
 | 9 | 24 | 21 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:---------:|:----:|:----:|
 | 3. Implementación | Red | Diseñador UX/UI |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:-------------------:|:------------------------- :|:---------------------:|
 | 4 | 4 | 4 |

 |Recursos guardados |
 |:----------------------------------------------- -----------:|
 | Procesador/Red |

 ### Descripción

 Utilice un conjunto de CSS en lugar de uno solo e importe solo los necesarios según el contexto. Este método ayuda a limitar el tamaño de la página ahorrando así ancho de banda y reduciendo la carga de la CPU.

 ### Ejemplo

 Utilice una lógica funcional para dividir el CSS:
   - disposición;
   - contenido;
 - módulo x;
 - módulo y;
   - etc...

 Esto excluirá todos los CSS de los módulos no utilizados en el caso de un sitio web con muchas funciones.
 La cantidad de archivos CSS debe seguir siendo razonable más por motivos de mantenimiento que por problemas de rendimiento.
 ya que el CSS general (“diseño” y “contenido” en nuestro ejemplo) se concatenará en un solo archivo.

 Los archivos CSS opcionales (aquí "módulo x" y "módulo y") se descargarán dependiendo del contexto (página funcionalidades...).


 ### Regla de validación

 | El número de... | es igual o menor que |
 |----------------------|:-------------------------:|
 | Las bibliotecas CSS son superiores o iguales a | 2 |
