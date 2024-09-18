## Usar la recarga parcial de un área de contenido

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   40    | 49  | 38  |     |     |

### Categorías

|              Ciclo de vida               | Partes |   Responsable   |
| :--------------------------------------: | :----: | :-------------: |
| 3. Realización (fabricación/ desarrollo) |  Red   | Diseñador UX/UI |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| :----------------: | :--------------------------------------: | :---------------: |
|         4          |                    3                     |         4         |

|    Recursos ahorrados    |
| :----------------------: |
| Procesador/ Memoria/ Red |

### Descripción

Si su página web tiene una o más áreas de contenido que requieren una alta frecuencia de actualización, entonces le recomendamos que recargue solo estas áreas y no toda la página.
Para ello, puede utilizar varias técnicas de JavaScript comúnmente llamadas AJAX pero que también pueden utilizar un Service Worker, un Web Component o un desarrollo personalizado.

Incluso es posible omitir estas partes en la llamada HTTP de la página para hidratarla con estas áreas dinámicas en JavaScript, lo que algunos llaman "islas de componentes" o "arquitectura de islas". El interés es poder conservar una solución de caché para la página "container" y no recargar más que las "islas" de contenido que lo requieran.

### Ejemplo

Los sitios de noticias utilizan muy a menudo este procedimiento, que les permite identificar claramente las zonas que necesitan actualizarse rápidamente (noticias de última hora, datos meteorológicos, cotizaciones de la Bolsa, resultados deportivos, etc.).

### Principio de validación

| El número ..                                                               | es inferior o igual a |
| -------------------------------------------------------------------------- | :-------------------: |
| de zonas de contenido que pueden actualizarse parcialmente, pero no lo son |          0%           |
