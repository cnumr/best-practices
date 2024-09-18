## Preferir los glifos a las imágenes

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   20    | 18  | 30  |     |     |

### Categorías

|              Ciclo de vida               | Partes |   Responsable   |
| :--------------------------------------: | :----: | :-------------: |
| 3. Realización (fabricación/ desarrollo) |  Red   | Diseñador UX/UI |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| ------------------ | :--------------------------------------: | :---------------: |
| 4                  |                    3                     |         4         |

|       Recursos ahorrados       |
| :----------------------------: |
| Almacenamiento/ Red/ Consultas |

### Descripción

Los glifos son caracteres tipográficos específicos, incluidos en fuentes como las de un sistema operativo, utilizables en sustitución de imágenes monocromáticas como símbolos o pictogramas (chevron, triángulo, punto, cuadrado, signos astrológicos, etc.) hasta las ilustraciones que permiten:

- reducir el ancho de banda ahorrando peso
- reducir el número de solicitudes
- reducir la complejidad del DOM, especialmente con numerosos pictogramas SVG

### Ejemplo

Se logró una ganancia del 91% del peso incluyendo pictogramas e ilustraciones vectoriales en un icono hecho a través de [Font Forge](https://fontforge.org/en-US/).

### Principio de validación

| El número ..                                                                            | es inferior o igual a |
| --------------------------------------------------------------------------------------- | :-------------------: |
| de imágenes que podrían haberse sustituido por un glifo (símbolo de fuente de carácter) |           0           |
