## Utilice un proceso asincrónico cuando sea posible

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:---:|
 | 112 | 8 | 8 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:----------:|:-------:|:----------------------:|
 | 2. Diseño | Red | Arquitecto / Desarrollador |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-------- ---------:|
 | 4 | 3 | 4 |

 | Recursos guardados |
 |:------------------------:|
 | RAM / Red / Solicitudes |

 ### Descripción

 Si las acciones del usuario implican un proceso de ejecución prolongado hágalo asincrónico si es posible.

De esta manera el usuario puede iniciarlo y volver a verificar más tarde si está terminado y está bien sin esperar a que se complete en su dispositivo.
Este usuario puede recibir una notificación mediante un correo electrónico con un enlace o se puede proporcionar un panel de los procesos en curso y finalizados.

Este enfoque hace que la experiencia del usuario sea más agradable y permite varias optimizaciones de backend:

 * si la arquitectura se divide de esta manera permite liberar los servidores de presentación permitiendo luego servir más
 solicitudes y mejorar el desempeño percibido.
 * resulta posible agrupar los procesos en lotes lo que a menudo es más eficiente en recursos que el procesamiento sincrónico sobre la marcha.
 * facilita suavizar la carga de los servidores responsables del procesamiento lo que permite una mejor agrupación de servidores
y en consecuencia menos.

 ### Ejemplo

 En el caso de un servicio de conversión de documentos de Office en línea el usuario puede cargar todos sus archivos a la vez y luego
 ser notificado por correo electrónico cuando se complete el procesamiento. Para optimizar el proceso todos los archivos se pueden agrupar y
 comprimido en un archivo.

 ### Regla de validación

 | El número de... | es igual o menor que |
 |----------------------------------------------|: ------------------------:|
 | procesos sincrónicos de más de un minuto | 0 |
