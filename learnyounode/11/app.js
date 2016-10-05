let http = require('http');
let fs = require('fs');

let port = process.argv[2];
let filename = process.argv[3];

let fileStream = fs.createReadStream(filename);

let server = http.createServer((request, response) => {
    response.writeHead(200, {'content-type': 'text/plain'});
    fileStream.pipe(response);
});

server.listen(port);
