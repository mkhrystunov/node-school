var ndjson = require('./ndjson');

console.log(ndjson.parse(prompt('Message')));
console.log(ndjson.stringify(prompt('Message')));
