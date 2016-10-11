var fs = require('fs');
var path = require('path');
var sprintf = require('sprintf');

var src = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');
src.split('\n').reduce(function (count, line) {
    console.log(sprintf('%3s %s', (count % 5 === 0 ? count : ''), line));
    return count + 1;
}, 0);
