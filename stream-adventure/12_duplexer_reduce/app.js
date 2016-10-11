let duplexer = require('duplexer2');
let through = require('through2').obj;

module.exports = (counter) => {
    let counts = {};
    let input = through((buffer, encoding, next) => {
        counts[buffer.country] = (counts[buffer.country] || 0) + 1;
        next();
    }, (done) => {
        counter.setCounts(counts);
        done();
    });
    return duplexer({objectMode: true}, input, counter);
};
