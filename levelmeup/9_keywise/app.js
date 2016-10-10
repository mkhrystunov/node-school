let fs = require('fs');
let level = require('level');

let db = level(process.argv[2], {valueEncoding: 'json'});
let filename = process.argv[3];

fs.readFile(filename, 'utf-8', (error, data) => {
    if (error) {
        throw error;
    }
    data = JSON.parse(data);
    let operations = data.map((entry) => {
        return {
            operation: 'put',
            key: (entry.type === 'repo' ? (entry.user + '!' ) : '') + entry.name,
            value: entry
        };
    });
    db.batch(operations);
});
