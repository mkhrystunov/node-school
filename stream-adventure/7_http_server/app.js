let http = require('http');
let through = require('through2');

let server = http.createServer((request, response) => {
    if (request.method === 'POST') {
        request
            .pipe(through((buffer, encoding, next) => {
                next(null, buffer.toString().toUpperCase());
            }, (done) => done()))
            .pipe(response);
    } else {
        response.end('Only POST please');
    }
});

server.listen(Number(process.argv[2] || 8080));
