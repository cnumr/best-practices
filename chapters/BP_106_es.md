## Deshabilitar registros binarios

 ### Identificadores

 | GreenIT | V2  | V3  | V4  |
 | :-----: | :-: | :-: | :-: |
 |    83   | 93  | 106 |     |

 ### Categorías

 |        Ciclo de vida       |     Niveles     |        Responsable        |
 | :------------------------: | :-------------: | :-----------------------: |
 | 6. Soporte / mantenimiento | Centro de datos | Administrador del sistema |

 ### Indicaciones

 | Prioridad | Dificultad de implementación |      Impacto ecológico    |
 | :-------: | :--------------------------: | :-----------------------: |
 |     2     |              2               |             2             |

 |       Recursos ahorrados      |
 | :---------------------------: |
 | Procesador/RAM/Almacenamiento |

 ### Descripción

 Los registros binarios de los servidores MySQL o MariaDB pueden volverse muy grandes, consumiendo ciclos de CPU mientras se generan operaciones de entrada y salida (E/S) del disco duro, ya que cada solicitud de modificación/eliminación se registra en el archivo de registro. Deshabilitar estos registros ahorrará muchos recursos. Antes de deshabilitarla, asegúrese de que no sea necesaria una replicación de la base de datos y que la pérdida de datos de la última copia de seguridad sea aceptable.

 ### Ejemplo

 Para MySQL, agregue la siguiente configuración:

 ```
 skip-log-bin
 ```

 ### Regla de validación

 | El número de...                                                                                              | es igual o menor que |
 | ------------------------------------------------------------------------------------------------------------ | :------------------: |
 | opciones --skip-log-bin y --disable-log-bin no activadas en casos donde los registros binarios no son útiles |           0          |
