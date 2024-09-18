## Evitar realizar consultas SQL dentro de un bucle

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   55    | 71  | 72  |     |     |

### Categorías

|              Ciclo de vida               |     Partes      |            Responsable             |
| :--------------------------------------: | :-------------: | :--------------------------------: |
| 3. Realización (fabricación/ desarrollo) | Centro de Datos | Arquitecto Software/ Desarrollador |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| :----------------: | :--------------------------------------: | :---------------: |
|         3          |                    3                     |         3         |

|    Recursos ahorrados    |
| :----------------------: |
| Procesador/ Memoria/ Red |

### Descripción

Las consultas SQL dentro de un bucle plantean grandes problemas de rendimiento, especialmente si el(s) servidor(s) SQL no está (no están) en la máquina local. Estos servidores están optimizados para procesar múltiples selecciones, inserciones o cambios en una sola consulta o transacción.

Si se usan incorrectamente, estas consultas consumen innecesariamente ciclos de CPU, memoria RAM y ancho de banda.

### Ejemplo

No escriba lo siguiente:

```php
foreach ($userlist as $user) {
	$query = 'INSERT INTO users (?rst_name,last_name) VALUES("'. $user['?rst_name'] .'", "'. $user['last_ name'] .'");
	mysql_query($query);
}
```

sino más bien:

```php
$userdata = array();
foreach ($userlist as $user) {
	$userdata[] = '("'. $user['?rst_name'] .'", "'.
	$user['last_name'] . '")';
}
$query = 'INSERT INTO users (?rst_name,last_name) VALUES'. implode(',', $userdata); mysql_query($query);
```

### Principio de validación

| El número ..                        | es inferior o igual a |
| ----------------------------------- | :-------------------: |
| De consultas SQL dentro de un bucle |           0           |
