## Usar carga diferida

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:--------:|:-----:|:-----:|:-----:|
 | 1010 | | 37 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:-------:|:--------------:|
 | 3. Implementación | Red | Diseñador UX/UI |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:---------:|:-------------------------:|:------- ----------:|
 | 4 | 4 | 5 |

 | Recursos guardados |
 |:----------------------------------------------- ----------:|
 | Procesador/Red |

 ### Descripción

 De forma predeterminada todos los recursos (imágenes videos iframes etc.) de una página web se descargan incluso cuando los usuarios no los muestran por ejemplo si están fuera de la ventana gráfica. Para evitar esto se puede utilizar la técnica de carga diferida: los elementos con este atributo se cargarán sólo cuando sean visibles en la pantalla.

Es posible agregar un atributo de "carga" a las imágenes y iframes en HTML para que el navegador solo descargue imágenes.
 que se muestran en la pantalla. Sin embargo este atributo es muy reciente: no funcionará en versiones anteriores del navegador.
 Para mejorar la compatibilidad todavía es posible utilizar minibibliotecas de Javascript muy ligeras que puedan manejar
 imágenes de carga diferida como:
 - LOZAD(https://cdn.jsdelivr.net/npm/lozad) 19 KB (gzip)
 - vainilla-lazyload(https://cdn.jsdelivr.net/npm/vanilla-lazyload/dist/lazyload.min.js) 35 KB (gzip)

 ### Ejemplo

En este ejemplo el navegador cargará automáticamente la imagen y el iframe de forma diferida. Si se debe mostrar una imagen en
 la pantalla se descargará y mostrará. De lo contrario no se descargará.

 ```html
 <img src="image.jpg" alt="..." cargando="perezoso">
 <iframe src="video-player.html" title="..." cargando="lazy"></iframe>
 ```

 Ver también :
 - https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading
 - https://web.dev/browser-level-image-lazy-loading/
 - https://web.dev/lazy-loading-video/

 ### Regla de validación

 | El número de... | es igual o menor que |
 |------------------------------------------------ -------------------------------------------------- -----|:------------------------:|
 | imágenes iframes y videos llamados sin un atributo de carga diferida y debajo de la ventana gráfica inicial está | 0 |
