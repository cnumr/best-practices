## Recortar los CSS

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|    9    | 24  | 21  |     |     |

### Categorías

|              Ciclo de vida               | Partes |   Responsable   |
| :--------------------------------------: | :----: | :-------------: |
| 3. Realización (fabricación/ desarrollo) |  Red   | Diseñador UX/UI |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| :----------------: | :--------------------------------------: | :---------------: |
|         4          |                    4                     |         4         |

| Recursos ahorrados |
| :----------------: |
|  Procesador/ Red   |

### Descripción

Utilizar un conjunto de CSS en lugar de un solo, y llamar solo a los CSS útiles según el contexto.Ese método ayuda a limitar el peso de la página en la primera descarga, lo que ahorra ancho de banda y reduce la carga de la CPU.

### Ejemplo

Cortar CSS según la lógica funcional:

- diseño;
- contenido;
- módulo x;
- módulo y;
- etc...

En el caso de un sitio funcionalmente rico, esto permitirá excluir todas los CSS de los módulos no utilizados.
El número de CSS debe seguir siendo razonable, más por cuestiones de mantenibilidad que de rendimiento, en la medida en que los CSS generales («diseño» y «contenido» en nuestro ejemplo) serán concatenadas en un solo archivo.
Los CSS complementarios (aquí, «módulo x» y «módulo y») se descargarán según el contexto (página, funcionalidades...).

### Principio de validación

| El número ..                      | es inferior o igual a |
| --------------------------------- | :-------------------: |
| de librerías CSS es mayor o igual |           2           |
