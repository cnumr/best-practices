## Limitar el tamaño de los correos electrónicos enviados
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   104   | 112  | 111  |  	|

### Categorías

| Ciclo de vida | Partes | Responsable |
|:---------:|:----:|:----:|
| 5. Uso | Usuario/Terminal | Usuario |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 3 | 3 |

| Recursos ahorrados |
|:----------------------------------------------------------:|
| Red/ Consultas  |

### Descripción

Cuando una notificación, alerta o mensaje de confirmación se debe enviar por correo electrónico al usuario, limitar el tamaño del correo electrónico enviado.
Evitar adjuntos e imágenes incrustadas. Preferir contenido corto. Opcionalmente, utilizar texto plano en lugar de HTML.

### Ejemplo

El envío de un correo electrónico de confirmación de una solicitud de contacto no justifica la adición de código HTML e imágenes.
Un mensaje HTML básico usa en promedio:
 - al menos 2 imágenes (el logotipo y una firma a pie de página), es decir, unos 10 KB;
 - 12 KB de código HTML para el diseño (estilos en línea, tablas...);
 - 4 KB de texto (el mensaje + 2 enlaces de acción).

Al final del día:
 - correo electrónico HTML = 26 KB;
 - texto bruto por correo electrónico = 4 KB.

Es decir, 22 KB por correo electrónico.
En el caso de un sitio transaccional con, por ejemplo, alertas de clientes e internos, el beneficio potencial se vuelve considerable.


### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de mensajes de correo electrónico de más de 1 MB | 0 |


