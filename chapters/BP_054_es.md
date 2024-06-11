## Reducir el acceso al DOM a través de JavaScript
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2 | V3 | V4 |
|:-------:|:----:|:----:|:----:|
|   32   | 42 | 54 | |

### Categorías

| Ciclo de vida | Partes | Responsable |
|:---------:|:----:|:----:|
| 3. Realización (fabricación/ desarrollo) | Usuario/Terminal | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|-------------------|:-------------------------:|:---------------------:|
| 3 | 3 | 3 |

| Recursos ahorrados |
|:----------------------------------------------------------:|
| Procesador/ RAM  |

### Descripción

El acceso al DOM (Document Object Model) vía JavaScript es un procedimiento pesado que consume muchos ciclos de procesador (CPU). Hay que reducir al mínimo el acceso.

Para ello, puede asignar el nodo a variables que reutilizará durante el ciclo de vida de la aplicación, lo que evita que se vuelva a recorrer el árbol cada vez que se manipule el documento.

También es posible utilizar bibliotecas de tipo «Shadow DOM», que optimizan las modificaciones del árbol mediante un sistema por lotes.

### Ejemplo

Para obtener más información, consulte el proyecto de Shadow DOM del W3C:
https://www.w3.org/TR/shadow-dom/ 
y las recomendaciones del W3C para reducir el acceso al DOM a través de JavaScript:
https://www.w3.org/wiki/JavaScript_best_practices#Keep_DOM_access_to_a_minimum


### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
|  de accesos a un elemento HTML sin pasar por una variable local | 0  |


