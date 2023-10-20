## Utilice únicamente archivos de doble suscripción

 ### Identificadores

 | TI verde | V2 | V3 | V4 |
 | :-----: | :-: | :-: | :-: |
 | 103 | 111 | 110 | |

 ### Categorías

 | Ciclo de vida | Niveles | Responsable |
 | :--------: | :---------: | :---------: |
 | 2. Diseño | Usuario/Dispositivo | PO |

 ### Indicaciones

 | Prioridad | Dificultad de implementación | Impacto ecológico |
 | :------: | :----------------------: | :-----------------------: |
 | 2 | 3 | 2 |

 | Recursos guardados |
 | :---------------------------: |
 | Procesador / Red / Consultas |

 ### Descripción

La doble aceptación es una práctica de marketing que garantiza el consentimiento de los clientes potenciales generalmente mediante un acuerdo electrónico marcando una casilla; y luego validar enviando correos de confirmación a las direcciones indicadas. El estado de la dirección se convierte en doble aceptación cuando los destinatarios hacen clic en el enlace proporcionado en el mensaje recibido. Este proceso valida direcciones y verifica que la persona que las proporcionó es el propietario. Esta doble verificación confirma el compromiso de los prospectos de recibir boletines suscripciones etc.

Por lo tanto se recomienda utilizar la práctica del doble opt-in para reducir significativamente:

 - el número de correos electrónicos sin impacto real (y por tanto sin uso de ancho de banda);
 - carga del servidor SMTP al enviar la campaña de correo electrónico;
 - carga del servidor al procesar bajas de suscripción.

 ### Ejemplo

 En el caso de un operador telefónico o un banco: dar a los clientes la posibilidad de elegir entre un catálogo de productos o servicios que aceptan que se les solicite.

 ### Regla de validación

 | El número de... | es igual o menor que |
 | --------------------- | :----------------------: |
 | archivos de contacto de exclusión voluntaria | 0 |
