## Usar recarga parcial de contenido

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 40 | 49 | 38 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:-------:|:--------------:|
 | 3. Implementación | Red | Diseñador UX/UI |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:---------:|:--------------------------:|:------ -----------:|
 | 4 | 3 | 4 |

 | Recursos guardados |
 |:----------------------------------------------- ----------:|
 | Procesador/RAM/Red |

 ### Descripción

 Si su página web tiene una o más zonas de contenido con una alta frecuencia de actualización solo debe recargar estas zonas en lugar de toda la página.
 Para conseguirlo puedes utilizar varias técnicas generalmente con Javascript: AJAX Service Workers Web Components o desarrollos personalizados.

 Incluso es posible no incluir estas partes en la respuesta HTTP y agregarlas más tarde con el Javascript descrito anteriormente.
Esta arquitectura puede denominarse "islas componentes" o "arquitectura de islas".
La ventaja es la capacidad de mantener soluciones de caché para las páginas "contenedores" y recargar solo las partes del contenido que lo requieran.

 ### Ejemplo

 Los sitios de noticias utilizan muy comúnmente esta técnica para áreas claramente identificables que requieren
 actualizaciones rápidas (noticias de última hora datos meteorológicos cotizaciones bursátiles resultados deportivos etc.).

 ### Regla de validación

 | El número de... | es igual o menor que |
 |------------------------------------------------ ---------|:-------------------------:|
 | Zonas de contenido que se pueden actualizar parcialmente pero no | 0 |
