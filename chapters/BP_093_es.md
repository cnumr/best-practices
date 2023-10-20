## Almacenar datos en la nube

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:-----:|:---:|:----:|
 | 71 | 92 | 93 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-------------:|:----------:|:------------ --:|
 | 4. Producción | Centro de datos | Administrador del sistema |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-------- ---------:|
 | 2 | 3 | 2 |

 | Recursos guardados |
 |:----------------------------------------------- ----------:|
 | Almacenamiento |

 ### Descripción

 Las soluciones de computación en la nube pueden resultar útiles para optimizar el espacio de almacenamiento necesario para los recursos de los sitios web o de los servicios en línea. De esta manera si bien se tiene una solución elástica los recursos no se monopolizan innecesariamente. La otra ventaja es alojar recursos estáticos en dominios sin cookies. De esta manera cada recurso transferido al navegador no requerirá el transporte de cookies (consulte la regla n.° 96).

Este método es útil para imágenes y otros recursos estáticos. Como no debemos multiplicar dominios (consulte la mejor práctica n.° 55) la forma más sencilla es agrupar todos los recursos estáticos en un único servicio de almacenamiento en línea.

 ### Ejemplo

Para un concurso de videos basado en testimonios es más eficiente utilizar el servicio de almacenamiento S3 de Amazon que agregar nuevos discos duros a los servidores existentes.

 ### Regla de validación

 | El número de... | es igual o menor que |
 |------------------------------------------------ ----------------------|:-------------------- ----:|
 | recursos datos de sitios web que no se almacenan en una solución de computación en la nube | 0 |
