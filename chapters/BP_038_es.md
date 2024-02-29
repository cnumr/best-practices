## Usar recarga parcial de contenido

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 40 | 49 | 38 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:-------:|:--------------:|
 | 3. Implementación | Red | Diseñador UX/UI |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:---------:|:--------------------------:|:-----------------:|
 | 4 | 3 | 4 |

 | Recursos ahorrados |
 |:---------------------------------------------------------:|
 | Procesador/RAM/Red |

 ### Descripción

Si su página web tiene una o varias zonas de contenido con una tasa de refresco elevada, debería recargar únicamente 
estas zonas en lugar de toda la página. Para conseguirlo puedes utilizar varias técnicas, generalmente con Javascript : 
AJAX, Service Workers, Web Components, o desarrollos a medida.

Incluso es posible no incluir estas partes en la respuesta HTTP y añadirlas posteriormente con el Javascript descrito 
anteriormente. Esta arquitectura puede denominarse "islas de componentes" o "arquitectura de islas". Una ventaja es la 
posibilidad de mantener soluciones de caché para las páginas "contenedoras" y recargar sólo las partes de contenido que lo requieran.
 ### Ejemplo

Los sitios de noticias utilizan muy a menudo esta técnica, para áreas claramente identificables que requieren 
actualizaciones rápidas (noticias de última hora, datos meteorológicos, cotizaciones bursátiles, resultados deportivos, etc.).
 ### Regla de validación

 | El número de... | es igual o inferior a |
 |---------------------------------------------------------|:-------------------------:|
 | Zonas de contenido que pueden actualizarse parcialmente pero no son | 0 |
