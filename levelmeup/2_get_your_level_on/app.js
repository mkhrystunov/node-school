let level = require('level');
let db = level(process.argv[2]);
let key = process.argv[3];

db.get(key, (err, value) => {
    if (err) {
        throw err;
    }
    console.log(value);
});
