## Externalizar CSS y JavaScript
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
| 7 | 16 | 32 | |

### Categorías

| Ciclo de vida | Partes | Responsable  |
|:---------:|:----:|:----:|
| 3. Realización (fabricación/ desarrollo) | Red | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|-------------------|:-------------------------:|:---------------------:|
| 4 | 4 | 4 |

|Recursos ahorrados |
|:----------------------------------------------------------:|
| Red  |

### Descripción

Asegúrese de que los códigos CSS y JavaScript no estén incrustados en el código HTML de la página, excepto en el caso de variables de configuración de objetos JavaScript.

De hecho, si incluye código CSS o JavaScript en el cuerpo del archivo HTML, que es utilizado por varias páginas (o incluso todo el sitio) este código debe ser transferido para cada página solicitada por el internauta, lo que aumenta el volumen de datos transmitidos.
En cambio, si los códigos CSS y JavaScript se incluyen en sus propios archivos, el navegador puede almacenarlos en su sistema de caché local para no volver a solicitarlos.

### Ejemplo

En el código HTML, no escribir:
```html
<style type="text/css" media="screen">
	p { color: #333; margin: 2px 0 }
	/* Todas las declaraciones CSS del sitio */
</style>
```

sino más bien:
```html
<link href="css/styles.css" rel="stylesheet">
```

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| URL que incorporan una cantidad y/ o número significativo de código CSS/ Javascript (inline)   | 2  |


