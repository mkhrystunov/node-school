var url = require('url');
var querystring = require('querystring');

var parsedUrl = url.parse(prompt('message'));
var query = querystring.parse(parsedUrl.query);
console.log(parsedUrl.protocol + '//' + parsedUrl.hostname + url.resolve(parsedUrl.pathname, query.file));
