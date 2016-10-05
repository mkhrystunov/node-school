let fs = require('fs');
let path = require('path');

let dirname = process.argv[2];
let fileExtension = '.' + process.argv[3];

fs.readdir(dirname, (error, list) => {
    if (error) {
        console.error(error);
    }
    list = list.filter((filename) => path.extname(filename) === fileExtension);
    list.forEach((filename) => console.log(filename));
});
