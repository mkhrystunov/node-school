let fs = require('fs');

let filename = process.argv[2];

fs.readFile(filename, (error, buffer) => {
    if (error) {
        return console.error(error);
    }
    console.log(buffer.toString().split('\n').length - 1);
});
