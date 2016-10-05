let http = require('http');
let bl = require('bl');

http.get(process.argv[2], (response) => {
    response.pipe(bl((error, data) => {
        if (error) {
            return console.error(error);
        }
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
}).on('error', console.error);
