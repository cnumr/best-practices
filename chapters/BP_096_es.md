## Mostrar páginas de error estáticas

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   46    | 98  | 96  |     |     |

### Categorías

| Ciclo de vida | Partes |            Responsable            |
| :-----------: | :----: | :-------------------------------: |
|   2. Diseño   |  Red   | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| :----------------: | :--------------------------------------: | :---------------: |
|         3          |                    3                     |         3         |

|      Recursos ahorrados       |
| :---------------------------: |
| CPU/ RAM/ Red/ Almacenamiento |

### Descripción

Las páginas de errores (40x, 50x) deben ser lo más ligeras posible, e incluso idealmente inexistentes. De hecho, cuando el navegador solicita un recurso que no existe (imagen, hoja de estilos CSS, archivo JavaScript, etc.) o el servidor devuelve un error, la página de error devuelta puede ser más pesada que el recurso o la página solicitada.

Además, algunos CMS ejecutan su rutina de búsqueda de contenido (en la base de datos) para intentar encontrar un recurso solicitado. Por lo tanto, se ejecuta código de servidor, se solicita el servidor de base de datos, y se ejecuta la generación dinámica de la página HTML. Todo este proceso produce un desperdicio de ciclos de CPU, memoria RAM y ancho de banda.

### Ejemplo

Evitar las páginas 404 dinámicas, que se personalizan en función del contenido de la URL. Preferir una página 404 estática.

### Principio de validación

| El número ..                     | es inferior o igual a |
| -------------------------------- | :-------------------: |
| de páginas dinámicas de error; 0 |
