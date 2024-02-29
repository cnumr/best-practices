## Preferir fuentes estándar

 ### Identificadores


 |  GreenIT | V2 | V3 | V4 |
 |:-------:|:----:|:----:|:----:|
 | 19 | 17 | 29 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:---------:|:----:|:----:|
 | 3. Implementación | Red | Diseñador UX/UI |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:-------------------:|:-------------------------:|:---------------------:|
 | 4 | 3 | 4 |


 |Recursos ahorrados |
 |:----------------------------------------------------------:|
 | Almacenamiento / Red / Consultas |

 ### Descripción

Utilice fuentes estándar que ya estén instaladas en el ordenador del usuario y no necesiten descargas adicionales para
ahorrar ancho de banda y acelerar la carga de las páginas web. Puede encontrar una lista de fuentes estándar en https://systemfontstack.com/.

Sin embargo, si necesita una fuente específica para su servicio digital, aunque se trate de una fuente API (Google font, Adobe font, etc.), deberá:

 - Alojar la fuente usted mismo
 - Utilice negrita falsa a través de la propiedad CSS ```-webkit-text-stroke``` cuando sea posible
 - Preferir el uso de fuentes variables si necesitas más de una variante (por ejemplo: normal, negrita, etc.).
 - Optimice la fuente eliminando los caracteres innecesarios (ejemplo: Los sitios franceses sólo requieren caracteres latinos, por lo que se puede suprimir el alfabeto cirílico)

Debería incorporar nuevos glifos directamente a las fuentes si dispone de pictogramas o ilustraciones monocromáticas (véase la regla 30: Prefiera los glifos a las imágenes) y los derechos de uso de la fuente lo permiten.

 ### Ejemplo

Aquí hay tabla comparativa de los tamaños de los tipos de letra Oswald:

 | | Regular | Regular + Negrita | Variables | Latín regular | Latín regular + Latín negrita | Latín variable |
 |:------:|:-------:|:--------------:|:--------:|: -------------:|:--------------------------:|:--------------:|
 | Peso | 376 KB | 769 KB | 66kb | 16kb | 325 KB | ?

 ### Solución alternativa

Los usuarios pueden elegir, a través de la configuración del navegador, pedir a los sitios web que visitan que optimicen las peticiones de red. Puede detectarlo con la consulta de medios `prefers-reduced-data`.

En el ejemplo siguiente, la fuente `Montserrat` sólo se descargará si los usuarios no han establecido ninguna configuración personal. En caso contrario, se utilizará la fuente `Arial` y no se descargará `Montserrat`.

```css
@media (prefers-reduced-data: no-preference) {
     @font-face {
         font-family: Montserrat;
         font-style: normal;
         font-weight: 400;
         src: url('fonts/montserrat-latin-regular.woff2');
     }
}

bodysuit {
   font-family: Montserrat, Arial;
}
```


 Para obtener más información sobre la media query `prefers-reduced-data`: [https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data)

 ### Regla de validación

 | El número de... | es igual o menor que |
 |----------------------|:-------------------------:|
 | fuentes descargadas | 2 |
