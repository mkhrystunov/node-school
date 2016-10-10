let Hapi = require('hapi');
let server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/{name}',
    method: 'GET',
    handler: (request, reply) => {
        reply('Hello ' + encodeURIComponent(request.params.name));
    }
});

server.start(() => {
    console.log('Server runnin at: %s', server.info.uri);
});
