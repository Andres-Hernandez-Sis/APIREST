# Métodos de petición HTTP

HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado. Aunque estos también pueden ser sustantivos, estos métodos de solicitud a veces son llamados HTTP verbs.

## GET
    Solicita una representacion de un recurso especifico. Las peticiones que usan GET solo reben recuperar datos.


## HEAD
    Pide una respuesta identica a la de una petición GET, pero sin el cuerpo de la respuesta.

## POST
    se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor.

## PUT
    El modo PUT reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.

## DELETE
    Borra un recurso en espeficico.

## CONNECT
    Establece un tunes hacia el servidor identificado por el recurso.

## OPTIONS 
    Se utiliza para describir las opciones de comunicacion para el recurso de destino.

## TRACE 
    Realiza una prueba en bucle de retorno de mensaje a lo largo de la ruta al recurso de destino.

![img](https://cdn.alvarofontela.com/wp-content/uploads/servertiming.jpg) 


# Codigos de respuestas HTTP


Los códigos HTTP, o códigos de estado HTTP, son mensajes que devuelve el servidor cada vez que el navegador realiza una petición al servidor.

Estos códigos HTTP se clasifican en 5 tipos. El primer dígito del código es el que corresponde al tipo de respuesta a la que nos enfrentamos: respuestas informativas, respuestas satisfactorias, redirecciones, errores del navegador y errores de los servidores.

## Códigos de estado 1xx. 
    Son respuestas de carácter informativo e indican que el navegador puede continuar con la petición. Como no reflejan ningún error, no se muestran al usuario.

-  **100 Cotinue**: Este código de estado notifica que el servidor ha recibido la primera petición y está esperando recibir más instrucciones del navegador.
  
- **101 Switching Protocols**: Se utiliza cuando el servidor acepta un cambio propuesto por el navegador. Por ejemplo, un cambio de HTTP 1.0 a HTTP 1.1.

- **102 Processing**: El servidor ha recibido la petición, pero no la ha completado. Esto evita que el navegador interprete que la petición se ha perdido, si no que todavía no ha finalizado.
    
- **103 Checkpoint**: Se utiliza para reanudar una petición que previamente fue perdida o cancelada.


## Códigos de estado 2xx.

Son respuestas satisfactorias, Simplemente indican que la petición fue procesada correctamente, por lo que lo ideal es que todas las webs devuelvan este código HTTP. Generalmente, como la petición fue exitosa, no se muestra el código de estado HTTP, el navegador únicamente devuelve el contenido que el usuario solicitó.

- **200 OK**: Se utiliza cuando la petición fue completada de manera exitosa. 
  
- **201 Created**: La petición del navegador se completó correctamente y se creó un nuevo recurso.
  
- **203 Non-Authoritative Information**: La petición del navegador se completó correctamente, pero el contenido corresponde a un servidor diferente al que se ha realizado la petición.
  
- **204 No Content**: La petición del navegador se completó correctamente, pero la respuesta no muestra ningún tipo de contenido.

- **205 Reset Content**: Se utiliza cuando la petición del usuario se completa, pero es necesario volver a cargar la página. Es muy habitual cuando se envían datos a través de un formulario de contacto y se recarga la página.

- **206 Partial Content**: Se utiliza cuando la petición se completa, pero solo se devuelve parte del contenido solicitado.
  
- **207 Multi-Status**:  Se devuelve un archivo XML que contiene varias respuestas diferentes, en función de las peticiones realizadas.

## Códigos de estado 3xx. 

  Estos códigos HTTP hacen referencia a cuando el navegador tiene que realizar una acción adicional como, por ejemplo, una redirección 301.

- **300 Multiple Choices**: Ante una solicitud, existe más de una opción para acceder al mismo recurso.

- **301 Moved Permanently**: El recurso solicitado se movió de forma permanente y el navegador es redirigido automáticamente a la nueva ubicación.

- **302 Moved Temporarily**: El recurso solicitado se movió de forma temporal y el navegador es redirigido automáticamente a esa nueva ubicación.

- **303 See Other**: Este código indica que el recurso solicitado se movió, pero no hay ninguna redirección hecha.

- **304 Not Modified**: Este código de estado se da cuando el navegador pregunta al servidor si el recurso ha sido movido desde la última vez que lo consultó, y este no ha sido cambiado.
  
- **305 Use Proxy**: Este código HTTP se utiliza cuando el recurso solicitado debe obtenerse a través de un proxy Location situado en la cabecera.
  
- **306 Switch Proxy**: En la actualidad este código de estado HTTP ya no se utiliza, pero se reserva para futuros casos.
  
- **307 Temporary Redirect**: El recurso que solicita el navegador se puede obtener en otro lugar, pero únicamente para esta petición. Para próximas peticiones se puede utilizar la ubicación original.
  
- **308 Permanent Redirect**: El recurso que solicita el navegador se encuentra en otra ubicación y el cambio es permanente. A diferencia del código HTTP 301, no se cambia el método HTTP para la nueva petición.

## Códigos de estado 4xx.

    Hacen referencia a errores producidos por el navegador web. En estos casos, el usuario recibe una página en HTML en la que es informado del error.

- **400 Bad Request**: El servidor no entiende la petición del navegador porque la sintaxis no es correcta.
  
- **401 Unauthorized**: La petición que realiza el navegador precisa autenticación.
  
- **402 Payment Required**: Es un código HTTP reservado para futuros usos.
  
- **403 Forbidden**: La petición que realiza el navegador es correcta, pero se ha denegado el acceso al recurso solicitado.
  
- **404 Not Found**: El recurso que solicita el navegador no se encuentra o no está disponible en el servidor. No es posible detectar si esta ausencia es temporal o permanente.
  
- **405 Method Not Allowed**: El navegador utiliza un método para obtener el recurso que no es aceptado por el servidor.
  
- **406 Not Acceptable**: El recurso solicitado tiene un formato que no es aceptado por el navegador.
  
- **407 Proxy Authentification Required**: Un código de estado similar al 401, pero en este caso el navegador debe autenticarse primero mediante un proxy.
  
- **408 Request Timeout**: Este código HTTP se muestra cuando el navegador ha tardado tanto tiempo en realizar su petición que el servidor ya no la espera.
  
- **409 Conflict**: No se pudo completar la petición porque se produjo un conflicto con el recurso solicitado.
  
- **410 Gone**: No es posible encontrar el recurso solicitado y la ausencia se considera permanente. Si hay alguna posibilidad de que esta ausencia sea temporal, se debe utilizar el código HTTP 404.
  
- **411 Length Required**: El servidor devuelve este código HTTP cuando la petición no incluye la cabecera Content-Length adecuada.
  
- **414 Request-URI Too Long**: La URL que se corresponde con la petición realiza es demasiado larga para ser procesada. Esto ocurre cuando una dirección tiene muchos parámetros.
  
- **423 Locked**: Se muestra este código HTTP cuando el recurso solicitado está bloqueado.
  
- **429 Too Many Request**: El navegador realiza demasiadas peticiones en un período de tiempo determinado.


## Códigos de estado 5xx. 

    Estos códigos HTTP también muestran errores, pero por el lado del servidor web    

- **500 Internal Server Error** No se puede completar la petición, ya que se ha producido un error inesperado en el navegador.

- **501 Not implemented**: El servidor no soporta alguna funcionalidad necesaria para responder a la solicitud que realiza el navegador.

- **502 Bad Gateway**: El servidor no puede responder con la petición del navegador, ya que este servidor está actuando como proxy o gateway, o tiene instalado un proxy inverso y ha recibido una respuesta no válida desde dicho servidor.

- **503 Service Unavailable** El servidor no puede responder a la petición del navegador porque está saturado o se están realizando tareas de mantenimiento en el mismo.

- **504 Gateway Timeout**: El servidor no puede responder con la petición del navegador, ya que este servidor está actuando como proxy o gateway, o tiene instalado un proxy inverso y se ha agotado el tiempo de respuesta de dicho servidor.

- **505 HTTP Version Not Supported**: El servidor no es compatible con la versión del protocolo HTTP utilizada en la petición del navegador.
  
- **509 Bandwidth Limit Exceeded**: Es un código HTTP muy utilizado en cPanel y se muestra cuando se ha alcanzado el límite de ancho de banda y no se puede procesar la petición.

- **510 Not Extended**: Este código se muestra cuando es necesario añadir más extensiones al servidor para que pueda procesar la petición.
  
- **511 Network Authentification Required**: El navegador debe autenticarse para poder cumplir las peticiones.

![img](https://www.lucushost.com/blog/wp-content/uploads/2018/09/codigos-estado-http.png)