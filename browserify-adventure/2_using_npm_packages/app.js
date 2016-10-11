let uniq = require('uniq');

let message = prompt('Enter message');
console.log(uniq(message.split(',')));
