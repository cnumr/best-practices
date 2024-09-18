## Adaptar los sonidos a los contextos de escucha

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   95    | 113 | 112 |     |     |

### Categorías

| Ciclo de vida |      Partes      | Responsable |
| :-----------: | :--------------: | :---------: |
|    5. Uso     | Usuario/Terminal |   Usuario   |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| :----------------: | :--------------------------------------: | :---------------: |
|         2          |                    2                     |         3         |

| Recursos ahorrados |
| :----------------: |
|        Red         |

### Descripción

Los archivos audio pueden ser grandes y consumir ancho de banda. Por lo tanto, es esencial optimizar su peso. Privilegiar 3 formatos que cubren las 3 grandes plataformas (Windows, Mac OS X y Linux):

- MP3 (MPEG-1 Audio Layer 3);
- AAC (Advanced Audio Coding);
- Vorbis.
  Estos formatos utilizan algoritmos de compresión muy avanzados que permiten un aumento significativo de peso.

### Ejemplo

Codificadores como LAME permiten convertir a MP3 archivos de audio sin comprimir, pero también reproducir en la tasa de muestreo, para ganar aún más peso, a expensas de la calidad de audio. Para probar en cada archivo de sonido.

En el caso de un archivo de referencia WAV son.wav de 63 128 bytes, su conversión a MP3 da:

- un fichero sonido-128.mp3 de 10 823 bytes (128 kb/s), 6 veces más ligero;
- un archivo de sonido-64.mp3 de 6 508 bytes (64 kb/s), 10 veces más ligero.

### Principio de validación

| El número ..                                                                                                                    | es inferior o igual a |
| ------------------------------------------------------------------------------------------------------------------------------- | :-------------------: |
| de códec de audio propietario (no libre) y de pistas de audio cuya relación peso en megabyte/duración en minuto es superior a 1 |           0           |
