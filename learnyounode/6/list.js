let fs = require('fs');
let path = require('path');

module.exports = (dirname, extensionFilter, callback) => {
    extensionFilter = '.' + extensionFilter;
    fs.readdir(dirname, (error, list) => {
        if (error) {
            return callback(error);
        }
        list = list.filter(filename => path.extname(filename) === extensionFilter);
        callback(null, list);
    });
};
