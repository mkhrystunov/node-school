let H2o2 = require('h2o2');
let Hapi = require('hapi');

let server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.register(H2o2, (err) => {
    if (err) {
        throw err;
    }
});

server.route({
    path: '/proxy',
    method: 'GET',
    handler: {
        proxy: {
            host: 'localhost',
            port: '65535'
        }
    }
});

server.start(() => {
    console.log('Server running at: %s', server.info.uri);
});
