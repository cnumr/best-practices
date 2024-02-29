## Elige las tecnologías más adecuadas

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:---:|
 | 1 | 11 | 15 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:--------------:|:----------:|:---------------------:|
 | 3. Desarrollo | Centro de datos | Arquitecto / Desarrollador |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-----------------:|
 | 4 | 4 | 5 |

 | Recursos ahorrados |
 |:-------------------------:|
 | Procesador/RAM/Red |

 ### Descripción

La elección de las tecnologías adecuadas es muy importante para ahorrar recursos: seleccione las más eficientes en función de las necesidades y el contexto.

Por ejemplo, utilizar páginas estáticas para un sitio cuyo contenido no cambia mucho permite almacenarlo en caché 
y evitará el despliegue de servidores de aplicaciones y bases de datos.

 En el caso de un sitio web dinámico los desarrollos personalizados permiten optimizaciones técnicas más relevantes, 
 y permiten el uso del mínimo necesario para responder a las necesidades del usuario.

Si tiene una parte de una aplicación web que depende de un número reducido de páginas y ofrece un servicio funcional 
acotado (compra, solicitud de presupuesto, ...), el uso de una SPA (Single Page Application) puede ser interesante. 
Evita peticiones y hace más fluida la experiencia del usuario.

 ### Ejemplo

Un sitio de presentación de una empresa que se actualiza raramente con un formulario de contacto debería basarse en páginas web estáticas.

 ### Regla de validación

 | El número de... | es igual o menor que |
 |----------------------------|:------------------------:|
 | tecnologías mal elegidas | 1 |
