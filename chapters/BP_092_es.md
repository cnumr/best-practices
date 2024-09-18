## Poner caches completamente en RAM (Opcode y Kvs)

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   85    | 90  | 92  |     |     |

### Categorías

| Ciclo de vida |     Partes      |        Responsable        |
| :-----------: | :-------------: | :-----------------------: |
| 4. Producción | Centro de datos | Administrador de sistemas |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| :----------------: | :--------------------------------------: | :---------------: |
|         2          |                    2                     |         3         |

|     Recursos ahorrados     |
| :------------------------: |
| Procesador/ Almacenamiento |

### Descripción

Los sistemas de caché deben montarse, en la medida de lo posible, completamente en memoria RAM. Esta medida evita entradas/salidas en discos duros, así como ciclos de CPU para administrarlos.

El objetivo es doble: servir rápidamente una respuesta al cliente, y limitar el número de componentes de hardware (y software) implicados en la respuesta devuelta por el servidor.

Debido a que la memoria RAM es muy rápida en términos de acceso a lectura/escritura, la duración del consumo de recursos es particularmente corta. Además, la vida útil de los componentes se alarga con esta buena práctica, ya que no hay movimiento mecánico como cuando se utiliza el disco duro.

### Ejemplo

Ejemplos de integración de caché RAM en Drupal:

- integración de Memcache: https://drupal.org/project/memcache
- integración de Varnish: https://drupal.org/project/varnish

### Principio de validación

| El número ..                    | es inferior o igual a |
| ------------------------------- | :-------------------: |
| de caches no almacenados en RAM |           0           |
