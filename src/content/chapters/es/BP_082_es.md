---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Optimizar el tamaño de las cookies
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  |
|:-------:|:----:|:----:|:----:|
|  65   | 82  | 82  | |

### Categorías

| Ciclo de vida | Partes | Responsable |
|:---------:|:----:|:----:|
| 3. Realización (fabricación/ desarrollo) | Red | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 4 | 3 |

| Recursos ahorrados |
|:----------------------------------------------------------:|
| Red  |

### Descripción

Una cookie permite mantener un estado entre el navegador del internauta y el servidor web remoto gracias a un dato compartido.
Este dato se transfiere a cada solicitud HTTP.
Por lo tanto, es necesario optimizar al máximo su tamaño y suprimirlo en cuanto su presencia ya no sea obligatoria.

### Ejemplo

Se puede eliminar una cookie cuando ya no es útil especificando un período de caducidad nulo o negativo, de la siguiente manera:
```
Set-Cookie: user_mavariable=; Max-Age=0
```
Consulte la RFC 6265 de IETF (Internet Engineering Task Force) para obtener más información sobre cookies:
https://datatracker.ietf.org/doc/html/rfc6265

#### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| Cookies no útiles o no optimizadas  | 0 |
