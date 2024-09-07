---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Adaptar la calidad del servicio y el nivel de disponibilidad
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3 | V4  |
|:-------:|:----:|:----:|:----:|
|  501	|  86 | 88  |  	|

### Categorías

| Ciclo de vida | Partes | Responsable |
|:---------:|:----:|:----:|
| 4. Producción | Centro de datos | Administrador de sistemas |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 2 | 4 |

|Recursos ahorrados |
|:----------------------------------------------------------:|
| Consumo de energía |

### Descripción

La calidad del servicio (QoS para Quality of Service) y el nivel de disponibilidad (SLA para Service Level Agreement) deben determinarse con los usuarios del sitio web o del servicio en línea. Por ejemplo, no es necesario alojar el servicio en un centro de datos de muy alta disponibilidad si los usuarios aceptan una tasa de disponibilidad inferior o igual al 99 % para un servicio no crítico. En efecto, a eficiencia energética equivalente, cuanto más disponible es el centro de datos que aloja el sitio o servicio en línea, mas alta es su huella medioambiental global, en particular porque todo es redundante y activo: dos cadenas de alimentación, dos líneas de producción y distribución de frío, etc.
Pudiéramos decir, hay que evitar la sobrecalidad. En cambio, es aconsejable aplicar una calidad de servicio en función de los recursos y la tasa de disponibilidad necesarios y suficientes.

### Ejemplo

A pesar de sus cientos de millones de usuarios, los gigantes de la Web no ofrecen un nivel de disponibilidad muy alto. Los datos se duplican en al menos otro servidor en otro centro de datos. Si un servidor falla, el usuario se enruta automáticamente al servidor de copia de seguridad. Esta acción puede tardar unos segundos, lo cual es bastante aceptable y casi imperceptible para el usuario final.

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| aumento del nivel de disponibilidad cuando el nivel actual es suficiente  | 0  |


