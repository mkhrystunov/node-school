let http = require('http');
let bl = require('bl');

let makeRequest = (url, callback = null) => {
    http.get(url, (response) => {
        response.pipe(bl((error, data) => {
            if (error) {
                return console.error(error);
            }
            console.log(data.toString());
            if (typeof callback === 'function') {
                callback();
            }
        }));
    }).on('error', console.error);
};

makeRequest(process.argv[2], () => {
    makeRequest(process.argv[3], () => {
        makeRequest(process.argv[4]);
    });
});
