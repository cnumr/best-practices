## Coloque todos los cachés en la RAM (código de operación y kvs)

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 85 | 90 | 92 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-------------:|:----------:|:------------ --:|
 | 4. Producción | Centro de datos | Administrador del sistema |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-------- ---------:|
 | 2 | 2 | 3 |

 | Recursos guardados |
 |:----------------------------------------------- ----------:|
 | Procesador/Almacenamiento |

 ### Descripción

 Los sistemas de almacenamiento en caché deben configurarse completamente en la memoria de acceso aleatorio (RAM) siempre que sea posible. Este método evita operaciones de entrada/salida en los discos duros y ciclos de CPU para gestionarlos.

Hay dos razones para hacerlo: entregar rápidamente respuestas al cliente y limitar la cantidad de componentes de hardware y software involucrados en la respuesta devuelta por el servidor.

La duración del uso de recursos es particularmente corta ya que la memoria de acceso aleatorio es muy rápida en términos de accesos de lectura/escritura. Además con este método se ampliará la vida útil de los componentes ya que no hay movimiento mecánico como cuando se utiliza un disco duro.

 ### Ejemplo

 Ejemplos de integración de caché RAM en Drupal:

 - integración de Memcache: https://drupal.org/project/memcache
 - integración de Varnish: https://drupal.org/project/varnish

 ### Regla de validación

 | El número de... | es igual o menor que |
 |-----------------------------------------------|:-------- ----------------:|
 | cachés que no están completamente configurados en la RAM | 0 |
