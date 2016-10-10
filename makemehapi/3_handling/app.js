let path = require('path');
let Hapi = require('hapi');
let Inert = require('inert');

let server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.register(Inert, (err) => {
    if (err) {
        throw err;
    }
});

server.route({
    path: '/',
    method: 'GET',
    handler: {
        file: path.join(__dirname, 'index.html')
    }
});

server.start(() => {
    console.log('Server running at: %s', server.info.uri);;
});
