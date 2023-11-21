## Reducir los registros del servidor tanto como sea posible

 ### Identificadores

 | GreenIT | V2  | V3  | V4  |
 | :-----: | :-: | :-: | :-: |
 |   82    | 99  | 103 |     |

 ### Categorías

 | Ciclo de vida |     Niveles     |            Responsable               |
 | :-----------: | :-------------: | :----------------------------------: |
 | 4. Producción | Centro de datos | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 | :-------: | :--------------------------: | :---------------: |
 |     2     |             2                |          3        |

 |       Recursos ahorrados      |
 | :---------------------------: |
 | Procesador/RAM/Almacenamiento |

 ### Descripción

 Los registros del servidor (web, aplicación, base de datos) pueden llegar a ser muy grandes. Se recomienda configurarlos ajustando el nivel de registro de la aplicación al nivel más alto posible (por ejemplo, sólo información/advertencia/error) y al registrar sólo información relevante, se evitan las escrituras en el disco, se reduce la cantidad de ciclos de CPU y el uso del espacio de almacenamiento.

Para evitar la saturación del disco también se recomienda configurar un tiempo de retención y una rotación de registros según las necesidades operativas del servicio.

 ### Ejemplo

Los registros de acceso de un servidor Apache se pueden configurar de la siguiente manera para excluir recursos estáticos y fuentes RSS:

 ```apacheconf
 SetEnvIf Request_URI "\.(ico|pdf|ﬂv|jpg|jpeg|png|gif| js|css|gz|swf|txt)$" dontlog
 SetEnvIf Request_URI "^/rss/" no registrar
 CustomLog /var/log/apache/access.log combinado env=!dontlog
 ```

 ### Regla de validación

 | El número de...                                     | es igual o menor que |
 |---------------......--------------------------------| :------------------: |
 | registra archivos sin un tiempo máximo de retención |           0          |
