## Adaptar la calidad del servicio y el nivel de disponibilidad

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 501 | 86 | 88 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-------------:|:----------:|:--------------:|
 | 4. Producción | Centro de datos | Administrador del sistema |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-----------------------------------:|:-----------------:|
 | 3 | 2 | 4 |

 | Recursos ahorrados |
 |:---------------------------------------------------------:|
 | Consumo de energía |

 ### Descripción

La calidad del servicio (QoS) y el acuerdo de nivel de servicio (SLA) deben determinarse con los usuarios del servicio digital. 
Por ejemplo, es innecesario alojar servicios en un centro de datos de muy alta disponibilidad (Tier IV) 
si los usuarios aceptan una tasa de disponibilidad inferior o igual al 99% para un servicio no crítico. Con una eficiencia energética equivalente, 
cuanto mayor sea la disponibilidad del centro de datos que aloja el sitio web o el servicio en línea, mayor será su huella medioambiental global.
Sobre todo porque todo es redundante y activo: dos cadenas de alimentación eléctrica, dos cadenas de producción y distribución de frío, etc. 
Es esencial evitar la sobrecualificación. En su lugar, se recomienda aplicar una calidad de servicio basada en el nivel de disponibilidad suficiente.

 ### Ejemplo

A pesar de tener cientos de millones de usuarios, los gigantes de la Web no ofrecen un nivel de disponibilidad muy alto de tipo Tier IV.
Los datos están redundados en al menos otro servidor en otro centro de datos. Si falla un servidor,
los usuarios serán redirigidos automáticamente al servidor de reserva. Esta acción puede tardar unos segundos, 
lo cual es aceptable y casi imperceptible para los usuarios finales.

 ### Regla de validación

 | El número de... | es igual o menor que |
 |---------------------------------------------------------------------------|:------------------------:|
 | aumenta el nivel de disponibilidad mientras el nivel actual sea suficiente | 0 |
