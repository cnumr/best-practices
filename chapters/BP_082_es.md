## Optimizar el tamaño de las cookies

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 65 | 82 | 82 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:-------:|:----------------- -----------:|
 | 3. Implementación | Red | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------: |:-----------------:|
 | 3 | 4 | 3 |

 | Recursos guardados |
 |:----------------------------------------------- ----------:|
 | Red |

 ### Descripción

Las cookies permiten tener un estado compartido entre el navegador del usuario y el servidor web remoto gracias a los datos compartidos.
 Estos datos se envían con cada solicitud HTTP. Por tanto es necesario optimizar al máximo el tamaño de la cookie.
 y eliminarlo tan pronto como ya no sea necesario.

 ### Ejemplo

 Es posible eliminar las cookies que ya no son necesarias especificando una duración de caducidad nula o negativa de la siguiente manera:
 ```
 Establecer cookie: user_mavariable=; Edad máxima = 0
 ```
 Consulte RFC 6265 del IETF (Internet Engineering Task Force) para obtener más información relacionada con las cookies:
 https://datatracker.ietf.org/doc/html/rfc6265

 ### Regla de validación

 | El número de... | es igual o menor que |
 |--------------------------------|:-------------- ----------:|
 | cookies inútiles o no optimizadas | 0 |