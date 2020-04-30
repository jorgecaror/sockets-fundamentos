var socket = io();
//los "on" son para escuchar instrucción
socket.on('connect', function() {

    console.log('Conectado al Servidor');

});

socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});

//los emit son para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Jorge',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

//escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});