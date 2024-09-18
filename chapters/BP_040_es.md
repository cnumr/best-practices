## Utilizar sólo las partes esenciales de las bibliotecas JavaScript y frameworks CSS

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   811   | 77  | 40  |     |     |

### Categorías

| Ciclo de vida | Partes |            Responsable            |
| :-----------: | :----: | :-------------------------------: |
|   2. Diseño   |  Red   | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| :----------------: | :--------------------------------------: | :---------------: |
|         4          |                    4                     |         4         |

| Recursos ahorrados |
| :----------------: |
|   CPU/ RAM/ Red    |

### Descripción

Bibliotecas JavaScript como jQuery y frameworks CSS listos para usar (Bootstrap, skeleton, Gumby, foundation...) son herramientas excelentes para realizar sitios rápidamente, ya que satisfacen casi todas las necesidades más comunes.
Por otro lado, por lo general solo se utiliza una pequeña parte de ellos; pero estos marcos y bibliotecas no se basan todos en una arquitectura modular, lo que obliga al usuario a descargar toda la biblioteca para utilizar solo un pequeño porcentaje de sus funcionalidades.

En la medida de lo posible, es preferible prescindir de estas bibliotecas (véase https://youmightnotneedjquery.com) o conservar únicamente las porciones realmente utilizadas (véase https://getbootstrap.com/customize).

Utilizar un Bundler (ej: Webpack) permite hacer fácilmente el tree shaking, es decir eliminar del código "muerto" entonces no utilizado.

### Ejemplo

![img\1.png](img\1.png)

Algunos frameworks, aquí Bootstrap, permiten crear bibliotecas a medida que contienen solo las porciones realmente utilizados por el sitio, lo que reduce el peso de las bibliotecas y los recursos consumidos durante la ejecución.

### Principio de validación

| El número ..                                                 | es inferior o igual a |
| ------------------------------------------------------------ | :-------------------: |
| de librerías en las que se utilicen partes no indispensables |           1           |
