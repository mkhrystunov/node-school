let level = require('level');

let db = level(process.argv[2]);

db.createReadStream().on('data', (data) => {
    console.log('%s=%s', data.key, data.value);
});
