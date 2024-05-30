## Limitar el número de dominios que sirven a los recursos
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   170   | 55  | 18  | |

### Categorías

| Ciclo de vida | Partes | Responsable  |
|:---------:|:----:|:----:|
| 4. Producción | Red | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 3 | 4 |

|Recursos Economizados   |
|:----------------------------------------------------------:|
| Consultas  |

### Descripción

Cuando un sitio web o servicio en línea aloja los componentes de una página web en varios dominios, el navegador debe establecer una conexión HTTP con cada uno de estos dominios. Una vez recuperada la página HTML, el navegador llama los recursos mientras recorre el DOM (Document Object Model).
Algunos recursos son indispensables para el funcionamiento de la página. Si están alojados en otro dominio poco reactivo, esto puede alargar el tiempo de espera antes de que la página esté en funcionamiento. En la medida de lo posible, es necesario agrupar todos los recursos en un mismo dominio.

La única excepción a esta regla es alojar los recursos estáticos (hojas de estilo, imágenes, etc.) en un dominio distinto,
para evitar tener que llevar una o más cookies a cada GET HTTP del navegador. Se reduce el tiempo de respuesta y el ancho de banda consumido sin necesidad.

### Ejemplo

Para un sitio web institucional de alto tráfico, se dará prioridad a dos subdominios:
 - el servidor de aplicaciones en www.dominio.tld;
 - el servidor multimedia «cookie-less» en media.dominio.tld.

Esto limita el número de dominios y evita el envío innecesario de una cookie por cada GET HTTP en un recurso estático.


### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| El número de dominios que sirven a los recursos   | 5 |


