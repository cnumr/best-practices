## Evitar el uso de imágenes matriciales para la interfaz

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   161   | 21  | 35  |     |     |

### Categorías

| Ciclo de vida |      Partes      | Responsable |
| :-----------: | :--------------: | :---------: |
|    5. Uso     | Usuario/Terminal |   Usuario   |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| ------------------ | :--------------------------------------: | :---------------: |
| 4                  |                    4                     |         4         |

| Recursos ahorrados |
| :----------------: |
|        Red         |

### Descripción

Elegir el formato de imagen correcto es crucial para evitar transportar bytes innecesariamente y ahorrar ancho de banda.
Además, con la multiplicación de los terminales, los tamaños de pantalla y el aumento de su resolución, un enfoque vectorial debe tener prioridad sobre las imágenes de matriz.
Gracias a esta buena práctica, la interfaz es independiente de la resolución de la pantalla. Por lo tanto, también se limita la deuda técnica.
La primera regla es reemplazar las imágenes matriciales (GIF, PNG, JPEG, webp, etc.) por estilos (CSS), pictos, glifos o iconos proporcionados por una webfont o una fuente estándar. El usuario no tiene ningún recurso adicional para descargar.
Si no es posible utilizar CSS o una fuente estándar (ya instalada en el terminal del internauta), también puede:

- utilizar una webfont;
- utilizar una imagen vectorial en formato estándar SVG.

### Ejemplo

![img.png](img.png)

Esta imagen de 198 x 198 píxeles pesa:

- 118 KB en formato de matriz no comprimido;
- 6,5 KB en JPEG (compresión al 90 %);
- 3,8 KB en Papua Nueva Guinea;
- 0,7 KB en SVG minificado.

El formato vectorial es, en este caso preciso, de 5 a 10 veces menos pesado que un formato matricial, pudiendo ser recortado al infinito.

### Principio de validación

| El número ..                                | es inferior o igual a |
| ------------------------------------------- | :-------------------: |
| de imágenes matriciales para la URL probada |           5           |
