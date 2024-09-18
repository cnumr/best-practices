## No cambiar el tamaño de las imágenes en el navegador

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   93    | 20  | 34  |     |     |

### Categorías

|              Ciclo de vida              |      Partes      | Responsable |
| :-------------------------------------: | :--------------: | :---------: |
| 3. Realización (fabricación/desarrollo) | Usuario/Terminal |   Usuario   |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| ------------------ | :--------------------------------------: | :---------------: |
| 4                  |                    4                     |         4         |

| Recursos Economizados |
| :-------------------: |
|    Procesador/ Red    |

### Descripción

No cambie el tamaño de las imágenes usando los atributos HEIGHT y WIDTH en el código HTML. Este enfoque requiere que las imágenes se transfieran a su tamaño original, desperdiciando el ancho de banda y ciclos de CPU.

### Ejemplo

Una imagen de 350 x 300 píxeles codificada en PNG 24 pesa 41 KB. Redimensionada en HTML, la misma imagen mostrada en miniatura a 70 x 60 píxeles sigue pesando 41 KB, ¡mientras que no debería superar los 3 KB! 38 KB descargados cada vez para nada... Nota: El redimensionamiento realizado por el navegador también puede tener un efecto píxel en la visualización final de la imagen.

La mejor solución es generar las imágenes en el tamaño al que se visualizan. Ya sea que lo haga manualmente usando un editor de imágenes, o el CMS tiene una rutina automática que generará las imágenes en el tamaño donde se llaman en la plantilla.

### Principio de validación

| El número ..                                | es inferior o igual a |
| ------------------------------------------- | :-------------------: |
| de imágenes redimensionadas en el navegador |           0           |
