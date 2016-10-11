let tar = require('tar');
let crypto = require('crypto');
let zlib = require('zlib');
let concat = require('concat-stream');

let decipher = crypto.createDecipher(process.argv[2], process.argv[3]);

let parser = tar.Parse();
parser.on('entry', function (entry) {
    if (entry.type !== 'File') {
        return;
    }

    let encrypt = crypto.createHash('md5', {encoding: 'hex'});
    entry.pipe(encrypt).pipe(concat(function (hash) {
        console.log(hash + ' ' + entry.path);
    }));
});

process.stdin.pipe(decipher).pipe(zlib.createGunzip()).pipe(parser);

