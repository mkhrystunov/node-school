let level = require('level');
let db = level(process.argv[2]);

let object = JSON.parse(process.argv[3]);

let handleError = (error) => {
    console.error(error);
};

for (let property in object) {
    if (object.hasOwnProperty(property)) {
        db.put(property, object[property], handleError);
    }
}
