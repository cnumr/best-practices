## Usar la carga perezosa

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|  1010   |     | 37  |     |     |

### Categorías

|              Ciclo de vida               | Partes | Responsable     |
| :--------------------------------------: | :----: | --------------- |
| 3. Realización (fabricación/ desarrollo) |  Red   | Diseñador UX/UI |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| :----------------: | :--------------------------------------: | :---------------: |
|         4          |                    4                     |         5         |

| Recursos ahorrados |
| :----------------: |
|  Procesador/ Red   |

### Descripción

Cuando un internauta no consulta la totalidad de una página web, por defecto todos los recursos (imágenes, vídeos, iframes...) situadas fuera de la zona visitada, por debajo de la línea de flotación, se cargan innecesariamente. Para evitar esto, es posible utilizar la técnica de carga perezosa (Lazy loading) que consiste en cargar un elemento solamente cuando su ubicación sea visible en la pantalla.

En HTML, es posible añadir un atributo `loading` a sus imágenes e iframes para que el navegador se encargue de descargar solo las imágenes que aparecen en pantalla. Sin embargo, este atributo es muy reciente: no será tenido en cuenta en versiones anteriores de navegadores. No obstante, en aras de una mayor compatibilidad, se podrá utilizar minibibliotecas Javascript, muy ligeras, que se ocuparán de la carga perezosa de sus imágenes, como: - [LOZAD](https:///cdn.jsdelivr.net/npm/lozad) 1,9 KB (gzip)

### Ejemplo

En este ejemplo, la imagen y el iframe serán cargados de manera perezosa automáticamente por el navegador. Si la imagen debe aparecer en la pantalla, se descargará y se mostrará, y si está por debajo de la línea de flotación, no se descargará.

```html
<img src="image.jpg" alt="..." loading="Lazy" />
<iframe src="video-player.html" title="..." loading="Lazy"></iframe>
```

Para ir más lejos:

- https://developer.mozilla.org/en-US/Web/Performance/Lazy_loading
- https://web.dev/browser-level-image-lazy-loading/
- https://web.dev/lazy-loading-video/

### Principio de validación

| El número ..                                                                                       | es inferior o igual a |
| -------------------------------------------------------------------------------------------------- | :-------------------: |
| de imágenes, de iframes y de vídeos llamados sin Lazy loading, por debajo de la línea de flotación |          0%           |
