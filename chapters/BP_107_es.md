## Comprimir documentos

### Identificadores

| GreenIT | V2  | V3  | V4  |
| :-----: | :-: | :-: | :-: |
|   97    | 108 | 107 |     |

### Categorías

|  Ciclo de Vida  |        Niveles         |  Responsable  |
|:---------------:|:----------------------:|:-------------:|
|     5. Uso      |  Usuario/Dispositivo   |    Usuario    |

### Indicaciones

| Prioridad | Dificultad de implementación | Impacto ecológico |
|:---------:|:----------------------------:|:-----------------:|
|     3     |              2               |         4         |

| Recursos ahorrados |
|:------------------:|
| Red/Almacenamiento |

### Descripción

Comprime todos los documentos que se pueden descargar desde una página web, a menos que la compresión no aporte mayor
beneficio (por ejemplo: archivos PDF que esten optimizados para la web).

### Ejemplo

Un archivo de tipo .doc que pesa 7.8 MB se reducirá a 5.5 MB después de la compresión, lo que representa una ganancia del 30% (compresión WinZip por defecto). Los formatos de archivos de Office que se pueden comprimir fácilmente incluyen:

- Documentos de texto (.doc, .docx, .rtf, .txt, etc.);
- Hojas de cálculo (.xls, .xslx, etc.);
- Presentaciones (.ppt, .pptx, etc.);
- documentos PDF;
- Contenidos multimedia (imágenes, audio y vídeo).

### Regla de validación

| El número de ...         | es igual o menor que |
|:-------------------------|:--------------------:|
| documentos sin comprimir |          0           |
