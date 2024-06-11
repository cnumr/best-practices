## Escribir selectores CSS eficaces
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
| 13   | 27 | 24 |   |

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
|  Procesador  |

### Descripción

Favorecer los selectores basados en ID o clases. De este modo, se filtran más rápidamente, ahorrando ciclos de CPU a la máquina que interpreta las reglas.

### Ejemplo

No escriba lo siguiente:
```css
treeitem[mailfolder="true"] > treerow > treecell {...}
```
sino más bien:
```css
.treecell-mailfolder {...}
```

No escriba lo siguiente:
```css
treehead > treerow > treecell {...}
```
sino más bien:
```css
.treecell-header {...}
```

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de selectores CSS que no utilicen identificación, clase o atributo | 0 |


