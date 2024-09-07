---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Eliminar todas las advertencias y avisos
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3 | V4  |
|:-------:|:----:|:----:|:----:|
| 51   | 65 | 70  | |

### Categorías

| Ciclo de vida | Partes | Responsable |
|:---------:|:----:|:----:|
| 4. Producción | Centro de datos | Administrador de sistemas |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 2 | 3 | 2 |

|Recursos ahorrados |
|:----------------------------------------------------------:|
| Procesador/ Almacenamiento   |

### Descripción

Las advertencias y avisos ralentizan los servidores de aplicaciones como PHP, ya que estos deben rastrear el origen de los errores y registrar en los diferentes registros del sistema los mensajes que explican los problemas encontrados.

### Ejemplo

Evitar:
```html
<html>
 	<body>
     	<form method="post" accept-charset="utf-8">
         	<label>
             	First Name
             	<input type="text" name="?rst_name" value="<?php print $_POST['?rst_name'] ?>" placeholder="">
        	</label>	 
         	<label>
              	Last Name
              	<input type="text" name="last_name" value="<?php print $_POST['last_name'] ?>" placeholder="">
         	</label>	 
     	</form>
 	</body>
</html>
```
`$_POST['?rst_name']` y `$_POST['last_name']`  generan avisos porque no están necesariamente definidos.


### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de advertencias y avisos en producción | 0  |



