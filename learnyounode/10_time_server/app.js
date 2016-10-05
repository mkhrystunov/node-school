let net = require('net');
let strftime = require('strftime');

let port = process.argv[2];

let server = net.createServer((socket) => {
    socket.end(strftime('%Y-%m-%d %H:%M\n'));
});

server.listen(port);
