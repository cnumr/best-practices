---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Almacenar en caché los objetos a los que se accede con frecuencia en JavaScript
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2 | V3 | V4 |
|:-------:|:----:|:----:|:----:|
| 33   | 36  | 49   | |

### Categorías

| Ciclo de vida | Partes | Responsable  |
|:---------:|:----:|:----:|
| 3. Realización (fabricación/ desarrollo) | Red | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Recursos ahorrados |
|:----------------------------------------------------------:|
| Procesador   |

### Descripción

El acceso al DOM (Document Object Model) es costoso en términos de recursos de procesador (ciclos de CPU). Así, cuando use el mismo elemento del DOM varias veces desde JavaScript, almacene su referencia en una variable para no volver a navegar por el DOM para ese mismo elemento.

### Ejemplo

No escriba lo siguiente:
```javascript
document.getElementById('menú'). property1 = 'foo'; document.getElementById('menú').property2 = 'bar';
```

sino más bien:
```javascript
var mmenu = document.getElementById('menú');
menú.property1 = 'foo';
menú.property2 = 'Bar'
```

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de datos constantes (o no volátiles) recuperados varias veces sin ser almacenados en caché  | 0  |


