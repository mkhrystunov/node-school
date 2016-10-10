let fs = require('fs');
let level = require('level');

let db = level(process.argv[2]);
let filename = process.argv[3];

fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }

    let operations = data.split('\n').map((line) => {
        let [type, key, value] = line.split(',');
        return {
            type, key, value
        };
    });
    db.batch(operations, (err) => {
        throw err;
    });
});
