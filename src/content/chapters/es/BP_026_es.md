---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Utilizar notaciones CSS abreviadas
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   15   | 29  | 26  | |

### Categorías

| Ciclo de vida | Partes | Responsable  |
|:---------:|:----:|:----:|
| 3. Realización (fabricación/ desarrollo) | Red | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|-------------------|:-------------------------:|:---------------------:|
| 2 | 3 | 2 |

|Recursos ahorrados |
|:----------------------------------------------------------:|
| Red  |

### Descripción

Utilizar calificaciones CSS abreviadas para reducir el peso de la hoja de estilos.

### Ejemplo

No escriba lo siguiente:
```css
margin-top:1em; margin-right:0; margin-bottom:2em; margin-left:0.5em;
```
sino más bien:
```css
margin:1em 0 2em 0.5em;
```
Para ir más lejos:
 - https://www.w3.org/TR/CSS
 - https://www.456bereastreet.com/archive/200502/efficient_css_with_shorthand_properties/

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de calificaciones CSS no abreviadas  | 0% |

