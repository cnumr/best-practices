## Instale lo mínimo en los servidores

 ### Identificadores

 | GreenIT | V2  | V3  |  V4  |
 |:-------:|:---:|:---:|:----:|
 |    74   | 89  | 91  |      |

 ### Categorías

 | Ciclo de vida |     Niveles     |         Responsable       |
 |:-------------:|:---------------:|:-------------------------:|
 | 4. Producción | Centro de datos | Administrador del sistema |

 ### Indicaciones

 |      Prioridad     | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:---------------------------: |:-----------------:|
 |          3         |              4               |          3        |

 |                    Recursos ahorrados                     |
 |:---------------------------------------------------------:|
 |               Procesador/RAM/Almacenamiento               |

 ### Descripción

 Desinstale todos los servicios no esenciales que no sean necesarios para ejecutar su sitio web. Esta medida eliminará necesariamente los demonios (agentes y servicios que se ejecutan permanentemente en la memoria) que utilizan recursos, especialmente ciclos de CPU y RAM.

 ### Ejemplo

 Prefiera la instalación de servidores "manuales" (LAMP + CMS, por ejemplo) en lugar de distribuciones superpuestas de cPanel o Plesk. Si es necesaria una superposición de administración se prefieren soluciones ligeras como Webmin.

 ### Regla de validación

 | El número de...                                                 | es igual o menor que |
 |-----------------------------------------------------------------|:--------------------:|
 | servicios no esenciales que se ejecutan en el sistema operativo |          0           |
