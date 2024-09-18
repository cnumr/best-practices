## Evitar las redirecciones

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   45    | 97  | 95  |     |     |

### Categorías

|       Ciclo de vida       | Partes |            Responsable            |
| :-----------------------: | :----: | :-------------------------------: |
| 6. Soporte/ mantenimiento |  Red   | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| :----------------: | :--------------------------------------: | :---------------: |
|         3          |                    3                     |         4         |

|       Recursos ahorrados        |
| :-----------------------------: |
| Procesador/ Red/ Almacenamiento |

### Descripción

Las redirecciones disminuyen el tiempo de respuesta, al tiempo que consumen recursos inútiles. Por lo tanto, hay que evitarlos lo mas posible. Estas redirecciones pueden tener lugar en diferentes niveles: código HTML, código JavaScript, servidor HTTP y servidor de aplicaciones (PHP, etc.).

### Ejemplo

A nivel del servidor HTTP (Apache, en este caso), una redirección consiste en habilitar una reescritura sistemática de las URL a través del archivo
.htaccess:

```apacheconf
<ifmodule mod_alias. c>
	Redirect permanente http:///old_web.es http://new.web.es/
</ifmodule>
```

Es mejor reemplazar manualmente las direcciones estáticas integradas en las páginas web

### Principio de validación

| El número ..     | es inferior o igual a |
| ---------------- | :-------------------: |
| de redirecciones |           1           |
