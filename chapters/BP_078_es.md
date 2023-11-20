## Comprimir archivos CSS Javascript HTML y SVG

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 86 | 80 | 78 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:-------:|:----------------------------:|
 | 3. Implementación | Red | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------: |:-----------------:|
 | 4 | 3 | 4 |

 | Recursos ahorrados |
 |:------------------:|
 |        Red         |

 ### Descripción

Comprime hojas de estilo CSS, bibliotecas JavaScript y archivos HTML para limitar el uso de ancho de banda y mejorar el tiempo de carga. 
El algoritmo GZIP es un estándar de compresión del lado del servidor que comprime los recursos sobre la marcha antes de enviarlos a los clientes. 
Más recientemente, BROTLI ha ganado popularidad gracias a su mayor rendimiento, y actualmente es compatible con los principales navegadores web.
 
### Ejemplo

Para utilizar BROTLI en Apache, basta con añadir la siguiente configuración:

 ```
 # comprimir html texto xml css javascript
 AddOutputFilterByType BROTLI_COMPRESS texto/texto html/texto sin formato/texto xml/texto css/aplicación javascript/javascript

 # O comprimir ciertos tipos de archivos en un directorio específico:
 <Directorio "/tu-directorio">
 AddOutputFilterByType BROTLI_COMPRESS texto/html
 </Directorio>
 ```

El servidor web NGINX gestiona la compresión GZIP por defecto, pero sólo para archivos HTML.
Para habilitarla para imágenes y otros recursos, puede consultar esta página: https://www.digitalocean.com/community/tutorials/how-to-improve-website-performance-using-gzip-and-nginx-on-ubuntu-20-04.

 Para instalar y configurar BROTLI en NGINX consulte https://github.com/google/ngx_brotli.
 ### Regla de validación

 | El número de... | es igual o menor que |
 |---------------------------------------------------|:------------------------:|
 | archivos CSS JavaScript HTML y SVG sin comprimir | 0 |
