## Favorecer las fuentes (tipo de letra) estándar

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   19    | 17  | 29  |     |     |

### Categorías

|              Ciclo de vida               | Partes |   Responsable   |
| :--------------------------------------: | :----: | :-------------: |
| 3. Realización (fabricación/ desarrollo) |  Red   | Diseñador UX/UI |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| ------------------ | :--------------------------------------: | :---------------: |
| 4                  |                    3                     |         4         |

|       Recursos ahorrados       |
| :----------------------------: |
| Almacenamiento/ Red/ Consultas |

### Descripción

Preferir las fuentes estándar, puesto que ya están presentes en el ordenador del usuario, por lo que no es necesario descargarlas.
Esto ahorra ancho de banda y acelera la visualización del sitio. Estos tipos de letra estándar se enumeran en https://systemfontstack.com/ por ejemplo.

Sin embargo si necesita una fuente particular para su servicio digital, incluso si es una Api font (google font, adobe font, etc.), debe:

- Alojar la fuente usted mismo
- Utilizar una negrita falsa mediante la propiedad css `-webkit-text-Stroke`
- Preferir una variable fuente si necesita más de una fuente (por ejemplo: regular, bold, etc.)
- Optimizar la fuente aligerando caracteres innecesarios (ejemplo: un sitio en francés solo necesita caracteres latinos, por lo que puede eliminar el alfabeto cirílico)

Si usted tiene pictogramas o ilustraciones monocromáticas (vea la buena práctica: Prefiera los glifos a las imágenes) y si los derechos de los usos de la fuente lo permiten, incorporar los nuevos glifos directamente a la fuente.

### Ejemplo

Aquí está una tabla comparativa de los pesos de la fuente Oswald:
| | Regular | Regular + bold | Variable | Latino Regular ( Latino Regular + Latino Bold ( Latino Variable |
|---:| :---------------: |:---------------:|:------------:| :-----:| :-----:| :-----:|
|Peso|37.6kb|76.9kb|66kb|16kb|32.5kb| ?

### Solución Alternativa

Sus usuarios pueden elegir, a través de las preferencias de sus navegadores, solicitar a los sitios web que visiten y que utilizan el media query `prefers-reduced-data`, que optimicen las consultas de red realizadas.

En el ejemplo de abajo, solo descargamos el tipo de letra `Montserrat` si y solo si el usuario no ha definido una preferencia. Por el contrario, se utilizará la fuente `Arial` sin descargar la `Montserrat`.

```css
@media (prefers-reduced-data: no-preference) {
	@font-face {
    	font-family: Montserrat;
    	font-style: normal;
    	font-weight: 400,
    	src:  url('fonts/Montserrat-latin-regular.woff2');
	}
}

body {
  font-family: Montserrat, Arial;
}
```

Para más información sobre la media query `prefers-reduced-data`: [https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data](https//developer.mozilla.org/enUS/USdocs/Wed@s/reduced/bDatos/

### Principio de validación

| El número ..           | es inferior o igual a |
| ---------------------- | :-------------------: |
| de fuentes descargadas |           2           |
