let express = require('express');

let app = express();
app.get('/search', (request, response) => {
    response.send(request.query);
});

app.listen(process.argv[2] || 3000);
