require('stackup');
let domain = require('domain');
let readFile = require('fs').readFile;

module.exports = function scenario(jsonPath, cb) {
    let d = domain.create();

    d.on('error', cb);

    d.run(() => {
        readFile(jsonPath, {encoding: 'utf8'}, function (error, contents) {
            cb(error, JSON.parse(contents));
        });
    });
};
