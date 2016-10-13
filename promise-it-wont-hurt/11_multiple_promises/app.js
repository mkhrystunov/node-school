function all(promise1, promise2) {
    return new Promise((resolve, reject) => {
        let responses = [];
        let responseHandler = (data) => {
            responses.push(data);
            if (responses.length === 2) {
                resolve(responses);
            }
        };
        promise1.then(responseHandler).then(null, reject);
        promise2.then(responseHandler).then(null, reject);
    });
}

all(getPromise1(), getPromise2())
    .then(console.log);
