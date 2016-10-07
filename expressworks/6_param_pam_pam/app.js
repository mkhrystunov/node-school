let express = require('express');
let crypto = require('crypto');

let app = express();

app.put('/message/:id', (request, response) => {
    let str = crypto
        .createHash('sha1')
        .update(new Date().toDateString() + request.params.id)
        .digest('hex');
    response.end(str);
});

app.listen(process.argv[2] || 3000);
