## Usar todos los niveles de caché del CMS
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2 | V3 | V4 |
|:-------:|:----:|:----:|:----:|
|   60   | 57  | 57  | |

### Categorías

| Ciclo de vida | Partes | Responsable |
|:---------:|:----:|:----:|
| 4. Producción | Centro de datos | Administrador de sistemas |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Recursos Economizados   |
|:----------------------------------------------------------:|
| Procesador/ RAM  |

### Descripción

Si el CMS (como Wordpress, Drupal, ez Publish...) propone un sistema de caché multinivel, utilizar estos diferentes niveles porque su granularidad permite reducir los recursos consumidos (ciclos CPU, memoria) y ofrecer un buen rendimiento al usuario.

### Ejemplo

Un CMS como WordPress no tiene nativamente un sistema de caché, pero hay varios plugins que suplen esta carencia, siendo los más conocidos:

- W3 total Cache
- Wp Super Cache
- Wp-rocket

Por lo tanto, con uno de estos plugins, las páginas se almacenan en caché en el servidor y ya no se generan para cada usuario. Por cierto, este tipo de herramienta también proporciona otras optimizaciones orientadas a WebPerf que van en el sentido del ecodiseño web.


### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de caché no activado | 0 |


