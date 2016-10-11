let Hapi = require('hapi');

let server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/upload',
    method: 'POST',
    config: {
        handler: (request, reply) => {
            let body = '';
            request.payload.file
                .on('data', (data) => {
                    body += data;
                })
                .on('end', () => {
                    reply(JSON.stringify({
                        description: request.payload.description,
                        file: {
                            data: body,
                            filename: request.payload.file.hapi.filename,
                            headers: request.payload.file.hapi.headers
                        }
                    }));
                });
        },
        payload: {
            output: 'stream',
            parse: true,
            allow: 'multipart/form-data'
        }
    }
});

server.start(() => {
    console.log('Server is running at: %s', server.info.uri);
});
