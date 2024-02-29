## Optimizar archivos PDF

 ### Identificadores

| GreenIT | V2  | V3  | V4  |
| :-----: | :-: | :-: | :-: |
|   98    | 109 | 108 |     |

 ### Categorías

| Ciclo de Vida |       Niveles       | Responsable |
|:-------------:|:-------------------:|:-----------:|
|    5 . Uso    | Usuario/Dispositivo |   Usuario   |

 ### Indicaciones

| Prioridad | Dificultad de implementación | Impacto ecológico |
|:---------:|:----------------------------:|:-----------------:|
|     3     |              3               |         3         |

|  Recursos ahorrados  |
|:--------------------:|
| Red / Almacenamiento |

 ### Descripción

Asegúrese de que los archivos PDF estén realmente optimizados para la web antes de cargarlos: frecuencia de muestreo y compresión de imágenes, fuentes incrustadas, resolución, etc.
 De ser necesario, permita a los usuarios descargar PDF como capítulos individuales.

 Si desea ofrecer a los usuarios la posibilidad de descargar un lector de PDF, prefiera un software liviano como Sumatra (4.3 MB) en lugar de Adobe Reader (48 MB), reducirá el uso de ancho de banda en un factor de 10 por cada descarga y, lo más importante, resultará en un menor uso de memoria (lo que ayuda a combatir la brecha digital y la obsolescencia programada).

 ### Ejemplo

 En el caso de un informe anual en formato PDF:

 - comprobar que las imágenes estén muy comprimidas y tengan una resolución máxima de 72 ppp;
 - incluir sólo las fuentes principales;
 - divida el informe en capítulos para limitar descargas innecesarias.

 ### Regla de validación

| El número de ...   | es igual o menor que |
|--------------------|:--------------------:|
| PDF no optimizados |          0           |
