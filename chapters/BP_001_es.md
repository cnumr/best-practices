## Eliminar características no esenciales

 ### Identificadores


 | GreenIT | V2 | V3 | V4 |
 |:-------:|:----:|:----:|:----:|
 | 109 | 1 | 1 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:----------------:|:-----------:|:-----------:|
 | 1. Especificación | Usuario/Dispositivo | PO |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-----------------:|
 | 5 | 4 | 5 |

 | Recursos ahorrados |
 |:----------------------------------------------: |
 | Procesador / RAM / Almacenamiento / Red / Consultas |

 ### Descripción

 Varios estudios (Cast Software y Standish Group, en particular) muestran que el 70% de las funcionalidades solicitadas por los usuarios no son imprescindibles y que el 45% nunca se utiliza. Al reducir la cobertura y la profundidad funcional de la aplicación, reducimos su coste de desarrollo inicial, su deuda técnica y los impactos ambientales asociados.

 Esto reduce la infraestructura necesaria para ejecutarlo. Además, a un nivel ergonómico constante, cuanto más pobre sea la  aplicación en terminos de funcionalidad, más fácil será de utilizar. Por tanto, es interesante reducir al máximo la cobertura funcional de la aplicación, centrándola en las necesidades esenciales de los usuarios.

 Detectar una funcionalidad no esencial es posible al analizar la expresión de la necesidad. El método MoSCoW, workshops,
 wireframes o prototipos con pruebas de usuario permiten verificar la utilidad de una característica antes de su desarrollo.

 ### Ejemplos

 Varios productos exitosos del mundo digital (Google, Twitter, WhatsApp, Pinterest, Instagram, etc.) brindan un servicio único y apuestan por una gran sobriedad funcional.

 Al analizar la necesidad expresada, plantéese la pregunta: «"¿Qué pasa si no la tenemos?"».

Respete el principio YAGNI (No lo necesitarás) de programación extrema: desarrolla cuando realmente necesites una característica, no cuando imaginas que lo necesitas.


 ### Regla de validación


 | El número de... | es igual o menor que |
 |----------------------------------------------------------------------------------------------|:--------------------:|
 | características cuya utilidad no ha sido verificada con un panel de usuarios antes del desarrollo | 0 % |
