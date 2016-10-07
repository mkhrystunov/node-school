let fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (error, data) => {
    if (error) {
        return console.error(error);
    }
    data.split('\n').forEach(function (element) {
        console.log(new Buffer(element));
    });
});
