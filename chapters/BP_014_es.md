## Crear una arquitectura de aplicaciones modular

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   114   | 52  | 14  |     |     |

### Categorías

| Ciclo de vida |     Partes      |            Responsable            |
| :-----------: | :-------------: | :-------------------------------: |
|   2. Diseño   | Centro de datos | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| :----------------: | :--------------------------------------: | :---------------: |
|         3          |                    3                     |         3         |

|         Recursos ahorrados          |
| :---------------------------------: |
| Procesador/ Memoria/ Almacenamiento |

### Descripción

La arquitectura modular popularizada por el software de código abierto asuele proporcionar una mayor escalabilidad, menores costes de mantenimiento correctivo y evolutivo, así como un código más eficiente.
Si la cobertura funcional del sitio web o del servicio en línea puede evolucionar, es mejor implementar las funcionalidades básicas en un núcleo y completarlas, si es necesario, con módulos. Estos módulos pueden combinar funciones del mismo ámbito de actividad. Esto permite desarrollarlos independientemente de otras áreas de negocio, así como compartirlos con otras aplicaciones.

Este enfoque es válido para todos los niveles de granularidad, tanto para el desarrollo a medida como para la elección de un servidor HTTP o un CMS.

### Ejemplo

Un software de código abierto más eficiente, como NGINX, Apache, MySQL o PHP, se basa en esta arquitectura modular.

En el lado backend, el corte en microservicios permite aportar un nivel de modularidad para los servicios HTTP. No obstante, habrá que prestar especial atención a la granularidad del corte para evitar un efecto contraproducente (adición de una complejidad de interconexión entre los servicios, aumento global de los recursos informáticos).

### Principio de validación

| El número ..                            | es inferior o igual a |
| --------------------------------------- | :-------------------: |
| El número de arquitecturas no modulares |           0           |
