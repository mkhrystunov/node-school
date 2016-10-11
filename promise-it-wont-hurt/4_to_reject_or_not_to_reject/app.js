new Promise((resolve, reject) => {
    resolve('I FIRED');
    reject(new Error('I DID NOT FIRE'));
}).then((data) => {
    console.log(data)
}, (error) => {
    console.log(error.message);
});