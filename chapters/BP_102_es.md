## Caché de respuestas Ajax

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 | :-----: | :-: | :-: | :-: |
 | 91 | 107 | 102 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 | :-----------: | :-----------: | :--------------------------: |
 | 4. Producción | Usuario/Terminal | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 | :------: | :----------------------: | :-----------------------: |
 | 3 | 2 | 4 |

 | Recursos guardados |
 | :-----------------------: |
 | Red / Consultas |

 ### Descripción

 Las respuestas Ajax que permanecerán sin cambios en un futuro próximo no deberían volver a solicitarse al servidor. Almacenarlos en caché puede ahorrar ancho de banda.

 ### Ejemplo

 Si una solicitud Ajax devuelve una lista de nombres de ciudades nombres de contactos o cualquier elemento no calculado estas respuestas deben almacenarse en caché en el lado del cliente para evitar generar otras solicitudes al servidor.

 ### Regla de validación

 | El número de... | es igual o menor que |
 | ------------------------- | :----------------------: |
 | respuestas Ajax no almacenadas en caché | 10% |
