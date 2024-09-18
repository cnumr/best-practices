## Cambiar varias propiedades CSS de una sola vez

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   34    | 32  | 45  |     |     |

### Categorías

|              Ciclo de vida               |      Partes      |            Responsable             |
| :--------------------------------------: | :--------------: | :--------------------------------: |
| 3. Realización (fabricación/ desarrollo) | Usuario/Terminal | Arquitecto Software/ Desarrollador |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| :----------------: | :--------------------------------------: | :---------------: |
|         3          |                    4                     |         2         |

| Recursos ahorrados |
| :----------------: |
|     Procesador     |

### Descripción

Para limitar el número de repaint/re?ow, se recomienda no modificar propiedades una a una.
Preferir la adición/supresión de clases CSS, lo que permite modificar en una sola vez varias propiedades, generando solo uno repaint/re?ow.

### Ejemplo

Preferir la escritura:

```html
<style>
  . in-error {
    color: rojo;
    font-weight: bold;
  }
</style>
<script>
  $el.bind("error", function () {
    $el.addClass("in-error");
  });
  $el.bind("running"),
    function () {
      $el.removeClass("in-error");
    };
</script>
```

### Principio de validación

| El número ..                                                                                                    | es inferior o igual a |
| --------------------------------------------------------------------------------------------------------------- | :-------------------: |
| de declaraciones CSS que pueden agruparse en una sola (margin, padding, ...) y que no utilizan la versión corta |           0           |
