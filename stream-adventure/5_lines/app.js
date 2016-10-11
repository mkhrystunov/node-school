let through = require('through2');
let split = require('split');

let evenTransformer = () => {
    let count = 1;

    let write = (buffer, encoding, next) => {
        let string = buffer.toString();
        next(null, ((count % 2 === 0) ? string.toUpperCase() : string.toLowerCase()) + '\n') ;
        count++;
    };
    let end = (done) => done();

    return through(write, end);
};

process.stdin
    .pipe(split())
    .pipe(evenTransformer())
    .pipe(process.stdout);


