## Almacenar datos en la nube

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   71    | 92  | 93  |     |     |

### Categorías

| Ciclo de vida |     Partes      |        Responsable        |
| :-----------: | :-------------: | :-----------------------: |
| 4. Producción | Centro de datos | Administrador de sistemas |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| :----------------: | :--------------------------------------: | :---------------: |
|         2          |                    3                     |         2         |

| Recursos ahorrados |
| :----------------: |
|   Almacenamiento   |

### Descripción

Para optimizar el espacio de almacenamiento necesario para los recursos de un sitio web o de un servicio en línea, puede ser interesante utilizar soluciones de cloud computing. Así pues, si bien se dispone de una solución evolutiva (Elastic en inglés), no se monopolizan recursos inútilmente. El otro interés es alojar los recursos estáticos en un dominio sin cookies. Por lo tanto, se evita transportar la cookie con cada recurso transferido al navegador (véase la buena práctica nº96).

Por lo tanto, este enfoque es adecuado para imágenes y otros recursos estáticos. Dado que no es necesario multiplicar los dominios (véase la buena práctica nº 55), lo más sencillo es agrupar todos los recursos estáticos en un único servicio de almacenamiento en línea.

### Ejemplo

Para la realización de un concurso basado en testimonios de vídeo, es más eficaz utilizar el servicio de almacenamiento S3 de Amazon que añadir nuevos discos duros a los servidores existentes.

### Principio de validación

| El número ..                                                                                   | es inferior o igual a |
| ---------------------------------------------------------------------------------------------- | :-------------------: |
| de recursos, datos del sitio web que no se almacenan en una solución de computación en la nube |           0           |
