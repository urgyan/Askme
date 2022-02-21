module.exports.chatSockets = function(socketServer){
    let io = require('socket.io')(socketServer);

    io.sockets.on('connection',function(socket){
        console.log("new connection received",socket.id);

        socket.on('disconnect',function(){
            console.log('Socket disconnected!');
        });

        socket.on('join_room',function(data){
            console.log('joining request received',data);

            socket.join(data.chatroom);

            io.in(data.chatroom).emit('user_joined',data);

        });


        //Detect the event for getting the message
        socket.on('send_message',function(data){
            io.in(data.chatroom).emit('receive_message',data);
        });

    });



} 