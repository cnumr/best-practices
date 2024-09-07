---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Limitar el número de CSS
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   10   | 25  | 22  | |

### Categorías

| Ciclo de vida | Partes | Responsable  |
|:---------:|:----:|:----:|
| 3. Realización (fabricación/ desarrollo) | Red | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 4 | 4 |

|Recursos ahorrados |
|:----------------------------------------------------------:|
| Red/ Consultas  |

### Descripción

Limitar el nombre de CSS para no multiplicar las solicitudes HTTP y simplificar la representación del lado del navegador. Utilizar una hoja de estilo común para todos los elementos comunes, independientemente de la pantalla, y un archivo por resolución de destino o media queries.

Ten cuidado, hay que integrar estos archivos directamente en el código HTML y NO con directivas @import en los propios archivos CSS. Al cortar de esta manera, el terminal del usuario elegirá lo que se ajusta a él y dejará al lado la carga de los archivos que no necesita.

Si es necesario, se pueden cargar archivos CSS para algunos componentes en función del contexto.

### Ejemplo

```
<link rel='stylesheet' id='css-css)  href='comunes.css' type='text/css' media='all' />
<link rel='stylesheet' id='css-xs-css)  href=pequenas-pantallas.css' type='text/css' media='(máx-width: 959px)' />
<link rel='stylesheet' id='css-sm-css)  href='tabletas.css' type='text/css' media='(min-width: 768px)' />
<link rel='stylesheet' id='css-mdlg-css href='grandes-pantallas.css' media='(min-width: 960px)' />
<link rel='stylesheet' id='css-print-css)  href='print.css' type='text/css' media='print' />
```

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de archivos CSS  | 10  |


