let http = require('http');

new Promise((resolve, reject) => {
    let data = '';
    http.get('http://localhost:1337', (response) => {
        response.on('data', (chunk) => {
            data += chunk.toString();
        }).on('end', () => {
            resolve(data);
        });
    }).on('error', (error) => {
        reject(error);
    });
})
    .then((json) => {
        console.log(JSON.parse(json));
    })
    .then(null, console.error);
