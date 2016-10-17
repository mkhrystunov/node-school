let path = require('path');
let express = require('express');

let app = express();

app.set('port', Number(process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, '/views'));
app.engine('jsx', require('express-react-views').createEngine({transformViews: false}));

require('babel-core/register')({
    presets: ['es2015', 'react']
});

app.use('/', function (req, res) {
    res.render('index', '');
});

app.listen(app.get('port'), function () {
    console.log('Server is up and running');
});
