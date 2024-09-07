---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Evitar animaciones JavaScript/ CSS
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3 | V4  |
|:-------:|:----:|:----:|:----:|
|   810   | 48  | 39  |  |

### Categorías

| Ciclo de vida | Partes | Responsable  |
|:---------:|:----:|:----:|
| 2. Diseño | Usuario/Terminal | Diseñador UX/UI |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 5 |

|Recursos ahorrados |
|:----------------------------------------------------------:|
| Procesador/ Memoria RAM  |

### Descripción

Las animaciones JavaScript/CSS pueden ser muy costosas en términos de ciclos de CPU y consumo de memoria.
Todas ellas desencadenan una acción de tipo (re)paint/(re)?ow muy costosa en recursos. Por lo tanto, hay que evitar al máximo las animaciones y utilizarlas sólo cuando sean indispensables.

Si no puede prescindir de una animación, limitese a las propiedades CSS `opacity` y `transform`, y a las funciones asociadas `translate`, `Rotate`, `scale` de `transform`. Ambas propiedades son optimizadas automáticamente por el navegador, y la animación puede ser compatible con el procesador de gráficos (GPU). El sitio [www.csstriggers.com](https://csstriggers.com/) enumera las acciones en el DOM desencadenadas por una animación.

Para que el navegador pueda reducir al mínimo los recursos consumidos por la animación, puede avisarle de que una animación va a tener lugar gracias a la instrucción `will-change`.

Para obtener más información:
https://web.dev/animations-guide/

### Ejemplo

```css
.box {
	will-change: transform, opacity;
}
```
### Solución alternativa

También puede dejar que sus usuarios elijan, a través de las preferencias de sus navegadores y la media query `prefers-reduced-motion`, si quieren o no reproducir la animación. La animación solo se reproduce si el usuario no ha definido ninguna preferencia.

```css
@media (prefers-reduced-motion: no-preference ) {
  . animación {
	animación: fadein 4s Ease;
  }
}
```

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de animaciones JS/ CSS por página  | 2 |


