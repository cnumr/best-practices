## Eliminar funcionalidades no esenciales
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  |
|:-------:|:----:|:----:|:----:|
|   109  | 1 | 1 |

### Categorías

| Ciclo de vida | Partes | Responsable |
|:------:|:----:|
| 1. Especificación | Usuario/Terminal | PO/AMOA |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 5 | 4 | 5 |

|Recursos ahorrados |
|:----------------------------------------------------------:|
|Procesador/ Memoria RAM/ Almacenamiento/ Red/ Consultas   |

### Descripción
Varios estudios (especialmente los de Cast Software y Standish Group) han demostrado que el 70 % de las funciones solicitadas por los usuarios no son esenciales y que el 45 % nunca se utilizan. Al reducir la cobertura y la profundidad funcional de la aplicación, se reduce su costo de desarrollo inicial, su deuda técnica y los impactos ambientales asociados. 

De este modo se reduce mecánicamente la infraestructura necesaria para su ejecución. Además, a un nivel ergonómico constante, cuantas menos funcionalidades tenga la aplicación, más fácil será utilizarla. Por lo tanto, hay que reducir al mínimo la cobertura funcional de la aplicación, centrándose en la necesidad esencial del usuario.

Las funcionalidades no esenciales pueden detectarse al analizar los requisitos.
. El método Moscow, talleres técnicos, wireframes (maquetas funcionales) o prototipos con pruebas de usuario permiten comprobar la utilidad de una funcionalidad antes de desarrollar la. 


### Ejemplo
Los éxitos recientes en la web - Google, Twitter, WhatsApp, Pinterest, Instagram, etc. - ofrecen todos un único servicio y apuestan por una gran sobriedad funcional.

Al analizar la expresión de la necesidad, hay que plantearse, los requisitos, la pregunta: «¿Qué pasa si no lo tenemos?».

Respetar el principio YAGNI (You Aint Gonna Need It) del método ágil
  Extreme Programming (XP) : desarrolla cuando realmente necesitas una funcionalidad, no cuando imaginas necesitarla.

#### Principio de validación


| El número . ... |    es inferior o igual a   |  
|-------------------|:-------------------------:|
| de funcionalidades cuya utilidad no ha sido comprobada con un panel de usuarios antes del desarrollo | 0 % |

