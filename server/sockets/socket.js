const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');


    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'Bienvenido a esta app'
    });


    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        //     if (mensaje.usuario) {
        //         callback({
        //             respuesta: 'todo salió bien'
        //         });
        //     } else {
        //         callback({
        //             respuesta: 'todo salió mal'
        //         });

        //     }


    });

});