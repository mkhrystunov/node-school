let qhttp = require('q-io/http');

qhttp.read('http://localhost:7000')
    .then((userId) => {
        return qhttp.read('http://localhost:7001/' + userId);
    })
    .then(json => JSON.parse(json))
    .then(console.log)
    .then(null, console.error);
