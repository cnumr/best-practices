## Usar servidores virtualizados
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3 | V4  |
|:-------:|:----:|:----:|:----:|
|   70   | 87  | 89  |  	|

### Categorías

| Ciclo de vida | Partes | Responsable |
|:---------:|:----:|:----:|
| 4. Producción | Centro de datos | Administrador de sistemas |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 3 | 3 |

|Recursos ahorrados |
|:----------------------------------------------------------:|
| Procesador/ Memoria RAM |

### Descripción

La virtualización es una tecnología que permite crear y ejecutar representaciones virtuales de un ordenador en una o varias máquinas físicas. El software de virtualización asigna los recursos entre los diferentes entornos virtuales según sus necesidades.

Como resultado, la virtualización permite:
* un ahorro en el material por mutualización
* uso óptimo de los recursos (RAM, CPU, disco)

Esto reduce la cantidad de residuos electrónicos (RAEE) y el consumo de energía en comparación con el uso de varios servidores físicos.

La contenedorización es el compañero de la virtualización: una máquina virtual puede acomodar un servicio de contenedorización. Permitirá ejecutar de forma aislada varias aplicaciones en el mismo sistema operativo.

### Ejemplo

Utilizar herramientas de virtualización como VMware, Xen, KVM, etc.

Utilizar herramientas de contenedores como Docker, Kubernetes, etc.

En lugar de utilizar cuatro servidores dedicados para cuatro proyectos, y cargarlos hasta un 20% de su capacidad, mutualizar los recursos mediante la creación de un hipervisor. En efecto, una sola máquina física podrá ofrecer los mismos servicios que los cuatro servidores dedicados.

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de aplicaciones no alojadas de forma mutualizada | 0 |


