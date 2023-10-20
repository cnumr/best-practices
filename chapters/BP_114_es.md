## Adaptar vídeos a contextos de visualización

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 | :-----: | :-: | :-: | :-: |
 | 92 | 115 | 114 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 | :--------: | :---------: | :---------: |
 | 5. Uso | Usuario/Dispositivo | Usuario |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 | :------: | :----------------------: | :-----------------------: |
 | 3 | 2 | 3 |

 | Recursos guardados |
 | :-----------------: |
 | Procesador/Red |

 ### Descripción

 Proporcione varios formatos (tamaño velocidad de fotogramas compresión de audio etc.) según el contexto de visualización del vídeo (escritorio tableta Wi-Fi teléfono inteligente EDGE).

La optimización del vídeo debe realizarse fuera del sitio web idealmente durante la postproducción. Si no es posible utiliza servicios como YouTube o Vimeo ya que ofrecen varios formatos optimizados (SD HD etc.) por defecto.

 ### Ejemplo

 Una guía del usuario de 15 segundos filmada con una resolución de 1680 x 1050 pesa:

 - 49 MB cuando no está optimizado;
 - 3 MB cuando está optimizado para una resolución igual o superior a 1.024 x 720 en MPEG 4/H.264/AAC;
 - 12 MB cuando está optimizado para una resolución igual o superior a 480 x 320 en MPEG 4/H.264/AAC.

Se puede estimar que hay al menos un aumento de tamaño del 50% (y probablemente ahorros durante la decodificación ya que el formato de codificación tiene en cuenta el hardware específico) entre las versiones de video "de escritorio" y "móviles".

La mayoría de los casos deben cubrirse con 3 tamaños diferentes x 3 codificaciones diferentes es decir 9 versiones del mismo vídeo. Es posible entregar el archivo correcto con reglas simples como la resolución de pantalla con una lógica de diseño responsiva.

 ### Regla de validación

 | El número de... | es igual o menor que |
 | -------------------------------------------------- -------------------------------------------------- -- | :----------------------: |
 | vídeos con una definición de 1080p o superior mostrados en el sitio web cuando el dispositivo es un teléfono inteligente | 0 |
