## Optimizar imágenes

 ### Identificadores
 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:----:|:----:|
 | 21 | 76 | 80 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:-----------:|:-----------:|
 | 3. Implementación | Usuario/Dispositivo | Usuario |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------: |:-----------------:|
 | 4 | 3 | 4 |

 | Recursos ahorrados |
 |:---------------------------------------------------------:|
 | Red / Solicitudes / Almacenamiento |

 ### Descripción

Las imágenes suelen representar la mayor parte de los bytes descargados, justo después de los vídeos
y justo antes de las bibliotecas CSS y JavaScript. Optimizar las imágenes es importante para reducir el ancho de banda utilizado. 
El primer paso es elegir el formato ideal para sus necesidades de visualización.


Las imágenes rasterizadas deben reservarse para fotos y elementos de la interfaz que no puedan mostrarse con iconos o estilos CSS.

El formato adecuado depende de las propiedades de la imagen: blanco y negro o color, paleta de colores, necesidad de transparencia.
Entre estas propiedades, la posibilidad de alterar irremediablemente la calidad de la imagen (compresión con pérdida) 
tiende a favorecer formatos como JPEG, JPEG XL, AVIF o WebP, mientras que la necesidad de transparencia y/o 
la imposibilidad de alterar la calidad de la imagen (compresión sin pérdida) tenderá a favorecer los formatos sin pérdida PNG o WebP (que admite transparencia).

El formato influye de forma importante en el tamaño de las imágenes: por término medio,
las imágenes .webp serán un 30% más ligeras que las imágenes .jpeg o .png. 
Las imágenes .avif pueden ser hasta un 20% más ligeras que las imágenes .webp y un 50% más ligeras que las imágenes .jepg.

No olvides prestar atención a la compatibilidad de los navegadores. Las imágenes .webp no serán reconocidas 
por los navegadores antiguos y no se mostrarán. Es posible proporcionar varios formatos para la misma imagen para superar este problema. 
Algunos módulos del lado del servidor (como modPageSpeed de Google, también disponible para Apache y Nginx) permiten incluso proporcionar 
la imagen adecuada para el navegador que llama al servidor.

Muchas herramientas le ayudarán a minimizar el tamaño de las imágenes:

 - SQUOOSH
 - NUBLADO
 - ImagenMagick
 -PngCrush
 - JpegTran

 ### Ejemplo

En este ejemplo, el elemento DOM informa al navegador de que hay dos imágenes: una imagen .webp y una imagen .jpg, 
que se utiliza por defecto. El navegador decidirá qué imagen se descargará. Si el formato .webp es compatible, 
se descargará la imagen image.webp; en caso contrario, se descargará la imagen image.jpg.

 ```html
 <imagen>
 <fuente srcset="image.webp" tipo="image/webp">
 <img src="image.jpg" alt="..." cargando="perezoso">
 </imagen>
 ```

 Para llegar más lejos :
 - https://web.dev/choose-the-right-image-format/
 - https://www.fasterize.com/fr/blog/webp-avif-compresser-images/

 ### Regla de validación

 | El número de... | es igual o menor que |
 |----------------------|:------------------------ :|
 | imágenes no optimizadas | 0 |
