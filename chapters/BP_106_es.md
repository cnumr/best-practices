## Desactivar los registros binarios

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   83    | 93  | 106 |     |     |

### Categorías

|       Ciclo de vida       |     Partes      |        Responsable        |
| :-----------------------: | :-------------: | :-----------------------: |
| 6. Soporte/ mantenimiento | Centro de datos | Administrador de sistemas |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| :----------------: | :--------------------------------------: | :---------------: |
|         2          |                    2                     |         2         |

|         Recursos ahorrados          |
| :---------------------------------: |
| Procesador/ Memoria/ Almacenamiento |

### Descripción

Los logs binarios del servidor MySQL o MariaDB pueden volverse muy voluminosos, consumiendo ciclos CPU y generando entradas-salidas (I/O) en el disco duro, ya que cada petición de modificación/supresión está inscrita en el archivo de log. Además, si tiene la opción de desactivar estos registros, se ahorrará una gran cantidad de recursos.
Antes de desactivar, debe asegurarse de que no es necesaria una replicación de la base de datos y que la pérdida de datos desde la última copia de seguridad es aceptable.

### Ejemplo

Para MySQL, añadir la siguiente configuración:

```
skip-log-bin
```

### Principio de validación

| El número ..                                                                                             | es inferior o igual a |
| -------------------------------------------------------------------------------------------------------- | :-------------------: |
| opciones --skip-log-bin y --disable-log-bin no activadas en caso de que los logs binarios no sean útiles |           0           |
