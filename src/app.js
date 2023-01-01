const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'web')));

io.on('connection', (socket) => {
});

server.listen(PORT, () => console.log('Listened'));

module.exports = server;