let level = require('level');
let db = level(process.argv[2]);

let handleResult = (key) => {
    return (err, value) => {
        if (!err) {
            console.log('%s=%s', key, value);
        }
    };
};

for (let i = 0; i < 100; i++) {
    let key = 'key' + i;
    db.get(key, handleResult(key));
}
