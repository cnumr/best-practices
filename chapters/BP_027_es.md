## Proporcionar un CSS para impresión

 ### Identificadores

 | GreenIT | V2 | V3 | V4 |
 |:-------:|:----:|:----:|:----:|
 | 16 | 30 | 27 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:---------:|:----:|:----:|
 | 3. Implementación | Usuario/Dispositivo | Diseñador UX/UI |

 ### Indicaciones

| Prioridad | Dificultad de implementación | Impacto ecológico |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 4 | 3 |

|Recursos guardados |
|:----------------------------------------------------------:|
| Red |

 ### Descripción

Además del servicio prestado al usuario de Internet, la impresión de hojas de estilo CSS reduce el número de páginas impresas lo que indirectamente reduce la huella ecológica del sitio web. El diseño debe ser lo más sencillo posible con fuentes que ahorren tinta (Century Gothic por ejemplo). Recuerde también ocultar encabezados, pies de página, menús, barras laterales, imágenes que no sean contenido real, etc.

### Ejemplo

 Este CSS para impresión "limpia" las páginas mostradas para proporcionar una impresión refinada:
```css
bodysuit {
background-color:#ﬀf; font-family :Serif; font-size:15pt;
}
#page { margin:0;
border:none;
}
#banner, #menuright, #footer { display: none;
}
h1#top { margin:0;
padding:0;
text-indent:0; line height: 25pt; font-size:25pt;
} (...)
```

 ### Regla de validación

 | El número de... | es igual o menor que |
 |----------------------|:-------------------------:|
 | falta imprimir CSS | 1 |
