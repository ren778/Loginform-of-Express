const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'web')));

io.on('connection', (socket) => {
  console.log('Connected');
});

server.listen(8080, () => console.log('Listened'));