let express = require('express');

let port = process.argv[2];
let app = express();
app.get('/home', (request, response) => {
    response.end('Hello World!');
});

app.listen(port);
