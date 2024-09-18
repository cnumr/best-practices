## Apache Vhost: deshabilitar AllowOverride

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   81    | 101 | 105 |     |     |

### Categorías

| Ciclo de vida |     Partes      |        Responsable        |
| :-----------: | :-------------: | :-----------------------: |
| 4. Producción | Centro de datos | Administrador de sistemas |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| :----------------: | :--------------------------------------: | :---------------: |
|         2          |                    2                     |         3         |

| Recursos ahorrados |
| :----------------: |
|     Procesador     |

### Descripción

Cuando la directiva `AllowOverride` está activada, el servidor HTTP Apache debe subir toda la jerarquía de directorios para, tal vez, encontrar un archivo . htaccess que contiene reglas de sobrecarga.
Por lo tanto, es aconsejable desactivar esta directiva en la configuración de Apache.

### Ejemplo

En el archivo de configuración de su host Apache, agregue:

```apacheconf
AllowOverride none
```

### Principio de validación

| El número ..                                                                                              | es inferior o igual a |
| --------------------------------------------------------------------------------------------------------- | :-------------------: |
| de archivos de configuración que contienen el texto "AllowOverride" con algo más que "AllowOverride None" |           0           |
