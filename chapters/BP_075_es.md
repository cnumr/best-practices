## Optimizar las consultas de bases de datos

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   59    | 74  | 75  |     |     |

### Categorías

|              Ciclo de vida               |     Partes      |            Responsable            |
| :--------------------------------------: | :-------------: | :-------------------------------: |
| 3. Realización (fabricación/ desarrollo) | Centro de Datos | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| :----------------: | :--------------------------------------: | :---------------: |
|         3          |                    3                     |         3         |

|    Recursos ahorrados    |
| :----------------------: |
| Procesador/ Memoria/ Red |

### Descripción

La base de datos es generalmente un componente esencial de las aplicaciones, y las consultas realizadas para recuperar y grabar datos son numerosas; ejecutadas con frecuencia, las consultas tienen una influencia importante en el consumo de recursos de la solución.

En este sentido es importante prestar atención a estas consultas y validar, al menos para las que más cuestan el, que están correctamente optimizadas.

Las pistas clásicas de optimización son:

- Traer menos datos y limitarse a lo necesario. Por ejemplo, para las bases de datos relacionales, la cláusula `LIMIT` limita el número de líneas del resultado. Cuando es posible, el uso reduce la cantidad de datos transferidos. El aumento del rendimiento será aún más importante si los registros contienen un gran número de campos grandes.
- Utilizar únicamente los campos que sean necesarios en las tablas o documentos utilizados. Para evitar la transferencia innecesaria de datos que no se utilizarán, y no utilizar recursos del servidor de base de datos y del servidor de aplicaciones para manipularlos.
- Añadir índices a los campos utilizados como claves. Estos dependen de su modelo. Añadirlos puede cambiar completamente el rendimiento de una consulta. Ten cuidado, añadir un índice alarga la escritura, ya que tienen que actualizarse para los documentos añadidos, modificados o eliminados. Hay que hacerlo si hay más lecturas que escrituras o si la lectura es particularmente costosa.
- Utilizar las herramientas del sistema de gestión de bases de datos que permiten analizar las consultas para identificar los puntos de mejora, por ejemplo EXPLAIN para un RDBMS.
- Almacenar en caché los resultados de las consultas más costosas, así como los datos que cambian poco o nunca (datos de referencia).
- Posiblemente, modificar el modelo de datos para poder acceder más fácilmente a la información sin uniones (desnormalización)

### Ejemplo

He aquí un primer ejemplo, con la cláusula `LIMIT` :

Si desea mostrar solo los 25 primeros registros de una tabla que contiene el nombre y el apellido de las personas, reemplace al seleccionar:

```sql
SELECT firstname, lastname FROM people
```

por:

```sql
SELECT firstname, lastname FROM people LIMIT 0, 25
```

Otro ejemplo, con la creación de un índice:

```sql
CREATE INDEX idx_FName_LName ON people(firstname,lastname)
```

Después de este comando, el sistema de gestión de base de datos podrá encontrar más rápidamente las líneas de `people` a partir de las informaciones (firstname,lastname)..

### Principio de validación

| El número ..                                                       | es inferior o igual a |
| ------------------------------------------------------------------ | :-------------------: |
| de consultas de bajo rendimiento identificadas como no optimizadas |           0           |
