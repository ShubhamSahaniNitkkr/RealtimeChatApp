const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;
const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', socket => {
  console.log(`connection established !`);

  socket.on('onlogin', ({ name, room }) => {
    console.log(`Welcome ${name} to ${room} Room.`);
  });

  socket.on('disconnect', () => {
    console.log(`disconnected  !`);
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));
