## Respetar la caché Atrás/Adelante

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 28 | 5 | 7 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:----------:|:-------------:|:--------------:|
 | 2. Diseño | Usuario/Dispositivo | Diseñador UX/UI |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-------- ---------:|
 | 3 | 4 | 3 |

 | Ahorra recursos |
 |:-------------------:|
 | Procesador/Red |

 ### Descripción

 Los navegadores tienen una función de navegación rápida en el historial (botones de página anterior y página siguiente) llamada
 _caché de retroceso-adelante_ o _bfcache_.

 A diferencia del caché HTTP que permite conservar en la memoria las respuestas a las solicitudes enviadas anteriormente.
 y para acelerar la recarga de estas páginas la caché _bfcache_ permite al navegador almacenar una página completa en la memoria.
 Sin embargo como el uso de esta función requiere recursos adicionales de la máquina por parte del usuario es interesante reducir
 las funcionalidades de las páginas almacenadas con _bfcache_ tanto como sea posible. Además el uso de _bfcache_ implica
 cierta precaución especialmente cuando se excede el tiempo de espera (_setTimeout_).
 De hecho a medida que los navegadores suspenden la ejecución de temporizadores y tareas pendientes en colas de JavaScript y la reanudan cuando la página
 se restaura desde _bfcache_ puede haber situaciones problemáticas. Por ejemplo si el navegador suspende una tarea
 requerido como parte de una transacción de IndexedDB o uso de API y otras pestañas (que usan la misma base de datos de IndexedDB) están abiertas en
 esa vez el navegador no almacenará en caché páginas individuales.

 Cualquier elemento que haría que la página no fuera elegible para _bfcache_ y/o que la dejaría inutilizable después de salir
 debe evitarse.

 ### Ejemplo

 Evitar :
 - acciones activadas al salir de la página (eventos `descargar` o `antes de descargar` preferir `página oculta` si es realmente necesario)
 - enlaces que abren nuevas pestañas/ventanas sin `rel="noopener"` o `rel="noreferrer"`
 - dejar las conexiones (IndexedDB `fetch()` o XMLHttpRequest Web Sockets etc.) abiertas cuando el usuario abandona la página

 Utilice los eventos `pageshow` y/o `pagehide` para restablecer los elementos que lo requieran: p.e. volver a habilitar los botones del formulario que
 desactivar al enviar eliminar información confidencial (como contraseñas) o cerrar/reabrir conexiones persistentes.

 Fuente:
 * https://web.dev/bfcache/ (contenido bajo licencia CC BY 4.0 - _Caché atrás/adelante_ de Philip Walton)


 ### Regla de validación

 | El número de... | es igual o menor que |
 |-------------------------------|:--------------- ---------:|
 | páginas no elegibles para _bfcache_ | 0% |
