## Optimizar imágenes

 ### Identificadores
 | TI verde | V2 | V3 | V4 |
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
 |:----------------------------------------------- ----------:|
 | Red / Solicitudes / Almacenamiento |

 ### Descripción

Las imágenes suelen representar la mayoría de los bytes descargados justo después de los vídeos y justo antes de las bibliotecas CSS y JavaScript.
La optimización de las imágenes es importante para reducir el ancho de banda utilizado. El primer paso es elegir el formato ideal para tu
 necesidades de visualización.

 Las imágenes rasterizadas deben reservarse para fotografías y elementos de la interfaz que no se pueden mostrar con iconos o estilos CSS.

 El formato apropiado depende de las propiedades de la imagen: blanco y negro o color paleta de colores necesidad de transparencia...
 Entre estas propiedades la posibilidad de alterar irremediablemente la calidad de las imágenes (compresión con pérdida) tiende a favorecer formatos como JPEG JPEG XL
 AVIF o WebP aunque la necesidad de transparencia y/o la imposibilidad de alterar la calidad de la imagen (compresión sin pérdidas) tenderá a favorecer
 PNG o WebP sin pérdida (que admite transparencia).

El formato afecta de manera importante el tamaño de las imágenes: en promedio las imágenes .webp serán un 30 % más livianas que las .jpeg.
 imágenes o imágenes .png. Las imágenes .avif pueden ser hasta un 20% más claras que las imágenes .webp y un 50% más claras que las imágenes .jepg.

No olvide prestar atención a la compatibilidad del navegador. Las imágenes .webp no serán reconocidas por
 navegadores antiguos y no se mostrarán. Es posible proporcionar varios formatos para una misma imagen.
 para superar este problema. Algunos módulos del lado del servidor (como modPageSpeed ​​de Google también disponible para Apache
y Nginx) incluso le permiten proporcionar la imagen adecuada para el navegador que llama al servidor.

Muchas herramientas te ayudarán a minimizar el tamaño de las imágenes:

 - SQUOOSH
 - NUBLADO
 - ImagenMagick
 -PngCrush
 - JpegTran

 ### Ejemplo

 En este ejemplo el elemento DOM <picture> informa al navegador que hay dos imágenes: una imagen .webp y una
 imagen .jpg que se utiliza de forma predeterminada. El navegador decidirá qué imagen se descargará. Si el formato .webp
 es compatible se descargará la imagen image.webp; de lo contrario se descargará la imagen image.jpg.

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
