let through = require('through2');

function write(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}

function end (done) {
    done();
}

let uppercase = through(write, end);

process.stdin.pipe(uppercase).pipe(process.stdout);