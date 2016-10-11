let combine = require('stream-combiner');
let split = require('split');
let through = require('through2');
let zlib = require('zlib');

module.exports = () => {
    let genre;
    let grouper = through(function (buffer, encoding, next) {
        if (!buffer.length) {
            return next();
        }
        let entry = JSON.parse(buffer);
        if (entry.type === 'genre') {
            if (genre) {
                this.push(JSON.stringify(genre) + '\n');
            }
            genre = {
                name: entry.name,
                books: []
            };
        } else if (entry.type === 'book') {
            genre.books.push(entry.name);
        }

        next();
    }, function (done) {
        if (genre) {
            this.push(JSON.stringify(genre) + '\n');
        }
        done();
    });
    return combine(split(), grouper, zlib.createGzip());
};
