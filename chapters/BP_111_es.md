## Reducir el tamaño de los correos electrónicos

 ### Identificadores

| GreenIT | V2  | V3  | V4  |
| :-----: | :-: | :-: | :-: |
|   104   | 112 | 111 |     |

 ### Categorías

| Ciclo de vida |        Niveles        | Responsable |
|:-------------:|:---------------------:|:-----------:|
|    5. Uso     | Usuario / Dispositivo |   Usuario   |

 ### Indicaciones

| Prioridad | Dificultad de implementación | Impacto ecológico |
|:---------:|:----------------------------:|:-----------------:|
|     3     |              3               |         3         |

|      Recursos ahorrados      |
|:----------------------------:|
| Procesador / Red / Consultas |

 ### Descripción

 Reducir el tamaño de los correos electrónicos que se envían a los usuarios para notificaciones, alertas, o mensajes de confirmación. 
 Evite archivos adjuntos e imágenes incrustadas. Se prefiere el contenido abreviado. Opcionalmente, utilice texto sin formato en lugar de HTML.

 ### Ejemplo

 El envío de correos electrónicos de confirmación para una solicitud de contacto no justifica agregar código HTML e imágenes. Los mensajes HTML básicos generalmente requieren:

 - Al menos 2 imágenes (logotipo y firma al final de la página) = aproximadamente 10 KB;
 - 12 KB de código HTML para formatear (estilos en línea, tablas, etc.);
 - 4 KB de texto (el mensaje + 2 enlaces de acción).

 Al final:

 - Correo electrónico HTML = 26 KB;
 - Correo electrónico en texto plano = 4 KB.

 Esto da como resultado 22 KB de espacio liberado por cada correo electrónico enviado. En el caso de un sitio web transaccional (que incluye, por ejemplo, alertas internas y para clientes) las ganancias potenciales se vuelven significativas.

 ### Regla de validación

| El número de ...                                   | es igual o menor que |
|----------------------------------------------------|:--------------------:|
| correos electrónicos enviados que pesan más de 1MB |          0           |

