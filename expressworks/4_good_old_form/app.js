let express = require('express');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', (request, response) => {
    response.end(request.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2] || 3000);
