const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'web')));

io.on('connection', (socket) => {
  socket.on('mode', (mode) => {
    socket.mode = mode;
  });

  socket.on('sessionid', (sessionid) => {
    socket.sessionID = sessionid;
  });
});

server.listen(PORT, () => console.log('Listened'));

module.exports = server;