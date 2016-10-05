let http = require('http');
let map = require('through2-map');

let port = process.argv[2];

let server = http.createServer((request, response) => {
    if (request.method !== 'POST') {
        console.error('Server accepts only POST requests.');
    } else {
        request.pipe(map((chunk) => {
            return chunk.toString().toUpperCase();
        })).pipe(response);
    }
});

server.listen(port);
