const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app)
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'mike123',
    text: 'Hey, what is going on?',
    createdAt: 123
  });

  socket.on('createMessage', (newMessage) => {
    console.log('A message was received in server', newMessage);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});



server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
