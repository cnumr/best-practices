## Preferir fuentes estándar

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
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

 |Recursos guardados |
 |:----------------------------------------------------------:|
 | Almacenamiento / Red / Consultas |

 ### Descripción

 Utilice fuentes estándar, que ya están instaladas en la computadora del usuario, por lo que no necesitan descargarlas. Esto ahorra ancho de banda y al tiempo que acelera la carga del sitio. Puede encontrar una lista de fuentes estándar en [https://systemfontstack.com/](https://systemfontstack.com/), por ejemplo.

 Si sin embargo, necesitas una fuente específica para tu servicio digital, incluso si es una API font(Google font, Adobe font, etc.) debe:
 - Alojar la fuente usted mismo
 - Utilizar negrita falsa a través de la propiedad CSS ```-webkit-text-stroke``` si es posible
 - Prefiere el uso de variable font si necesitas más de una fuente (por ejemplo: normal, negrita, etc.)
 - Optimice la fuente de texto eliminando caracteres innecesarios (ejemplo: los sitios franceses sólo requieren caracteres latinos, por lo que se puede eliminar el alfabeto cirílico)

Si tiene pictogramas o ilustraciones monocromáticas (ver regla 30: Preferir glifos a imágenes) y  si los derechos de uso de las fuentes de texto lo permiten, incorpore los nuevos glifos directamente en las fuentes de texto.

 ### Ejemplo

Aquí hay un cuadro comparativo de tamaños de fuente tipográfica Oswald:

 | | Regular | Regular + Negrita | Variables | Latín regular | Latín regular + Latín negrita | Latín variable |
 |:------:|:-------:|:--------------:|:--------:|:-------------:|:--------------------------:|:--------------:|
 | Peso | 376 KB | 769 KB | 66kb | 16kb | 325 KB | ?

 ### Solución alternativa

Los usuarios pueden elegir, a través de la configuración del navegador, solicitar a los sitios web que visitan que optimicen las solicitudes de red. Puede detectarlo con la media query `prefiere-datos-reducidos`.

 En el siguiente ejemplo, la fuente  `Montserrat` solo se descargará si los usuarios no establecieron ninguna configuración personal. De lo contrario, se utilizará la fuente `Arial` y no se descargará `Montserrat`.

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
