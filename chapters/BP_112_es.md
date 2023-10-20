## Adaptar los formatos de audio a los contextos de escucha

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 | :-----: | :-: | :-: | :-: |
 | 95 | 113 | 112 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 | :--------: | :---------: | :---------: |
 | 5. Uso | Usuario/Dispositivo | Usuario |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 | :------: | :----------------------: | :-----------------------: |
 | 2 | 2 | 3 |

 | Recursos guardados |
 | :-------------: |
 | Red |

 ### Descripción

 Los archivos de audio pueden ser grandes y utilizar mucho ancho de banda. Optimizar su tamaño es fundamental. Cuando sea posible utilice estos 3 formatos disponibles en los 3 sistemas operativos principales (Windows MacOS y Linux):

 - MP3 (MPEG-1 Audio Capa 3);
 - AAC (codificación de audio avanzada);
 - Vorbis. Estos formatos de audio utilizan algoritmos de compresión muy avanzados lo que reduce considerablemente el tamaño del archivo de audio.

 ### Ejemplo

Los codificadores como LAME permiten la conversión de archivos de audio sin comprimir a MP3 pero también la alteración de la frecuencia de muestreo para optimizar el tamaño del archivo de audio a expensas de la calidad del audio. Pruebe en cada archivo de sonido de audio.

 En el caso de una plantilla de archivo WAV sound.wav de 63128 bytes la conversión a MP3 daría como resultado:

 - Archivo sonido 6 veces más ligero: 128.mp3 de 10.823 bytes (128 kb/s);
 - Archivo de sonido 64.mp3 10 veces más ligero de 6.508 bytes (64 kb/s).

 ### Regla de validación

 | El número de... | es igual o menor que |
 | -------------------------------------------------- -------------------------------------------------- -------------- | :----------------------: |
 | códecs de audio propietarios (no libres) y pistas de audio cuya relación peso/duración minuto en megabytes sea superior a 1 | 0 |
