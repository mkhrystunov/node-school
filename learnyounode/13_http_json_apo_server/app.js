let http = require('http');
let url = require('url');

let port = process.argv[2];

let server = http.createServer((request, response) => {
    let parsedUrl = url.parse(request.url, true);
    let pathname = parsedUrl.pathname;
    let query = parsedUrl.query;

    let date = new Date(query.iso);
    switch (pathname) {
        case '/api/parsetime':
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.end(JSON.stringify({
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }));
            break;
        case '/api/unixtime':
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.end(JSON.stringify({
                unixtime: date.getTime()
            }));
            break;
        default:
            response.writeHead(404).end();
    }
});

server.listen(port);
