let fs = require('fs');
let path = require('path');
let Hapi = require('hapi');
let rot13 = require('rot13-transform');

let server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/',
    method: 'GET',
    handler: (request, reply) => {
        let fileStream = fs.createReadStream(path.join(__dirname, 'file.txt'));
        reply(fileStream.pipe(rot13()));
    }
});

server.start(() => {
    console.log('Server running at: %s', server.info.uri);
});
