## Evitar redirecciones

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 45 | 97 | 95 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:------------------------:|:-------:|:---------- ------------------:|
 | 6. Soporte / Mantenimiento | Red | Arquitecto/Desarrollador de Software |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------: |:-----------------:|
 | 3 | 3 | 4 |

 | Recursos guardados |
 |:----------------------------------------------- ----------:|
 | Procesador/Red/Almacenamiento |

 ### Descripción

 Redirige el tiempo de respuesta lento mientras utiliza recursos innecesarios. Por tanto conviene evitarlos en la medida de lo posible. Los redireccionamientos pueden ocurrir en diferentes lugares: código HTML código JavaScript servidor HTTP y servidor de aplicaciones (PHP etc.).

 ### Ejemplo

 A nivel del servidor HTTP (Apache en este caso) las redirecciones implican activar la reescritura sistemática de URL a través del archivo .htaccess:

 ```apacheconf
 <IfModule mod_alias.c>
 Redirección permanente http://old_address.com http://new.address.com/
 </IfModule>
 ```
Es preferible reemplazar manualmente las direcciones estáticas incrustadas en las páginas web.



 ### Regla de validación

 | El número de... | es igual o menor que |
 |----------------------|:------------------------:|
 | redirecciones | 1 |
