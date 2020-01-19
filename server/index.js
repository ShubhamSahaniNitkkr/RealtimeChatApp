const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const { addUser, RemoveUser, getUser, getUsersInRoom } = require('./users.js');

const PORT = process.env.PORT || 5000;
const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', socket => {
  socket.on('onlogin', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.emit('message', {
      user: 'admin',
      text: `${user.name} ,Welcome to the room ${user.room}`
    });

    socket.broadcast.to(user.room).emit('message', {
      user: 'admin',
      text: `${user.name} ,has Joined ${user.room} Room`
    });

    socket.join(user.room);
    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);
    console.log('wht my id is', socket.id);
    io.to(user.room).emit('message', { user: user.name, text: message });
    socket.join(user.room);
    callback();
  });

  socket.on('disconnect', () => {
    console.log(`disconnected  !`);
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));
