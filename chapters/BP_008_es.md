## Proponer tratamiento asíncrono cuando sea posible

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   112   |  8  |  8  |     |     |

### Categorías

| Ciclo de vida | Partes |            Responsable            |
| :-----------: | :----: | :-------------------------------: |
|   2. Diseño   |  Red   | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| :----------------: | :--------------------------------------: | :---------------: |
|         4          |                    3                     |         4         |

|   Recursos ahorrados    |
| :---------------------: |
| Memoria/ Red/ Consultas |

### Descripción

Cuando la interacción con el usuario induce un procesamiento pesado y largo en el lado del servidor, ofrecer un tratamiento asíncrono cuando sea posible.
La idea es animar al usuario a iniciar el tratamiento y luego volver a conectarse cuando el tratamiento se haya completado sin esperar a que el dispositivo termine de ejecutarse;
por ejemplo, a través de la recepción de un correo electrónico que contiene un enlace.
Este enfoque permite realizar tratamientos por lotes (batch), a menudo más eficientes en recursos que los tratamientos síncronos sobre la marcha.
Esto libera los servidores de presentación, que pueden soportar otros usuarios de Internet mientras el procesamiento se realiza en modo asíncrono en el lado del servidor.
También es más fácil suavizar la carga del servidor responsable del tratamiento, lo que permite una mejor mutualización de servidores y, por tanto, menos servidores.

### Ejemplo

En el caso de un servicio en línea de conversión de documentos de oficina, hacer que el usuario deposite sus archivos de una sola vez, y luego notificarle por correo electrónico cuando el procesamiento haya terminado. Para optimizar el proceso, todos los archivos se pueden agrupar y comprimir en un archivo.

### Principio de validación

| El número ..                                          | es inferior o igual a |
| ----------------------------------------------------- | :-------------------: |
| de tratamientos síncronos que tardan más de un minuto |           0           |
