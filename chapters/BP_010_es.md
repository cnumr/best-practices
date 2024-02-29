## Almacenar datos estáticos localmente

### Identificadores

| GreenIT | V2  | V3  | V4  |
|:-------:|:---:|:---:|:---:|
| 205     | 10  | 10  |     |

### Categorías

| Ciclo de vida | Niveles | Responsable |
|:-----------------:|:----------:|:-------------- -------:|
| 3. Implementación | Centro de datos | Arquitecto / Desarrollador |

### Indicaciones

| Prioridad | Dificultad de implementación | Impacto ecológico |
|:---------:|:----------------------------:|:-----------------:|
| 4         | 3                            | 4                 |

| Recursos ahorrados |
|:------------------:|
| Red / Solicitudes  |

### Descripción

Es posible almacenar datos estáticos localmente en el lado del cliente con el soporte de bases de datos clave-valor (IndexedDB, Web Storage) y de la API Cache Storage en todos los navegadores.

El uso de este enfoque permite reducir la cantidad de solicitudes HTTP, lo que ahorra recursos. Esto puede llevar a reducir la cantidad de equipos necesarios en el lado del servidor, reduciendo así los costos ambientales asociados.

También es mejor para el rendimiento y la capacidad de respuesta de la aplicación: es mucho más rápido utilizarla, ya que los datos se almacenan localmente. Reduce la obsolescencia de los dispositivos en el lado del cliente, ampliando la vida útil del hardware.

### Regla de validación

| El número de...                         | es igual o menor que |
|-----------------------------------------|:--------------------:|
| datos estáticos no guardados localmente | 25%                  |
