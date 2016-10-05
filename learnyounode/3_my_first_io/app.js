let fs = require('fs');

let filename = process.argv[2];

let fileContent = fs.readFileSync(filename).toString();
console.log(fileContent.split('\n').length - 1);
