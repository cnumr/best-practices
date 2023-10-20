## Evite las animaciones JavaScript/CSS

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 810 | 48 | 39 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:----------:|:-----------:|:--------------:|
 | 2. Diseño | Usuario/Dispositivo | Diseñador UX/UI |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:--------:|:-------------------------:|:-------- ---------:|
 | 4 | 3 | 5 |

 | Recursos guardados |
 |:----------------------------------------------- ----------:|
 | Procesador/RAM |

 ### Descripción

 las animaciones JavaScript/CSS pueden solicitar muchos ciclos de CPU y memoria.

Todos desencadenan acciones de tipo (re)pintura/(re)flujo que consumen muchos recursos. Las animaciones deben evitarse en la medida de lo posible y utilizarse sólo cuando sea necesario.

 Si algunas animaciones son esenciales limítese a las propiedades CSS `opacidad` y `transformar` y a las funciones relacionadas con `traducir` `rotar` y `escalar` de `transformar`. Estas dos propiedades se optimizan automáticamente para el navegador y las animaciones pueden ser administradas por la unidad de procesamiento de gráficos (GPU). El siguiente sitio web www.csstriggers.com(https://csstriggers.com/) presenta una lista de acciones DOM que pueden activarse mediante una animación.

 Se puede informar a los navegadores que se va a realizar una animación con una declaración "cambiará" para reducir el consumo de recursos relacionados con la animación.

 Para saber mas :

 https://web.dev/animations-guide/

 ### Ejemplo

 ```css
 .caja {
 voluntad-cambiar: transformar opacidad;
 }
 ```
 ### Solución alternativa

También puede permitir que los usuarios elijan si desean reproducir o no animaciones a través de las preferencias del navegador y mediante consultas de medios "prefiere movimiento reducido". Las animaciones solo se reproducirán si el usuario no ha establecido preferencias.

 ```css
 @media (prefiere movimiento-reducido: sin preferencia) {
 .animación {
 animación: desvanecimientoEn 4s facilidad;
 }
 }
 ```

 ### Regla de validación

 | El número de... | es igual o menor que |
 |------------------------------|:---------------- --------:|
 | Animaciones JS/CSS por página | 2 |
