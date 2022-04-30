const http = require('http').createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World!');
    res.end();
})

const io = require('socket.io')(http);

io.on('connection', function (socket) {
    let currentRoomId;

    console.log(`User is Connected in`);

    socket.on('test', function () {
        try {
            socket.emit('testComplete', 'Cool Test')
        } catch (e) {
            socket.emit('testComplete', 'Test Error')
        }
    });

    socket.on('disconnecting', (reason) => {

        console.log('disconnecting -- > ', socket.id, reason)

    });

    socket.on('disconnect', function (reason) {
        try {
            console.log('disconnected  --> ', socket.id, reason);
        } catch (e) {

        }
    })

    socket.on('addUser', function (args) {
        const { roomId, name } = args;
        socket.join(roomId);
        currentRoomId = roomId;
        socket.broadcast.emit('notification', `${name} joined in ${roomId}`);
    });

    socket.on('changeRoom', function (args) {
        const { roomId, name } = args;
        socket.leave(currentRoomId);
        socket.join(roomId);
        currentRoomId = roomId;
        if (name) {
            socket.broadcast.emit('notification', `${name} changed room to ${roomId}`);
        }
    })

    socket.on('sendMessage', function (args) {
        const { roomId } = args;
        io.sockets.in(roomId).emit('sendMessageComplete', args);
    })
});

http.listen(process.env.port || 8080, function () {
    console.log(`listening on ${process.env.port || 8080}`);
});