let Hapi = require('hapi');
let server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/',
    method: 'GET',
    handler: (request, reply) => {
        reply('Hello hapi');
    }
});

server.start(() => {
    console.log('Server running at: %s', server.info.uri);
});
