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

let data = [
    {
        title: 'Shopping',
        detail: process.argv[3]
    },
    {
        title: 'Hair cut',
        detail: process.argv[4]
    }
];

app.use('/', function (req, res) {
    res.render('index', {data});
});

app.listen(app.get('port'), function () {
    console.log('Server is up and running');
});
