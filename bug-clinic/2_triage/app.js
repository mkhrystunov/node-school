let fs = require('fs');

let peach = (obj) => {
    console.trace('traced');
    console.log(obj);
};

let bowser = (callback) => {
    fs.readFile(process.argv[2], {encoding: 'utf8'}, callback);
};

let koopa = (error, file) => {
    if (error) {
        return console.error(error);
    }
    peach(JSON.parse(file));
};

bowser(koopa);
