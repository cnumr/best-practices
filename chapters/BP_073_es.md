## Conectarse a una base de datos solo si es necesario

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   56    | 72  | 73  |     |     |

### Categorías

| Ciclo de vida |     Partes      |            Responsable            |
| :-----------: | :-------------: | :-------------------------------: |
|   2. Diseño   | Centro de Datos | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad | ejecución | impacto ecológico |
| :----------------: | :-------: | :---------------: |
|         3          |     3     |         3         |

|    Recursos ahorrados    |
| :----------------------: |
| Procesador/ Memoria/ Red |

### Descripción

Independientemente del sistema de base de datos, abrir una conexión es un proceso costoso para el cliente y el servidor:

- Asignación de memoria y I/O disco para búferes,
- Idas y vueltas por la red para el protocolo de conexión,
- Coste de CPU inducido.

Ejemplo: para Oracle se necesitan varias idas y vueltas (validación de credenciales, información sobre el driver, negociación del tamaño óptimo de los paquetes...).
La apertura y el cierre de una conexión requieren la asignación y la eliminación de estos recursos, así como numerosos intercambios de red, cada vez.

La buena práctica que se suele utilizar es la creación de un grupo de conexiones.
Esto optimiza la gestión de conexiones y el rendimiento. Sin embargo, su configuración no es necesariamente una operación trivial (requiere supervisar su comportamiento para encontrar la configuración correcta).

Dicho esto, siempre que la aplicación pueda evitar el acceso a la base de datos, ¡hágalo!

### Ejemplo

HikariCP es un grupo de conexiones JDBC sólido y potente. Está integrado en SpringBoot.

En caso de que no haya un grupo de conexiones, vuelva a utilizar una conexión y no abra/cierre una nueva conexión con cada consulta.

### Principio de validación

| El número ..                                                                                                      | es inferior o igual a |
| ----------------------------------------------------------------------------------------------------------------- | :-------------------: |
| de conexiones a una base de datos para solicitar, almacenar un dato no necesario para la utilización del servicio |           0           |
