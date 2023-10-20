## Evite realizar consultas SQL dentro de un bucle

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 55 | 71 | 72 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:----------:|:-------------- --------------:|
 | 3. Implementación | Centro de datos | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------: |:-----------------:|
 | 3 | 3 | 3 |

 | Recursos guardados |
 |:----------------------------------------------- ----------:|
 | Procesador/RAM/Red |

 ### Descripción

 Realizar consultas SQL dentro de un bucle provoca importantes problemas de rendimiento especialmente si el servidor SQL no está en la máquina local.
Estos servidores están optimizados para manejar múltiples selecciones inserciones o modificaciones en una sola consulta o una sola transacción.

El uso inadecuado de estas consultas consume innecesariamente ciclos de CPU memoria y ancho de banda.

 ### Ejemplos

 No escriba :
 ```php
 foreach ($listausuario como $usuario) {
 $consulta = 'INSERT INTO usuarios (primer_nombreapellido) VALUES("'. $usuario'primer_nombre' .'" "'. $usuario'apellido' .'")';
 mysql_query($consulta);
 }
 ```
 más bien escribe:
 ```php
 $datosdeusuario = matriz();
 foreach ($listausuario como $usuario) {
 $userData = '("'. $user'first_name' .'" "'.
 $usuario'apellido' .'")';
 }
 $consulta = 'INSERTAR EN LOS VALORES de los usuarios (nombre apellido)'. implosionar('' $datosdeusuario); mysql_query($consulta);
 ```

 ### Regla de validación

 | El número de... | es igual o menor que |
 |---------------------------|:------------------ -----:|
 | Consultas SQL dentro de un bucle | 0 |
