## Deshabilitar el DNS Lookup de Apache
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|  84	| 100  | 104  |  	|

### Categorías

| Ciclo de vida | Partes | Responsable |
|:---------:|:----:|:----:|
| 4. Producción | Centro de datos | Administrador de sistemas |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 2 | 2 | 3 |

| Recursos ahorrados |
|:----------------------------------------------------------:|
| Procesador/ Red  |

### Descripción

Cada vez que un servidor web recibe una solicitud HTTP, registra esta información en un registro, traduciendo generalmente la dirección IP del usuario al nombre de dominio. Esta conversión (DNS Lookup) es uno de los cuellos de botella del servidor HTTP Apache.

Por lo tanto, desactivar.

### Ejemplo

En el archivo de configuración de su servidor Apache, en la dirección `/etc/apache/httpd.conf` o en la dirección `/etc/apache2/apache2.conf`, escriba:
```apacheconf
 HostnameLookups Off
```

#### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de DNS Lookup activo | 0 |


