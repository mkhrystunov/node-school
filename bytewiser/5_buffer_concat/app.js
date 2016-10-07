let bigassBuffer = new Buffer([]);
process.stdin.on('data', (buffer) => {
    bigassBuffer = Buffer.concat([bigassBuffer, buffer]);
});
process.stdin.on('end', () => {
    console.log(bigassBuffer);
});
