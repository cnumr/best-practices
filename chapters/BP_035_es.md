## Evitar el uso de imágenes rasterizadas para la interfaz

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 161 | 21 | 35 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:----------:|:-----------:|:-----------:|
 | 5. Uso | Usuario/Dispositivo | Usuario |

 ### Indicaciones

 | Prioridad | Dificultad de aplicación | Impacto ecológico |
 |:--------:|:-------------------------:|:-----------------:|
 | 4 | 4 | 4 |

 | Recursos ahorrados |
 |:---------------:|
 | Red |

 ### Descripción

Elegir el formato de imagen más adecuado es esencial para ahorrar ancho de banda.

Además, con el creciente número de dispositivos y tamaños de pantalla, y el aumento de las 
resoluciones de pantalla, hay que favorecer los enfoques basados en vectores frente a las 
imágenes rasterizadas. Con este enfoque, la interfaz estará desvinculada de la resolución 
de pantalla, lo que limitará la deuda técnica. La primera regla es sustituir las imágenes 
de trama (GIF, PNG, JPEG, WebP, etc.) por estilos (CSS), pictogramas, glifos o iconos proporcionados 
por fuentes web o fuentes estándar (ya instaladas en los dispositivos de los usuarios). 
Esto no requiere descargar ningún recurso adicional. Si no es posible utilizar CSS o fuentes 
estándar también puedes.

 - utilizar fuentes web
 - utilice una imagen vectorial en formato SVG estándar


 ### Ejemplo


 !img.png(img.png)

 Este tamaño de imagen de 198 × 198 píxeles es:
 - 118 KB en formato rasterizado sin comprimir.
 - 65 KB en formato JPEG (compresión del 90%).
 - 38 KB en formato PNG.
 - 0,7 KB en SVG minificado.

En este caso concreto, el formato vectorial es entre 5 y 10 veces más 
ligero que el formato rasterizado, a la vez que se puede redimensionar infinitamente.
 ### Regla de validación

 | El número de...                           | es igual o inferior a |
 |-------------------------------------------|:------------------:|
 | Imágenes rasterizadas para la URL probada |         5          |
