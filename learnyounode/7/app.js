let http = require('http');

http.get(process.argv[2], (response) => {
    response
        .setEncoding('utf-8')
        .on('data', console.log)
        .on('error', console.error)
        .on('end', console.log);
}).on('error', console.error);
