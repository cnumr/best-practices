## Evitar animaciones JavaScript / CSS

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 810 | 48 | 39 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:----------:|:-----------:|:--------------:|
 | 2. Diseño | Usuario/Dispositivo | Diseñador UX/UI |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-----------------:|
 | 4 | 3 | 5 |

 | Recursos ahorrados |
 |:---------------------------------------------------------:|
 | Procesador/RAM |

 ### Descripción

Las animaciones JavaScript/CSS pueden solicitar muchos ciclos de CPU y memoria.

Todas ellas desencadenan acciones del tipo (re)pintar/(re)ﬂow que consumen muchos recursos. Hay que evitar las 
animaciones en la medida de lo posible, y utilizarlas sólo cuando sean necesarias.

Si algunas animaciones son esenciales, limítate a las propiedades `opacidad` y `transformación` y a 
las funciones de transformación relacionadas con `traducir` `rotar` y `escalar`. 
Estas dos propiedades se optimizan automáticamente en el navegador, y las animaciones pueden ser gestionadas por la unidad de procesamiento gráfico (GPU).
El siguiente sitio web www.csstriggers.com presenta una lista de acciones DOM que pueden ser desencadenadas por una animación.

Los navegadores pueden ser informados de que una animación va a tener lugar con una declaración will-change para reducir el consumo de recursos relacionados con la animación.

 Para saber mas :

 https://web.dev/animations-guide/

 ### Ejemplo

 ```css
 .caja {
 voluntad-cambiar: transformar opacidad;
 }
 ```
 ### Solución alternativa

También puede dejar que los usuarios elijan si reproducir o no las animaciones a través de las preferencias del 
navegador y a través de las media queries prefers-reduced-motion. Las animaciones sólo se reproducirán si el usuario 
no ha establecido ninguna preferencia.
 ```css
 @media (prefiere movimiento-reducido: sin preferencia) {
 .animación {
 animación: desvanecimientoEn 4s facilidad;
 }
 }
 ```

 ### Regla de validación

 | El número de... | es igual o inferior a |
 |------------------------------|:------------------------:|
 | Animaciones JS/CSS por página | 2 |
