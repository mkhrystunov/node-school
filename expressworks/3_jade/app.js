let express = require('express');
let jade = require('jade');
let path = require('path');

let app = express();
app.set('view engine', 'jade');
app.set('views', process.argv[3] || path.join(__dirname, 'templates'));

app.get('/home', (request, response) => {
    response.render('index', {
        date: new Date().toDateString()
    });
});

app.listen(process.argv[2] || 3000);
