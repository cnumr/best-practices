## Usar servidores asincrónicos

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 77 | 94 | 97 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-------------:|:----------:|:------------ --:|
 | 4. Producción | Centro de datos | Administrador del sistema |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-------- ---------:|
 | 3 | 3 | 4 |

 | Recursos guardados |
 |:----------------------------------------------- ----------:|
 | Procesador/RAM |

 ### Descripción

 Los servidores (web aplicaciones etc.) como NGINX node.js o Gwan están diseñados para utilizar la menor cantidad de recursos posible. No tienen que crear un proceso o un hilo para cada solicitud gracias a su modo de operación asíncrono evitando el uso de recursos.

Si bien el consumo de RAM de la mayoría de los servidores web aumenta a medida que se realizan las solicitudes los servidores asíncronos permanecen muy estables.

 ### Ejemplo

 Se sabe que NGINX tiene más rendimiento que Apache. Puede atender 21 veces más solicitudes por segundo que este último.

 Para llegar más lejos:

 https://nbonvin.wordpress.com/2011/03/14/apache-vs-nginx-vs-varnish-vs-gwan
 https://nbonvin.wordpress.com/2011/03/24/serving-small-static-files-what-server-to-use


 ### Regla de validación

 | El número de... | es igual o menor que |
 |---------------------------------|:------------- -----------:|
 | servidores de aplicaciones síncronos | 1 |
