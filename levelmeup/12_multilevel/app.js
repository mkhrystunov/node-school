let net = require('net');
let multilevel = require('multilevel');

let db = multilevel.client();
let connection = net.connect(4545);

connection.pipe(db.createRpcStream()).pipe(connection);

db.get('multilevelmeup', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
    connection.end();
});
