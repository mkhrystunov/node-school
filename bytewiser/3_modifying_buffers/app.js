let DOT = '.'.charCodeAt(0);
let BANG = '!'.charCodeAt(0);

process.stdin.on('data', (buffer) => {
    buffer = buffer.map((element) => {
        return element === DOT ? BANG : element;
    });
    console.log(buffer);
});
