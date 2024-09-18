## Almacenar en caché las respuestas de Ajax

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   91    | 107 | 102 |     |     |

### Categorías

| Ciclo de vida |      Partes      |            Responsable            |
| :-----------: | :--------------: | :-------------------------------: |
| 4. Producción | Usuario/Terminal | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| :----------------: | :--------------------------------------: | :---------------: |
|         3          |                    2                     |         4         |

|   Recursos ahorrados    |
| :---------------------: |
| portadas Red/ Consultas |

### Descripción

Las respuestas Ajax que no cambien en un futuro próximo no deben ser pedidas de nuevo al servidor. Por lo tanto, almacenarlos en caché para ahorrar ancho de banda.

### Ejemplo

Si una consulta Ajax devuelve una lista de nombres de ciudades, nombres de contactos o cualquier elemento no calculado, debe almacenar estas respuestas en caché en el lado del cliente para no generar una nueva consulta al servidor.

### Principio de validación

| El número ..                               | es inferior o igual a |
| ------------------------------------------ | :-------------------: |
| de respuestas AJAX no almacenadas en caché |          10%          |
