## Codificar sonidos fuera del CMS

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   96    | 60  | 60  |     |     |

### Categorías

| Ciclo de vida |      Partes      | Responsable |
| :-----------: | :--------------: | :---------: |
|    5. Uso     | Usuario/Terminal |   Usuario   |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| :----------------: | :--------------------------------------: | :---------------: |
|         4          |                    4                     |         4         |

|            Recursos ahorrados            |
| :--------------------------------------: |
| Procesador/ Memoria/ Red/ Almacenamiento |

### Descripción

Adaptar y optimizar los sonidos fuera del sitio web. Esta medida ahorra mucho ancho de banda y aliviará la CPU y la memoria RAM, ya que un servidor web no está optimizado para la (re)codificación de archivos de audio.

### Ejemplo

Si el sonido añadido directamente en el CMS pesa 7 MB, se ahorrará:

- 7 MB de ancho de banda durante el envío;
- 100 KB al escuchar el resultado;
- 6,9 MB de almacenamiento en el disco duro del servidor.

### Principio de validación

| El número ..                                              | es inferior o igual a |
| --------------------------------------------------------- | :-------------------: |
| de archivos de sonido codificados directamente por el CMS |           0           |
