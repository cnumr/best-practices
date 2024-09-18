## Reducir los registros del servidor según sea necesario

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   82    | 99  | 103 |     |     |

### Categorías

| Ciclo de vida |     Partes      |            Responsable            |
| :-----------: | :-------------: | :-------------------------------: |
| 4. Producción | Centro de datos | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| :----------------: | :--------------------------------------: | :---------------: |
|         2          |                    2                     |         3         |

|         Recursos ahorrados          |
| :---------------------------------: |
| Procesador/ Memoria/ Almacenamiento |

### Descripción

Dado que los registros de los servidores (web, aplicativo, base de datos) pueden ser muy grandes, se recomienda configurarlos en su conjunto.
Ajustando al máximo el nivel log de la aplicación (ejemplo: solo información/warning/error) y rastreando solo la información relevante, se evitan las escrituras en el disco que pueden ser masivas, lo que limita el consumo de ciclos CPU y reduce el espacio de almacenamiento necesario.

Para evitar saturar los discos, también se recomienda establecer un tiempo de retención y una rotación de los registros según la necesidad durante el funcionamiento del servicio.

### Ejemplo

Los registros de acceso de un servidor Apache se pueden configurar de la siguiente manera para excluir recursos estáticos y fuentes RSS:

```apacheconf
SetEnvIf Request_URI " .(ico|pdf|?v|jpg|jpeg|png|gif| js|css|gz|swf|txt) $" dontlog
SetEnvIf Request_URI " /rss/" dontlog
CustomLog/var/log/apache/access.log Combined env=! dontlog
```

### Principio de validación

| El número ..                           | es inferior o igual a |
| -------------------------------------- | :-------------------: |
| de logs sin tiempo máximo de retención |           0           |
