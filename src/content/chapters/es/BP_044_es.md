---
title: title
createdAt: 2024-09-06T20:43:42.530Z
updatedAt: 2024-09-06T20:43:42.530Z
language: es
published: false
---
## Usar la delegación de eventos
Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2 | V3 | V4 |
|:-------:|:----:|:----:|:----:|
|  41   | 46  | 44  | |

### Categorías

| Ciclo de vida | Partes | Responsable  |
|:---------:|:----:|:----:|
| 3. Realización (fabricación/ desarrollo) | Usuario/Terminal | Arquitecto Software/Desarrollador |

### Indicaciones

| Grado de prioridad   | Dificultad de implementación o ejecución | Impacto ecológico   |
|:-------------------:|:-------------------------:|:---------------------:|
| 3 | 3 | 4 |

|Recursos ahorrados |
|:----------------------------------------------------------:|
| Procesador/ Memoria RAM   |

### Descripción

La delegación de eventos permite no sobrecargar la memoria del navegador instanciando un solo "listener" para varios elementos del DOM (Document Object Model).

### Ejemplo

El elemento del DOM cuyo ID se declara como el delegado.
Intercepta los eventos de todos sus hijos.
```html
<head>
	// ...
	<style type="text/css">
 	#t { border: 1px solid red } #t1 { background-color: pink; }
	</style>
	<script type="text/javascript">
    	function modifyText(new_text) {
        	var t2 = document.getElementById("t2");
        	t2.?rstChild.nodeValue = new_text;
    	}
    	function load() {
        	var el = document.getElementById("t");
        	el.addEventListener("click", function() {
          	modifyText("four")
        	}, false);
    	}
	</script>
</head>
<body onload="load();">
	<table id="t">
    	<tr><td id="t1"><button type="button">one</button></td></tr>
    	<tr><td id="t2"><button type="button">two</button></td></tr>
	</table>
	<!-- ... -->
</body>
```

### Principio de validación

| El número ..   | es inferior o igual a   |  
|-------------------|:-------------------------:|
| de escuchas (listeners) de un mismo evento sobre varios elementos HTML, que forman parte de un mismo grupo, sin utilizar la delegación de eventos  | 0  |


