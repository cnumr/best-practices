## Usar servidores virtualizados

 ### Identificadores


| GreenIT | V2  | V3  |  V4  |
|:-------:|:---:|:---:|:----:|
|    70   |  87 | 89  |      |

 ### Categorías

 | Ciclo de vida |     Niveles     |        Responsable        |
 |:-------------:|:---------------:|:-------------------------:|
 | 4. Producción | Centro de datos | Administrador del sistema |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:---------:|:----------------------------:|:-----------------:|
 |     3     |             3                |         3         |

 |                      Recursos ahorrados                    |
 |:----------------------------------------------------------:|
 |                       Procesador/RAM                       |

 ### Descripción

La virtualización permite crear y ejecutar representaciones virtuales de una computadora en una o más máquinas físicas.
El software de virtualización asigna recursos entre diferentes entornos virtuales en función de sus necesidades.

Como resultado la virtualización permite:

 - ahorro de hardware gracias a la mutualización
 - uso óptimo de recursos (RAM, CPU, disco)

Este método reduce la cantidad de residuos electrónicos (RAEE) y el uso de energía en comparación con varios servidores físicos.

La contenedorización es otro nivel de virtualización: las máquinas virtuales pueden alojar un servicio de orquestación de contenedores,
permitiendo la ejecución de múltiples aplicaciones de forma aislada en el mismo sistema operativo.

 ### Ejemplo

Utilice herramientas de virtualización como VMware, Xen, KVM, etc.

Utilice herramientas de contenedorización como Docker, Kubernetes, etc.

Es más eficaz mutualizar recursos mediante el uso de un hipervisor que utilizar cuatro servidores dedicados para cuatro proyectos, cada uno de los cuales funciona a una capacidad máxima del 20 %. De esta forma una única máquina física puede proporcionar los mismos servicios que cuatro servidores dedicados.

 ### Regla de validación

 | El número de...                                                         | es igual o menor que |
 |-------------------------------------------------------------------------|:--------------------:|
 | aplicaciones que no utilizan la virtualización para mutualizar recursos |           0          |
