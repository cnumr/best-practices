## Optimizar las imágenes
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores
| GreenIT | V2  | V3 | V4  |
|:-------:|:----:|:----:|:----:|
|  21   | 76   | 80   | |

### Categorías

| Ciclo de vida | Partes | Responsable |
|:---------:|:----:|:----:|
| 3. Realización (fabricación/desarrollo) | Usuario/Terminal | Usuario |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

| Recursos ahorrados |
|:----------------------------------------------------------:|
| Red/ Consultas /  Almacenamiento |

### Descripción
Las imágenes a menudo representan la mayoría de los bytes descargados, después de los videos y justo antes de las bibliotecas CSS y JavaScript.
Por lo tanto, su optimización es crucial para reducir el ancho de banda consumido. El primer paso es elegir el formato ideal a sus necesidades de presentación.

Las imágenes matriciales deben reservarse esencialmente a las fotos y a los elementos de la interfaz que no pueden ser reemplazados por iconos o estilos CSS.

La elección del formato depende de las características de la imagen: blanco y negro o color, paleta de colores, necesidad de transparencia... Entre estas características, el hecho de poder degradar la imagen definitivamente (lossy) orienta más bien a los formatos `JPEG`, `JPEG XL`, `AVIF` o `webp`, mientras que una necesidad de transparencia y/o la imposibilidad de degradar la imagen (Lossless) orientará más bien hacia un formato `PNG` o `webp Lossless` (que soporta la transparencia).

El peso de las imágenes se ve muy afectado por el formato que va a elegir: en promedio.
Una imagen `.webp` será 30% más ligera que una imagen `.jpeg` o una imagen `.png`.
Una imagen `.avif` será hasta un 20% más ligera que una imagen `.webp` y un 50% más ligera que una imagen `.jepg`.

No olvide prestar atención a la compatibilidad de estos formatos de imagen en los navegadores. Una imagen `.webp` no será reconocido por un navegador antiguo, y no se mostrará. Para paliar este problema, es posible proporcionar al navegador varios formatos para la misma imagen.
Algunos módulos de servidor (como [modPageSpeed](https://www.modpagespeed.com/) de google, disponible para Apache y NGINX) permiten incluso proporcionar la imagen ideal en relación con el navegador que llama al servidor.

Muchas herramientas le ayudarán a minimizar el peso de las imágenes:
 - [SQUOOSH](https://squoosh.app)
 - [CLOUDINARY](https:///webspeedtest.cloudinary.com/)
 - [ImageMagick](https://imagemagick.org/)
 - [PngCrush](https://pmt.sourceforge.io/pngcrush/)
 - JpegTran

### Ejemplo
En este ejemplo, el elemento `<picture>` del DOM indica al navegador que hay dos imágenes: una imagen `.webp` y una imagen `. jpg`, la predeterminada. El navegador decidirá qué imagen subir, si soporta el formato `.webp` descargará la imagen `image.webp` si no, descargará la imagen `image.jpg`

```html
<picture>
	<source srcset="image.webp" type="image/webp">
	<img src="image.jpg" alt="..." loading="lazy">
</picture>
```

Para ir más lejos:
 - https://web.dev/choose-theright-image-format/
 - https://www.fasterize.com/fr/blog/webp-avif-compresión/

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de imágenes no optimizadas  | 0  |


