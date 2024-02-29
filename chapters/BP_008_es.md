## Utilizar un proceso asíncrono cuando sea posible

### Identificadores

| GreenIT | V2  | V3  | V4  |
|:-------:|:---:|:---:|:---:|
| 112     | 8   | 8   |     |

### Categorías

| Ciclo de vida | Niveles | Responsable                |
|:-------------:|:-------:|:--------------------------:|
| 2. Diseño     | Red     | Arquitecto / Desarrollador |

### Indicaciones

| Prioridad | Dificultad de implementación | Impacto ecológico |
|:---------:|:----------------------------:|:-----------------:|
| 4         | 3                            | 4                 |

| Recursos ahorrados      |
|:-----------------------:|
| RAM / Red / Solicitudes |

### Descripción

Si las acciones del usuario implican un proceso de ejecución prolongada, hazlo asíncrono si es posible.

De esta forma, el usuario puede iniciarlo y volver a verificar más tarde si ha terminado y está bien, sin esperar a que se complete en su dispositivo.
Este usuario puede ser notificado por un correo electrónico con un enlace, o se puede proporcionar un panel de los procesos en curso y terminarlos.

Este enfoque hace que la experiencia del usuario sea más agradable y permite varias optimizaciones de backend:

* si la arquitectura se divide de esta manera, hace posible liberar los servidores de presentación, permitiendo luego servir más solicitudes y mejorar el desempeño percibido.
* resulta posible agrupar los procesos en lotes, a menudo más eficiente en recursos que el procesamiento síncrono sobre la marcha.
* facilita suavizar la carga de los servidores responsables del procesamiento, lo que permite una mejor agrupación de servidores y, en consecuencia, un menor número de ellos.

### Ejemplo

En el caso de un servicio de conversión de documentos de Office en línea, el usuario puede cargar todos sus archivos a la vez y luego
ser notificado por correo electrónico cuando se haya completado el proceso. Para optimizar el proceso, todos los archivos se pueden agrupar y comprimir en un archivo.

### Regla de validación

| El número de...                          | es igual o menor que |
|------------------------------------------|:--------------------:|
| procesos sincrónicos de más de un minuto | 0                    |
