let promise = Promise.reject(new Error('REJECTED!'));
promise.catch((error) => {
    console.log(error.message);
});
