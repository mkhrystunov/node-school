let array = new Uint32Array([Number(process.argv[2])]);
console.log(JSON.stringify(new Uint16Array(array.buffer)));
