## Apache Vhost: deshabilitar AllowOverride

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 | :-----: | :-: | :-: | :-: |
 | 81 | 101 | 105 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 | :-----------: | :--------: | :------------------: |
 | 4. Producción | Centro de datos | Administrador del sistema |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 | :------: | :----------------------: | :-----------------------: |
 | 2 | 2 | 3 |

 | Recursos guardados |
 | :-------------: |
 | Procesador |

 ### Descripción

 Cuando la directiva AllowOverride está habilitada el servidor HTTP Apache debe recorrer toda la jerarquía de directorios para encontrar posiblemente un archivo .htaccess que contenga reglas de anulación. Se recomienda deshabilitar esta directiva si es posible en la configuración de Apache.

 ### Ejemplo

 En su archivo de configuración de host Apache agregue:

 ```apacheconf
 Permitir anulación ninguna
 ```

 Para llegar más lejos:
 https://httpd.apache.org/docs/2.0/mod/core.html#allowoverride

 ### Regla de validación

 | El número de... | es igual o menor que |
 | -------------------------------------------------- ----------------------------------------- | :----------------------: |
 | archivos de configuración que contienen texto "AllowOverride" con cualquier cosa que no sea "AllowOverride None" | 0 |
