## Respetar el principio de navegación rápida en el historial (de navegación)
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   28   | 5  | 7 | |

### Categorías

| Ciclo de vida | Partes | Responsable  |
|:---------:|:----:|:----:|
| 2. Diseño | Usuario/Terminal | UX/UI Designer |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 4 | 3 |

|Recursos ahorrados |
|:----------------------------------------------------------:|
|Procesador/ Red   |

### Descripción

Los navegadores tienen una función de navegación rápida en el historial (botones Página anterior y Página siguiente), a menudo llamada _back-forward cache_ o _bfcache_.

Al contrario de la caché HTTP, que permite mantener en memoria las respuestas a las consultas realizadas previamente y entonces evitar generarlas varias veces inútilmente y acelerar la carga de páginas, la caché _bfcache_ permite conservar en memoria una página entera.
Sin embargo, dado que el uso de esta funcionalidad moviliza recursos de máquina adicionales del lado del usuario, hay que procurar aligerar al máximo las funcionalidades de las páginas almacenadas con el _bfcache_.
Por otra parte, el uso de _bfcache_ implica ciertas precauciones, especialmente cuando el tiempo de espera esta superado (_setTimeout_)
De hecho, como los navegadores suspenden la ejecución de los Timers en espera y las tareas en las colas de espera JavaScript, y reanudan el tratamiento de las tareas cuando la página se restaura desde el _bfcache_, puede haber situaciones problemáticas.

Por ejemplo, si el navegador suspende una tarea requerida como parte de una transacción de IndexedDB o el uso de API y otras pestañas (usando las mismas bases de datos de IndexedDB) están abiertas en ese momento, el navegador no almacenará en caché cada una des las páginas.

Por lo tanto, se debe evitar cualquier elemento que haga la página no elegible para el _bfcache_,
y/o que inutilizaría la página después de abandonarla
(o posiblemente volver a utilizarlos cuando la página se vuelva a utilizar, o justo antes de que se almacene en caché).

### Ejemplo

Evitar:
 - las acciones cuando se sale de la página (eventos `unload` o `beforeunload`, preferir `pagehide` si es realmente necesario)
 - los enlaces que abran nuevas fichas/ventanas sin `rel="noopener"` o `rel="noreferrer"`
 - dejar abiertas las conexiones (IndexedDB, `fetch()` o xmlhttprequest, Web Sockets, etc.) cuando el usuario sale de la página

Utilizar los eventos `pageshow` y/o `pagehide` para restablecer los elementos que lo requieran, por ejemplo, reactivar los botones de formulario que se desactivan durante el envío o eliminar información sensible (como contraseñas), o para cerrar/volver a abrir conexiones persistentes.

Fuente:
* https://web.dev/bfcache/ (contenido con licencia CC BY 4.0 - _Back/forward cache_ por Philip Walton)


### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de páginas no admisibles en el _bfcache_  | 0% |


