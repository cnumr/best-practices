## Prefiero páginas web estáticas

### Identificadores

| GreenIT | V2  | V3  | V4  |
|:-------:|:---:|:---:|:---:|
| 3       | 51  | 13  |     |

### Categorías

| Ciclo de vida | Niveles             | Responsable                | 
|:-------------:|:-------------------:|:--------------------------:|
| 2. Diseño     | Usuario/Dispositivo | Arquitecto / Desarrollador |

### Indicaciones

| Prioridad | Dificultad de implementación | Impacto ecológico |
|:---------:|:----------------------------:|:-----------------:|
| 4         | 3                            | 5                 |

| Recursos ahorrados |
|:------------------:|
| Procesador/RAM     |

### Descripción

Si una página sólo se modifica dos veces al año, no hay necesidad de un CMS: las páginas estáticas están bien. Al mantenerse en páginas estáticas permitirá ahorrar CPU, ancho de banda, energía, etc.

Un CMS normalmente requiere varias capas de software para mostrar el contenido: servidor HTTP, servidor de aplicaciones (el propio CMS) y base de datos, con sistemas de caché opcionales. El servidor HTTP del sistema de archivos proporciona directamente una página estática al usuario. No es necesario un servidor de aplicaciones o base de datos.

### Ejemplo

Se pueden aplicar las siguientes soluciones dependiendo del servicio digital:

- Para una página de destino o un sitio de visualización simple, se puede crear una página estática escrita directamente en HTML, CSS (y opcionalmente JS).
- Para un blog con poca actividad, se puede utilizar una arquitectura JAMstack con un generador de contenidos como Jekyll, Hugo, Gasby o Eleventy. Si es necesario, se puede agregar un CMS headless o un CMS flat-file headless (Strapi, Contenful, Flextype, etc.).
- para aplicaciones web más complejas, algunas páginas con baja tasa de edición (Preguntas frecuentes, Acerca de, términos legales, ...) pueden hacerse estáticas.


### Regla de validación

| El número de...      | es igual o menor que |
|----------------------|:--------------------:|
| páginas dinámicas es | 25%                  |
