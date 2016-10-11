let trumpet = require('trumpet');
let through = require('through2');

let tr = trumpet();

let innerStream = tr.select('.loud').createStream();
innerStream.pipe(through((buffer, encoding, next) => {
    next(null, buffer.toString().toUpperCase());
}, (done) => {
    done();
})).pipe(innerStream);

process.stdin.pipe(tr).pipe(process.stdout);
