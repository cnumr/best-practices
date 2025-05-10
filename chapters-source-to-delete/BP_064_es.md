## Almacenar en caché los datos calculados que se utilizan con frecuencia
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3 | V4  |
|:-------:|:----:|:----:|:----:|
|  47   | 62  | 64 | |

### Categorías

| Ciclo de vida | Partes | Responsable |
|:---------:|:----:|:----:|
| 2. Diseño | Red | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 3 | 4 |

|Recursos ahorrados |
|:----------------------------------------------------------:|
| Procesador/ Memoria RAM |

### Descripción

Cuando los cálculos de valores o datos son costosos en recursos, almacene los valores en caché si no cambian, para no repetir estas operaciones.
Los sistemas de caché de tipo key-value store están diseñados para almacenar estos datos. Por lo general, se montan completamente en memoria RAM, lo que genera un gran ahorro de ciclos de CPU si los datos calculados se solicitan muy a menudo.

### Ejemplo

El número de contenidos (por ejemplo, productos) de una categoría se calcula cuando no se actualiza con mucha frecuencia. Almacenar el número de elementos de cada categoría permite ahorrar ciclos de CPU.

Los tokens de acceso OAuth2 tienen una fecha de caducidad. Almacenar en caché el token y su fecha de caducidad evita llamadas innecesarias al servidor de autorización y la necesidad de revalidar el token.

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de datos poco volátiles, que requieren un cálculo y a los que se accede varias veces, no colocados en un sistema de caché  | 0 |
