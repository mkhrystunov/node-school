let through = require('through2');
let combiner = require('stream-combiner');
let split = require('split');
let sprintf = require('sprintf');
let quote = require('quote-stream');

module.exports = function (file) {
    if (!/\.txt$/.test(file)) {
        return through();
    }

    let counter = 0;
    let transform = through(function (buffer, encoding, next) {
        this.push(sprintf('%3s %s\n', (counter % 5 === 0 ? counter : ''), buffer.toString()));
        counter++;
        next();
    });

    let prefix = through();
    prefix.write('module.exports=');

    return combiner(split(), transform, quote(), prefix);
};
