let path = require('path');
let Hapi = require('hapi');
let Vision = require('vision');

let server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.register(Vision, (err) => {
    if (err) {
        throw err;
    }
});

server.views({
    engines: {
        html: require('handlebars')
    },
    path: path.join(__dirname, 'templates'),
    helpersPath: path.join(__dirname, 'helpers')
});

server.route({
    path: '/',
    method: 'GET',
    handler: {
        view: 'index.html'
    }
});

server.start(() => {
    console.log('Server is running at: %s', server.info.uri);
});
