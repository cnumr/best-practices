## Instalar el mínimo requerido en el servidor
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   74   | 89  | 91  |  	|

### Categorías

| Ciclo de vida | Partes | Responsable |
|:---------:|:----:|:----:|
| 4. Producción | Centro de datos | Administrador de sistemas |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 4 | 3 |

| Recursos ahorrados |
|:----------------------------------------------------------:|
| Procesador/ Memoria/ Almacenamiento  |

### Descripción

Desinstalar todos los servicios que no sean indispensables para el buen funcionamiento del sitio. Esta medida eliminará necesariamente los daemons (agentes y servicios que funcionan permanentemente en memoria), que son consumidores de recursos, en particular en ciclos de CPU y en memoria viva.

### Ejemplo

Privilegiar una instalación «manual» del servidor (LAMP + CMS, por ejemplo) en lugar de una distribución con una sobreimpresión de tipo cPanel o Plesk. Y si es necesaria una administración excesiva, preferir soluciones ligeras como Webmin.

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de servicios no necesarios para el funcionamiento del emplazamiento ejecutados en el sistema operativo  | 0 |


