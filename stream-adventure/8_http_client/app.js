let request = require('request');

let serverStream = request.post('http://localhost:8099');

process.stdin.pipe(serverStream).pipe(process.stdout);
