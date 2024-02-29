## Deshabilitar la búsqueda de DNS de Apache

 ### Identificadores

 | GreenIT | V2  |  V3  | V4  |
 | :-----: | :-: | :--: | :-: |
 |    84   | 100 | 1 04 |     |

 ### Categorías

 | Ciclo de vida |     Niveles     |        Responsable        |
 | :-----------: | :-------------: | :-----------------------: |
 | 4. Producción | Centro de datos | Administrador del sistema |

 ### Indicaciones

 | Prioridad | Dificultad de implementación |     Impacto ecológico     |
 | :-------: | :--------------------------: | :-----------------------: |
 |     2     |               2              |              3            |

 |  Recursos ahorrados |
 | :-----------------: |
 |   Procesador/Red    |

 ### Descripción

 Los servidores web registran información para todas las solicitudes HTTP, y generalmente traducen las direcciones IP de los usuarios en nombres de dominio. Esta conversión (búsqueda de DNS) es uno de los cuellos de botella del servidor Apache HTTP.

Por lo tanto debería estar deshabilitado.

 ### Ejemplo

 En el archivo de configuración de su servidor Apache ubicado en `/etc/apache/httpd.conf` o en `/etc/apache2/apache2.conf` escriba:

```apacheconf
 HostnameLookups Off
```

 ### Regla de validación

 | El número de...       | es igual o menor que |
 | --------------------- | :------------------: |
 | búsquedas DNS activas |          0           |
