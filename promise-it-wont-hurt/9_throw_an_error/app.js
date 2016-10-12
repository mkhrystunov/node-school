function parsePromised(str) {
    return new Promise((resolve, reject) => {
        try {
            resolve(JSON.parse(str));
        } catch (e) {
            reject(e);
        }
    });
}


parsePromised(process.argv[2])
    .then(console.log)
    .then(null, console.log);
