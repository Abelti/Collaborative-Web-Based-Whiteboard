const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) =>{
    console.log('User connected, Online');

    socket.on('canvas-data', (data) => {
        socket.broadcast('canvas-data', data);
    });
});

const PORT = process.env.PORT || 5000;
http.listen(PORT, function() {
    console.log('Server listening on port: ' + PORT);
});