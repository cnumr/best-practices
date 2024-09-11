## Adaptar los vídeos a los contextos de visualización

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  |
| :-----: | :-: | :-: | :-: |
|   92    | 115 | 114 | 107 |

### Categorías

| Ciclo de vida |      Partes      | Responsable |
| :-----------: | :--------------: | :---------: |
|    5. Uso     | Usuario/Terminal |   Usuario   |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| :----------------: | :--------------------------------------: | :---------------: |
|         3          |                    2                     |         3         |

| Recursos ahorrados |
| :----------------: |
|  Procesador/ Red   |

### Descripción

Prever varios formatos (tamaño, velocidad de fotograma, compresión de audio, etc.) según el contexto de reproducción de los vídeos (ordenador de escritorio, tableta Wi-Fi, smartphone EDGE. ).

La optimización de los vídeos debe realizarse fuera del sitio web, idealmente durante la postproducción. Si esto no es posible, utilizar servicios como Youtube o Vimeo que ofrecen, por defecto, múltiples formatos optimizados (SD, HD, etc).

### Ejemplo

Una ayuda de usuario en 1 680 x 1 050, con una duración de 15 segundos, pesa:

- 49 MB no optimizada;
- 3 MB optimizada para una resolución igual o superior a 1.024 x 720 en MPEG 4/ H.264/ AAC;
- 1,2 MB optimizada para una resolución igual o superior a 480 x 320 en MPEG 4/ H.264/ AAC.

Por lo tanto, se puede estimar un ahorro de al menos el 50 % del peso (y probablemente de las ganancias durante la decodificación, ya que el formato de codificación tiene en cuenta los materiales de destino) entre la versión «desktop» y la versión «móvil» del vídeo.

Con 3 tamaños diferentes 3 codificaciones diferentes, es decir, 9 versiones de un mismo vídeo, la mayoría de los casos deben ser cubiertos. Con una lógica de diseño sensible, es posible servir tal o cual vídeo en función de reglas simples como resolución de pantalla.

### Principio de validación

| El número ..                                                                                                           | es inferior o igual a |
| ---------------------------------------------------------------------------------------------------------------------- | :-------------------: |
| de vídeos con una definición de 1080p o mas visualizados en el sitio web cuando el terminal detectado es un smartphone |           0           |
