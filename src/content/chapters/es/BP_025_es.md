---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Agrupar declaraciones CSS similares
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   14   | 28  | 25  | |

### Categorías

| Ciclo de vida | Partes | Responsable  |
|:---------:|:----:|:----:|
| 3. Realización (fabricación/ desarrollo) | Red | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 3 | 2 |

|Recursos ahorrados |
|:----------------------------------------------------------:|
| Red  |

### Descripción

Cuando varios elementos del DOM (Document Object Model) tienen propiedades CSS comunes, declararlos juntos en la misma hoja de estilos. Este método ayuda a reducir el peso de la CSS.

### Ejemplo

No escriba lo siguiente:
```css
h1 {
color de fondo: gris; color: navy;
}

h2 {
color de fondo: gris; color: navy;
}

h3 {
color de fondo: gris; color: navy;
}
```

sino más bien:
```css
h1, h2, h3 {
color de fondo: gris; color: navy;
}
```

Si desea asegurarse de que se repeta esta regla, puede implementar el módulo [stylelint] (https://stylelint.io/) en su proyecto (`devDependencies`) y utilizar la regla `Shorthand-property-no-Redundant-values`

Se puede encontrar la lista completa de estas propiedades abreviadas en el sitio [MDN](https://developer.mozilla.org/fr/docs/Web/CSS/Propri%C3%A9t%C3%A9s_raccourcies)

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de declaraciones CSS similares no agrupadas | 1  |


