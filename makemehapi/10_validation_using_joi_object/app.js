let Hapi = require('hapi');
let Joi = require('joi');

let server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/login',
    method: 'POST',
    config: {
        handler: (request, reply) => {
            reply('login successful');
        },
        validate: {
            payload: Joi.object({
                isGuest: Joi.boolean().required(),
                username: Joi.string().when('isGuest', {is: false, then: Joi.required()}),
                accessToken: Joi.string().alphanum(),
                password: Joi.string().alphanum()
            })
                .options({allowUnknown: true})
                .without('password', 'accessToken')
        }
    }
});

server.start(() => {
    console.log('Server is running at: %s', server.info.uri);
});
