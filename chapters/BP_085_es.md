## Tener una estrategia de fin de vida para el sitio web

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:-----:|:---:|:----:|
 | 1030 | | 85 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:--------------:|:----------:|:-----------:|
 | 7. Fin de vida | Centro de datos | PO |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------: |:-----------------:|
 | 3 | 2 | 3 |

 | Recursos guardados |
 |:----------------------------------------------- ----------:|
 | Procesador / RAM / Red / Consultas / Almacenamiento |

 ### Descripción

La mayoría de los entornos (POC: prueba de concepto prueba aceptación etc.) eventualmente terminan quedando obsoletos y ya no son necesarios.
Alrededor del 25% de los servidores físicos y el 20% de los servidores virtuales (VM) se convierten en zombis lo que significa que utilizan recursos mientras esperan ser utilizados.
 Esto representa impactos ambientales y económicos evitables.

La implementación de un plan al final de su vida puede prevenir este tipo de situaciones.

Un plan simple para el final de su vida útil consiste en responsabilizar a alguien de decidir cuándo detener el servicio. Su función sería vigilar la actividad de este servicio hasta que decidan detenerlo.
Otro método consiste en redactar un escenario de final de vida (fecha de caducidad etc.) y asignar el presupuesto adecuado desde el principio.
Una tercera opción sería ampliar la vida útil del servicio.

 Detener un servicio implica:

 - Liberación de recursos: desmantelamiento del servicio sus dependencias herramientas utilizadas por el equipo de desarrollo (por ejemplo canal Teams).
 - Eliminar archivar o gestionar datos de otro modo (incluidos los sistemas de gestión de documentos y seguimiento de errores).
 - Reasignación de instalaciones equipos y otros recursos del proyecto (incluido el código fuente).
 - Valorar las competencias adquiridas durante la vida del proyecto.

 ### Ejemplo

Son posibles varios escenarios de fin de vida útil al migrar datos o aplicaciones a un entorno de nube:

 - Copiar y pegar los datos o aplicaciones existentes en la nube mediante el desmantelamiento del entorno anterior.
 - Refactorización con cambios de arquitectura y código que pueden cuestionar el entorno existente. Por ejemplo cuestionar las funcionalidades no utilizadas reservadas para un uso hipotético ulterior...

 ### Regla de validación

 | El número de... | es igual o menor que |
 |-------------------------------------------------|:----------- -------------:|
 | sitios web sin plan de fin de vida | 0 |
