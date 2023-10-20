## Prefiere la lista de precarga de HSTS a las redirecciones 301

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 |:-------:|:---:|:---:|:----:|
 | 1060 | | 84 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 |:-------------:|:-------:|:--------------------: |
 | 4. Producción | Red | Administrador del sistema |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 |:------------------:|:-------------------------: |:-----------------:|
 | 4 | 3 | 4 |

 | Recursos guardados |
 |:----------------------------------------------- ----------:|
 | Red / Consultas |

 ### Descripción

 HSTS permite notificar a cualquier navegador utilizando un encabezado de respuesta HTTP en caché que solo se debe acceder al dominio a través de HTTPS.

 Esto permite que las solicitudes posteriores en el mismo dominio utilicen exclusivamente el protocolo HTTPS evitando numerosos redireccionamientos 301.
Sin embargo la primera llamada requiere una respuesta HTTP (potencialmente no segura) con un encabezado STS (Strict-Transport-Security). Además de habilitar HSTS
 es posible registrarse en una lista estática actualizada en todos los navegadores recientes (https://hstspreload.org) para solucionar este problema
y obliga a los navegadores a contactar todo el dominio con HTTPS.

Tenga en cuenta que registrar dominios en htstpreload.org es rápido y afecta a todo el dominio (incluidos los subdominios).
 Asegúrese de que ninguno de sus subdominios se vea afectado negativamente por el uso de HTTPS antes de realizar este registro.
 cuya cancelación puede ser relativamente lenta.

 ### Ejemplo

 Ejemplo de configuración
 ```apacheconf
 Estricta seguridad en el transporte: edad máxima = 63072000; incluirSubDominios; precarga
 ```

 ### Regla de validación

 | El número de... | es igual o menor que |
 |------------------------|:---------------------- --:|
 | no activación de HSTS | 0 |
