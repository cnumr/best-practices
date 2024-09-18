## Cuantificar con precisión la necesidad

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   110   |  2  |  2  |     |     |

### Categorías

|   Ciclo de vida   |      Partes      | Responsable |
| :---------------: | :--------------: | ----------- |
| 1. Especificación | Usuario/Terminal | PO/AMOA     |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | impacto ecológico |
| :----------------: | :--------------------------------------: | :---------------: |
|         5          |                    4                     |         5         |

|                    Recursos ahorrados                    |
| :------------------------------------------------------: |
| Procesador/ Memoria RAM / Almacenamiento/ Red/ Consultas |

### Descripción

Las «dimensiones» de cada funcionalidad deben definirse con precisión y en su conjunto. Pueden ser un coeficiente de compresión para las imágenes de la interfaz gráfica, el tiempo de respuesta máximo para una petición HTTP, el número de elementos mostrados en una lista, etc.

Cuanto más se ajusten al negocio las «dimensiones» y los requisitos asociados a cada funcionalidad, más se evita el exceso de calidad.
Por lo tanto, la lógica debe invertirse con respecto a los hábitos actuales. A falta de precisión, se propone el nivel de calidad o la cantidad mínima. Por ejemplo, si no se especifica, el número de elementos de una lista está limitado a 5 elementos o al número máximo que se muestra en la pantalla de destino más pequeña de la aplicación.

Los valores predeterminados, que el usuario rara vez modifica, deben elegirse para satisfacer la necesidad con un impacto mínimo.

### Ejemplo

Beneficio potencial: jugando con el número de elementos que aparecen en la página de resultados de su motor de búsqueda Bing,
Microsoft Research ha demostrado que es posible reducir hasta un 80 % la infraestructura física (número de servidores) subyacente.

Otro ejemplo: usando una resolución de vídeo aceptable (480p) por defecto en lugar de máxima, se reduce el ancho de banda utilizado para la mayoría de los usuarios (que no cambiarán el valor predeterminado), dejando la posibilidad a otros aumentar la resolución si es necesario.

### Principio de validación

| El número ..                                                    | es igual a |
| --------------------------------------------------------------- | :--------: |
| de funcionalidades con dimensiones superiores a las requeridas. |     0      |
