## Prefiero glifos a imágenes

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:----:|:---:|:----:|
 | 20 | 18 | 30 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-----------------:|:-------:|:--------------:|
 | 3. Implementación | Red | Diseñador UX/UI |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:-------------------:|:------------------------- :|:---------------------:|
 | 4 | 3 | 4 |

 | Recursos guardados |
 |:----------------------------:|
 | Almacenamiento / Red / Consultas |

 ### Descripción

 Los glifos son caracteres tipográficos específicos incluidos en las fuentes como los que se incluyen en los sistemas operativos. Se pueden utilizar desde imágenes monocromáticas como símbolos o pictogramas (chevrón triángulo punto cuadrado signos astrológicos etc.) hasta ilustraciones que permiten:
 - Reducir el ancho de banda reduciendo el tamaño total del sitio web
 - Reducir el número de solicitudes.
 - Reducir la complejidad del DOM especialmente con muchos pictogramas SVG

 ### Ejemplo

 Extracto de una fuente creada mediante Font Forge para ilustrar una página de destino(https://github.com/florinesueur/images/blob/main/vue-font-forge.svg)

 Se logró un ahorro de tamaño del 91 % al incluir pictogramas e ilustraciones vectoriales en una fuente de ícono a través de Font Forge(https://fontforge.org/en-US/).

 Para ir más lejos: https://coding.smashingmagazine.com/2011/03/19/styling-elements-with-glyphs-sprites-and-pseudo-elements(https://coding.smashingmagazine.com/2011 /03/19/elementos-de-estilo-con-glifos-sprites-y-pseudo-elementos)

 ### Regla de validación

 | El número de... | es igual o menor que |
 |----------------------|:-------------------------:|
 | imágenes que deberían haber sido reemplazadas por glifos (símbolo de fuente) | 0 |
