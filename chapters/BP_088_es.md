## Adaptar la calidad del servicio y el nivel de disponibilidad

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 501 | 86 | 88 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-------------:|:----------:|:------------ --:|
 | 4. Producción | Centro de datos | Administrador del sistema |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------- ---------:|:-----------------:|
 | 3 | 2 | 4 |

 | Recursos guardados |
 |:----------------------------------------------- ----------:|
 | Consumo de energía |

 ### Descripción

 La calidad de servicio (QoS) y el acuerdo de nivel de servicio (SLA) deben determinarse con los usuarios del servicio digital.
 Por ejemplo no es necesario alojar servicios en un centro de datos de muy alta disponibilidad (Nivel IV) si los usuarios aceptan un
 tasa de disponibilidad inferior o igual al 99% para un servicio no crítico. Con una eficiencia energética equivalente cuanto mayor sea el
Cuanto mayor sea la disponibilidad del centro de datos que aloja el sitio web o el servicio en línea mayor será su huella ambiental general.
 Sobre todo porque todo es redundante y activo: dos cadenas de suministro de energía dos cadenas de producción y distribución de frío etc.
Es fundamental evitar la sobrecalificación.
 Se recomienda aplicar una calidad de servicio basada en el nivel de disponibilidad suficiente.

 ### Ejemplo

A pesar de tener cientos de millones de usuarios los gigantes de la Web no ofrecen un nivel de disponibilidad muy alto del tipo Tier IV.
 Los datos son redundantes en al menos otro servidor en otro centro de datos. Si un servidor falla los usuarios serán enrutados automáticamente al servidor de respaldo.
 Esta acción puede tardar unos segundos lo cual es aceptable y casi imperceptible para los usuarios finales.

 ### Regla de validación

 | El número de... | es igual o menor que |
 |------------------------------------------------ ---------------------------|:--------------------- ---:|
 | aumenta el nivel de disponibilidad mientras el nivel actual sea suficiente | 0 |
