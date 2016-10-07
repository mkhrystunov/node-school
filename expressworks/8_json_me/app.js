let express = require('express');
let fs = require('fs');

let app = express();

let file = process.argv[3];

app.get('/books', (request, response) => {
    fs.readFile(file, (error, data) => {
        if (error) {
            return response.sendStatus(500);
        }
        try {
            response.json(JSON.parse(data));
        } catch (e) {
            response.sendStatus(500);
        }
    });
});

app.listen(process.argv[2] || 3000);
