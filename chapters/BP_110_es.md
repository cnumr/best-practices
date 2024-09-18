## Utilizar solo archivos de opt-in doble

Traducido por: Murielle Timsit y Franklin Lecointre

### Identificadores

| GreenIT | V2  | V3  | V4  | V5  |
| :-----: | :-: | :-: | :-: | :-: |
|   103   | 111 | 110 |     |     |

### Categorías

| Ciclo de vida |      Partes      |             Responsable              |
| :-----------: | :--------------: | :----------------------------------: |
|   2. Diseño   | Usuario/Terminal | PO/Asistencia a la Dirección de Obra |

### Indicaciones

| Grado de prioridad | Dificultad de implementación o ejecución | Impacto ecológico |
| :----------------: | :--------------------------------------: | :---------------: |
|         2          |                    3                     |         2         |

| Recursos ahorrados  |
| :-----------------: |
| CPU/ Red/ Consultas |

### Descripción

El doble opt-in es una práctica de marketing consistente en solicitar el consentimiento del prospecto, generalmente por acuerdo electrónico marcando una casilla, y luego hacer validar dicho consentimiento mediante el envío de un correo electrónico de confirmación a la dirección indicada. El estado de la dirección se convierte en doble opt-in cuando el destinatario hace clic en un enlace contenido en el mensaje recibido. Este procedimiento permite validar la dirección y verificar que la persona que la ha facilitado es la propietaria. Esta doble verificación confirma así el compromiso del prospecto de recibir un boletín, suscribirse a una suscripción, etc.

Por lo tanto, se recomienda utilizar la práctica de doble opt-in para reducir significativamente:

- el número de correos electrónicos sin impacto real (y, por tanto, el ancho de banda consumido);
- la carga del servidor SMTP al enviar el correo electrónico;
- la carga del servidor al procesar las cancelaciones de suscripción.

### Ejemplo

En el caso de una empresa telefónica o de un banco, dejar a los clientes la elección entre un catálogo de productos o servicios para los que aceptan ser solicitados.

### Principio de validación

| El número ..            | es inferior o igual a |
| ----------------------- | :-------------------: |
| de contactos en opt-out |           0           |
