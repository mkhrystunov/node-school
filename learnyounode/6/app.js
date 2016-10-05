let list = require('./list');

list(process.argv[2], process.argv[3], (error, list) => {
    if (error) {
        console.error(error);
    }
    list.forEach(filename => console.log(filename));
});
