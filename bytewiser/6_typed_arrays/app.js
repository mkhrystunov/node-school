process.stdin.on('data', (buffer) => {
    console.log(JSON.stringify(new Uint8Array(buffer)));
});
