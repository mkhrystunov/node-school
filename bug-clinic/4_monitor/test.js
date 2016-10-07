let bunyan = require('bunyan');
let sut = require('./app');

let log = bunyan.createLogger({name: 'scenario'});

sut(log, console.log);
