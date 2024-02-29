## Utilizar carga lenta

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:--------:|:-----:|:-----:|:-----:|
 | 1010 | | 37 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:-------:|:--------------:|
 | 3. Implementación | Red | Diseñador UX/UI |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:---------:|:-------------------------:|:-----------------:|
 | 4 | 4 | 5 |

 | Recursos ahorrados |
 |:---------------------------------------------------------:|
 | Procesador/Red |

 ### Descripción

Por defecto, todos los recursos (imágenes, vídeos, iframes, etc.) de una página web se descargan, incluso cuando 
los usuarios no los visualizan, por ejemplo si están fuera de la ventana gráfica. Para evitarlo, se puede utilizar la
técnica de lazy loading: los elementos con este atributo sólo se cargarán cuando sean visibles en la pantalla.

Es posible añadir un atributo `loading` a las imágenes e iframes en HTML para que el navegador sólo descargue las imágenes
que se muestren en la pantalla. Sin embargo, este atributo es muy reciente: no funcionará en versiones anteriores del navegador.
En aras de una mayor compatibilidad, aún es posible utilizar minibibliotecas Javascript muy ligeras que puedan manejar
imágenes de carga lenta, como por ejemplo:
 - LOZAD(https://cdn.jsdelivr.net/npm/lozad) 19 KB (gzip)
 - vainilla-lazyload(https://cdn.jsdelivr.net/npm/vanilla-lazyload/dist/lazyload.min.js) 35 KB (gzip)

 ### Ejemplo

En este ejemplo, la imagen y el iframe serán cargados automáticamente por el navegador. Si es necesario mostrar una imagen en
en la pantalla, se descargará y se mostrará. En caso contrario, no se descargará.

 ```html
 <img src="image.jpg" alt="..." cargando="perezoso">
 <iframe src="video-player.html" title="..." cargando="lazy"></iframe>
 ```

 Ver también :
 - https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading
 - https://web.dev/browser-level-image-lazy-loading/
 - https://web.dev/lazy-loading-video/

 ### Regla de validación

 | El número de... | es igual o inferior a |
 |-------------------------------------------------------------------------------------------------------|:--------------------:|
 | imágenes, iframes y vídeos llamados sin atributo lazy loading y por debajo del viewport inicial es |          0           |
