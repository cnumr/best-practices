## Prefiere fuentes estándar

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:----:|:----:|:----:|
 | 19 | 17 | 29 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:---------:|:----:|:----:|
 | 3. Implementación | Red | Diseñador UX/UI |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:-------------------:|:------------------------- :|:---------------------:|
 | 4 | 3 | 4 |

 |Recursos guardados |
 |:----------------------------------------------- -----------:|
 | Almacenamiento / Red / Consultas |

 ### Descripción

 Utilice fuentes estándar que ya están instaladas en la computadora del usuario y no necesitan descargas adicionales para ahorrar ancho de banda y acelerar la carga de páginas web. Puede encontrar una lista de fuentes estándar en https://systemfontstack.com/(https://systemfontstack.com/).

 Si por el contrario necesitas una fuente específica para tu servicio digital incluso si es una fuente API (fuente de Google fuente de Adobe etc.) debes:
 - Aloje la fuente usted mismo
 - Utilice negrita falsa a través de la propiedad CSS ```-webkit-text-stroke``` cuando sea posible
 - Prefiere el uso de fuentes variables si necesitas más de una variante (por ejemplo: normal negrita etc.)
 - Optimice la fuente eliminando caracteres innecesarios (ejemplo: los sitios franceses sólo requieren caracteres latinos por lo que se puede eliminar el alfabeto cirílico)

Deberías incorporar nuevos glifos directamente en las fuentes si tienes pictogramas o ilustraciones monocromáticas (ver regla 30: Preferir glifos a imágenes) y los derechos de uso de fuentes lo permiten.

 ### Ejemplo

Aquí hay un cuadro comparativo de tamaños de fuente tipográfica Oswald:

 | | Regular | Regular + Negrita | Variables | Latín regular | Latín regular + Latín negrita | Latín variable |
 |:------:|:-------:|:--------------:|:--------:|: -------------:|:--------------------------:|:----- ---------:|
 | Peso | 376 KB | 769 KB | 66kb | 16kb | 325 KB | ?

 ### Solución alternativa

Los usuarios pueden elegir a través de la configuración del navegador solicitar a los sitios web que visitan que optimicen las solicitudes de red. Puede detectarlo con la consulta de medios `prefiere-datos-reducidos`.

 En el siguiente ejemplo la fuente "Montserrat" solo se descargará si los usuarios no establecieron ninguna configuración personal. De lo contrario se utilizará la fuente `Arial` y no se descargará `Montserrat`.

 ```css
 @media (prefiere-datos-reducidos: sin preferencia) {
      @Perfil delantero {
 familia de fuentes: Montserrat;
 estilo de fuente: normal;
 peso de fuente: 400;
 src: url('fonts/montserrat-latin-regular.woff2');
 }
 }

 mono {
 familia de fuentes: Montserrat Arial;
 }
 ```

 Para obtener más información sobre la consulta de medios `prefers-reduced-data`: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data(https:/ /developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data)

 ### Regla de validación

 | El número de... | es igual o menor que |
 |----------------------|:-------------------------:|
 | fuentes descargadas | 2 |
