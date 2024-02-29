## Reemplazar botones oficiales para compartir en redes sociales

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:----:|:----:|:----:|
 | 910 | | 19 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:---------:|:----:|:----:|
 | 3. Implementación | Usuario/Dispositivo | Diseñador UX/UI |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:-------------------:|:------------------------- :|:---------------------:|
 | 4 | 4 | 4 |

 |Recursos ahorrados |
 |:----------------------------------------------------------:|
 | Red / Consultas |

 ### Descripción

 Redes sociales importantes como Facebook Twitter Pinterest etc. Proporcionan plugins listos para instalar en las páginas 
 web para mostrar botones de "Compartir" y contadores de "Me gusta". Estos plugins de JavaScript consumen muchos recursos,
 ya que requieren numerosas peticiones y archivos pesados para funcionar. Es preferible utilizar enlaces directos, como HTML. 
 Estos enlaces pueden generarse manualmente o mediante herramientas como https://www.sharelinkgenerator.com/.


 ### Ejemplo

 Todas las redes sociales proporcionan URL que permiten a sus miembros compartir páginas web:
 - Compartir en Facebook: https://www.facebook.com/sharer/sharer.php?u=XXXXX
 - Me gusta en Facebook: https://www.facebook.com/plugins/like.php?href=XXXXX
 -Twitter: https://twitter.com/intent/tweet?url=XXXXX

Es posible crear un botón que abra una ventana emergente como las herramientas oficiales, por ejemplo con el siguiente código :

 ```html
 <tipo de botón = "botón" onclick = "window.open('https://www.facebook.com/sharer/sharer.php?u=XXXXX' '' 'menubar=no toolbar=no redimensionable = sí barras de desplazamiento=sí alto=500 ancho=700')">
 Comparto esta página en Facebook.
 </botón>
 ```
Para ir más lejos : :
 https://www.nuweb.fr/736



 ### Regla de validación

 | El número de... | es igual o menor que |
 |----------------------|:-------------------------:|
 | librairies externas | 0 |
