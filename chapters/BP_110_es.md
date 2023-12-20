## Utilice únicamente archivos de doble suscripción (the double opt-in)

 ### Identificadores

| GreenIT | V2  | V3  | V4  |
| :-----: | :-: | :-: | :-: |
|   103   | 111 | 110 |     |

 ### Categorías

| Ciclo de Vida |       Niveles       | Responsable |
|:-------------:|:-------------------:|:-----------:|
|   2. Diseño   | Usuario/Dispositivo |     PO      |

 ### Indicaciones

| Prioridad | Dificultad de implementación | Impacto ecológico |
|:---------:|:----------------------------:|:-----------------:|
|     2     |              3               |         2         |

|      Recursos ahorrados      |
|:----------------------------:|
| Procesador / Red / Consultas |

 ### Descripción

La doble aceptación es una práctica de marketing que garantiza el consentimiento de los clientes potenciales, generalmente mediante un acuerdo electrónico, marcando una casilla; y luego validar este consentimiento enviando un correo electrónico de confirmación a la dirección indicada. El estado de la dirección se convierte en doble aceptación cuando el destinatario hace clic en el enlace proporcionado en el mensaje recibido. Este proceso permite validar la dirección y verificar que la persona que la proporcionó es el propietario. Esta doble verificación confirma así el compromiso del cliente potencial de recibir boletines, suscripciones,
Por lo tanto, se recomienda utilizar la práctica de la doble aceptación (the double opt-in) para reducir significativamente:

 - el número de correos electrónicos sin impacto real (y, por tanto, el ancho de banda consumido);
 - Carga del servidor SMTP al enviar el correo electrónico;
 - carga del servidor al procesar bajas de suscripción.

 ### Ejemplo

 En el caso de un operador telefónico o un banco: dar a los clientes la posibilidad de elegir entre un catálogo de productos o servicios para los que aceptan ser contactados.

 ### Regla de validación

| El número de ...                             | es igual o menor que |
|----------------------------------------------|:--------------------:|
| archivos de contacto de exclusión voluntaria |          0           |
